
import React from 'react';
import { StatCard } from '../components/StatCard';
import { TaskManager } from '../components/TaskManager';
import { ProjectChart } from '../components/ProjectChart';
import { 
  Building, 
  Users, 
  DollarSign, 
  FolderOpen,
  TrendingUp,
  Calendar
} from 'lucide-react';

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم الرئيسية</h1>
        <p className="text-gray-600 mt-2">نظرة عامة على أداء جميع قطاعات الهيئة</p>
      </div>

      {/* إحصائيات عامة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="إجمالي المشاريع"
          value="28"
          change="12%"
          changeType="increase"
          icon={FolderOpen}
          color="from-erp-blue to-erp-blue-light"
        />
        <StatCard
          title="الوحدات المباعة"
          value="145"
          change="8%"
          changeType="increase"
          icon={Building}
          color="from-erp-green to-erp-green-light"
        />
        <StatCard
          title="إجمالي الإيرادات"
          value="25.4 مليون"
          change="15%"
          changeType="increase"
          icon={DollarSign}
          color="from-erp-orange to-erp-orange-light"
        />
        <StatCard
          title="عدد الموظفين"
          value="127"
          change="3%"
          changeType="increase"
          icon={Users}
          color="from-erp-purple to-erp-purple-light"
        />
      </div>

      {/* الرسوم البيانية */}
      <ProjectChart />

      {/* إدارة المهام */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TaskManager />
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">الأنشطة الحديثة</h3>
          <div className="space-y-4">
            {[
              { action: 'تم اعتماد مستخلص جديد', department: 'قطاع التنفيذ', time: 'منذ 30 دقيقة' },
              { action: 'تم بيع وحدة سكنية', department: 'القطاع العقاري', time: 'منذ ساعة' },
              { action: 'تم تحصيل قسط', department: 'القطاع المالي', time: 'منذ ساعتين' },
              { action: 'تم إضافة موظف جديد', department: 'الشئون الإدارية', time: 'منذ 3 ساعات' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-erp-blue rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.department} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
