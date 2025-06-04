
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  FolderOpen, 
  Settings, 
  Building,
  Calculator,
  Scale,
  DollarSign,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'الرئيسية', path: '/' },
    { icon: FolderOpen, label: 'قطاع المشروعات', path: '/projects' },
    { icon: Settings, label: 'قطاع التنفيذ', path: '/execution' },
    { icon: Building, label: 'القطاع العقاري', path: '/real-estate' },
    { icon: DollarSign, label: 'القطاع المالي', path: '/finance' },
    { icon: Users, label: 'الشئون الإدارية', path: '/admin' },
    { icon: Scale, label: 'القطاع القانوني', path: '/legal' },
  ];

  return (
    <div className={`bg-white shadow-xl transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-erp-blue">نظام ERP</h1>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
      </div>

      <nav className="mt-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 mx-2 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'bg-gradient-to-r from-erp-blue to-erp-blue-light text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-white' : 'text-erp-blue'} />
              {!isCollapsed && (
                <span className="mr-3 font-medium">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
