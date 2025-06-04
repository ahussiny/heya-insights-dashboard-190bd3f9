
import React from 'react';
import { Bell, User, Search } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="البحث..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-erp-blue focus:border-transparent w-80"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-erp-blue transition-colors">
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">أحمد محمد</p>
              <p className="text-xs text-gray-500">مدير النظام</p>
            </div>
            <button className="p-2 bg-gradient-to-r from-erp-blue to-erp-blue-light text-white rounded-full">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
