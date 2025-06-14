import React from 'react';
import { StatCard } from '../components/StatCard';
import { LegalReports } from '../components/reports/LegalReports';
import { LegalChart } from '../components/charts/LegalChart';
import { Scale, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

export const LegalPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">الإدارة المركزية للإدارات القانونية</h1>
        <p className="text-gray-600 mt-2">المتابعة القانونية للعملاء والمقاولين والموظفين</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="القضايا النشطة"
          value="8"
          change="12%"
          changeType="decrease"
          icon={Scale}
          color="from-erp-orange to-erp-orange-light"
        />
        <StatCard
          title="العقود المراجعة"
          value="24"
          change="18%"
          changeType="increase"
          icon={FileText}
          color="from-erp-blue to-erp-blue-light"
        />
        <StatCard
          title="القضايا المحلولة"
          value="15"
          change="25%"
          changeType="increase"
          icon={CheckCircle}
          color="from-erp-green to-erp-green-light"
        />
        <StatCard
          title="الإنذارات المرسلة"
          value="5"
          change="30%"
          changeType="decrease"
          icon={AlertTriangle}
          color="from-erp-red to-erp-red-light"
        />
      </div>

      <LegalReports />
      
      <LegalChart />

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">القضايا والعقود</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-right py-3 px-4 font-semibold text-gray-700">رقم الملف</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">النوع</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">الطرف الثاني</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">الحالة</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">تاريخ البدء</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 'LEG-001', type: 'قضية تحصيل', party: 'أحمد محمد علي', status: 'قيد النظر', date: '2024-05-15' },
                { id: 'LEG-002', type: 'عقد مقاولة', party: 'شركة البناء المتقدم', status: 'مراجعة', date: '2024-05-20' },
                { id: 'LEG-003', type: 'قضية مطالبة', party: 'مقاولات الخليج', status: 'محلولة', date: '2024-04-10' },
                { id: 'LEG-004', type: 'عقد بيع', party: 'فاطمة أحمد سالم', status: 'معتمد', date: '2024-05-25' },
              ].map((legal, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{legal.id}</td>
                  <td className="py-3 px-4">{legal.type}</td>
                  <td className="py-3 px-4">{legal.party}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      legal.status === 'محلولة' || legal.status === 'معتمد' ? 'bg-green-100 text-green-600' :
                      legal.status === 'مراجعة' ? 'bg-blue-100 text-blue-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      {legal.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{legal.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
