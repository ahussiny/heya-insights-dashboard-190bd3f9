
import React from 'react';
import { StatCard } from '../components/StatCard';
import { Users, Clock, TrendingUp, Award } from 'lucide-react';

export const AdminPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">الشئون الإدارية</h1>
        <p className="text-gray-600 mt-2">حضور وانصراف الموظفين وتقييم الأداء</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="إجمالي الموظفين"
          value="127"
          change="8%"
          changeType="increase"
          icon={Users}
          color="from-erp-blue to-erp-blue-light"
        />
        <StatCard
          title="معدل الحضور"
          value="94%"
          change="3%"
          changeType="increase"
          icon={Clock}
          color="from-erp-green to-erp-green-light"
        />
        <StatCard
          title="تقييم الأداء"
          value="87%"
          change="5%"
          changeType="increase"
          icon={TrendingUp}
          color="from-erp-orange to-erp-orange-light"
        />
        <StatCard
          title="الموظف المثالي"
          value="15 موظف"
          change="20%"
          changeType="increase"
          icon={Award}
          color="from-erp-purple to-erp-purple-light"
        />
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">تقارير الموظفين</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-right py-3 px-4 font-semibold text-gray-700">اسم الموظف</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">القسم</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">معدل الحضور</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">تقييم الأداء</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'أحمد محمد علي', department: 'قطاع المشروعات', attendance: '96%', performance: '92%', status: 'ممتاز' },
                { name: 'فاطمة أحمد', department: 'القطاع العقاري', attendance: '94%', performance: '88%', status: 'جيد جداً' },
                { name: 'محمد سالم', department: 'قطاع التنفيذ', attendance: '91%', performance: '85%', status: 'جيد' },
                { name: 'عائشة علي', department: 'القطاع المالي', attendance: '98%', performance: '95%', status: 'ممتاز' },
              ].map((employee, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{employee.name}</td>
                  <td className="py-3 px-4">{employee.department}</td>
                  <td className="py-3 px-4">{employee.attendance}</td>
                  <td className="py-3 px-4">{employee.performance}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      employee.status === 'ممتاز' ? 'bg-green-100 text-green-600' :
                      employee.status === 'جيد جداً' ? 'bg-blue-100 text-blue-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      {employee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
