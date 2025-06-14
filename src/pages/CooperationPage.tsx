import React from 'react';
import { StatCard } from '../components/StatCard';
import { CooperationReports } from '../components/reports/CooperationReports';
import { CooperationChart } from '../components/charts/CooperationChart';
import { Users, Building, MapPin, DollarSign } from 'lucide-react';

export const CooperationPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">الإدارة المركزية لشئون التعاون</h1>
        <p className="text-gray-600 mt-2">إدارة الجمعيات التعاونية والأعضاء والمشاريع والأراضي</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="إجمالي الجمعيات"
          value="24"
          change="12%"
          changeType="increase"
          icon={Building}
          color="from-erp-blue to-erp-blue-light"
        />
        <StatCard
          title="إجمالي الأعضاء"
          value="1,256"
          change="8%"
          changeType="increase"
          icon={Users}
          color="from-erp-green to-erp-green-light"
        />
        <StatCard
          title="الأراضي المخصصة"
          value="156 قطعة"
          change="15%"
          changeType="increase"
          icon={MapPin}
          color="from-erp-orange to-erp-orange-light"
        />
        <StatCard
          title="إجمالي قيمة الأراضي"
          value="85.2 مليون جنيه مصري"
          change="20%"
          changeType="increase"
          icon={DollarSign}
          color="from-erp-purple to-erp-purple-light"
        />
      </div>

      <CooperationReports />
      
      <CooperationChart />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">الجمعيات التعاونية</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">اسم الجمعية</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">النوع</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">عدد الأعضاء</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">المشاريع النشطة</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">الحالة</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'جمعية الأندلس الفئوية', type: 'فئوية', members: 85, projects: 3, status: 'نشطة' },
                  { name: 'جمعية النور الإقليمية', type: 'إقليمية', members: 120, projects: 2, status: 'نشطة' },
                  { name: 'جمعية الياسمين المختلطة', type: 'فئوية وإقليمية', members: 65, projects: 1, status: 'معلقة' },
                  { name: 'جمعية الورود الإقليمية', type: 'إقليمية', members: 95, projects: 4, status: 'نشطة' },
                ].map((society, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{society.name}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        society.type === 'فئوية' ? 'bg-blue-100 text-blue-600' :
                        society.type === 'إقليمية' ? 'bg-purple-100 text-purple-600' :
                        'bg-indigo-100 text-indigo-600'
                      }`}>
                        {society.type}
                      </span>
                    </td>
                    <td className="py-3 px-4">{society.members}</td>
                    <td className="py-3 px-4">{society.projects}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        society.status === 'نشطة' ? 'bg-green-100 text-green-600' :
                        society.status === 'معلقة' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {society.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">الدفعات المستحقة</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">الجمعية</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">المبلغ المستحق</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">تاريخ الاستحقاق</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">الحالة</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { society: 'جمعية الأندلس', amount: '2.5 مليون جنيه مصري', dueDate: '2024-06-15', status: 'مستحق' },
                  { society: 'جمعية النور', amount: '1.8 مليون جنيه مصري', dueDate: '2024-06-20', status: 'مدفوع' },
                  { society: 'جمعية الياسمين', amount: '3.2 مليون جنيه مصري', dueDate: '2024-05-30', status: 'متأخر' },
                  { society: 'جمعية الورود', amount: '1.5 مليون جنيه مصري', dueDate: '2024-07-01', status: 'مستحق' },
                ].map((payment, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{payment.society}</td>
                    <td className="py-3 px-4">{payment.amount}</td>
                    <td className="py-3 px-4">{payment.dueDate}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        payment.status === 'مدفوع' ? 'bg-green-100 text-green-600' :
                        payment.status === 'متأخر' ? 'bg-red-100 text-red-600' :
                        'bg-yellow-100 text-yellow-600'
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
