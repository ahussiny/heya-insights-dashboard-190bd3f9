
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="/lovable-uploads/2afaecf2-ca8f-4cad-9518-80c17aa49952.png" 
            alt="شعار الهيئة" 
            className="h-12 w-12 object-contain"
          />
          <h2 className="text-xl font-semibold text-gray-800">الهيئة العامة لتعاونيات البناء والاسكان</h2>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <User size={20} />
            <span className="text-sm">المسؤول</span>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleLogout}
            className="flex items-center space-x-2"
          >
            <LogOut size={16} />
            <span>تسجيل الخروج</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
