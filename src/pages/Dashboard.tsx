
import React from 'react';
import { StatCard } from '../components/StatCard';
import { TaskManager } from '../components/TaskManager';
import { ProjectChart } from '../components/ProjectChart';
import { AlertsPanel } from '../components/AlertsPanel';
import { DashboardCharts } from '../components/DashboardCharts';
import { SectorReportsPanel } from '../components/SectorReportsPanel';
import { 
  Building, 
  Users, 
  DollarSign, 
  FolderOpen,
  TrendingUp,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Scale,
  Handshake,
  Home
} from 'lucide-react';

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم الرئيسية</h1>
        <p className="text-gray-600 mt-2">نظرة عامة شاملة على أداء جميع قطاعات الهيئة</p>
      </div>

      {/* إحصائيات عامة رئيسية */}
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

      {/* مفاتيح التقارير القطاعية */}
      <SectorReportsPanel />

      {/* المخططات البيانية التفاعلية */}
      <DashboardCharts />

      {/* إحصائيات تفصيلية لكل قطاع */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="المهام العاجلة"
          value="12"
          change="25%"
          changeType="decrease"
          icon={AlertTriangle}
          color="from-red-500 to-red-400"
        />
        <StatCard
          title="معدل الحضور"
          value="94%"
          change="3%"
          changeType="increase"
          icon={CheckCircle}
          color="from-erp-green to-erp-green-light"
        />
        <StatCard
          title="القضايا النشطة"
          value="8"
          change="12%"
          changeType="decrease"
          icon={Scale}
          color="from-erp-orange to-erp-orange-light"
        />
        <StatCard
          title="الجمعيات التعاونية"
          value="24"
          change="8%"
          changeType="increase"
          icon={Handshake}
          color="from-erp-purple to-erp-purple-light"
        />
      </div>

      {/* التنبيهات والمهام العاجلة */}
      <AlertsPanel />

      {/* الرسوم البيانية */}
      <ProjectChart />

      {/* إدارة المهام والأنشطة */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TaskManager />
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">الأنشطة الحديثة</h3>
          <div className="space-y-4">
            {[
              { action: 'تم اعتماد مستخلص جديد', department: 'قطاع التنفيذ', time: 'منذ 30 دقيقة', type: 'success' },
              { action: 'تم بيع وحدة سكنية', department: 'القطاع العقاري', time: 'منذ ساعة', type: 'success' },
              { action: 'تحصيل قسط متأخر', department: 'القطاع المالي', time: 'منذ ساعتين', type: 'warning' },
              { action: 'إضافة جمعية تعاونية جديدة', department: 'قطاع التعاون', time: 'منذ 3 ساعات', type: 'info' },
              { action: 'قضية قانونية جديدة', department: 'القطاع القانوني', time: 'منذ 4 ساعات', type: 'error' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'success' ? 'bg-green-500' :
                  activity.type === 'warning' ? 'bg-yellow-500' :
                  activity.type === 'error' ? 'bg-red-500' :
                  'bg-blue-500'
                }`}></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.department} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ملخص الأداء الشهري */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">ملخص المشاريع</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">المشاريع النشطة</span>
              <span className="font-semibold text-blue-600">18</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">المشاريع المكتملة</span>
              <span className="font-semibold text-green-600">8</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">المشاريع المتأخرة</span>
              <span className="font-semibold text-red-600">2</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">ملخص العقارات</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">الوحدات المطروحة</span>
              <span className="font-semibold text-blue-600">234</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">الوحدات المباعة</span>
              <span className="font-semibold text-green-600">145</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">الوحدات المتبقية</span>
              <span className="font-semibold text-orange-600">89</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">التحصيل المالي</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">التحصيل الشهري</span>
              <span className="font-semibold text-green-600">8.5 مليون</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">الأقساط المحصلة</span>
              <span className="font-semibold text-blue-600">156</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">المتأخرات</span>
              <span className="font-semibold text-red-600">12 عميل</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
