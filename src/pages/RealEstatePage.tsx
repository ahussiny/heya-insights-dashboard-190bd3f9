import React from 'react';
import { StatCard } from '../components/StatCard';
import { RealEstateReports } from '../components/reports/RealEstateReports';
import { RealEstateChart } from '../components/charts/RealEstateChart';
import { Building, Users, TrendingUp, Home } from 'lucide-react';

export const RealEstatePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">القطاع العقاري</h1>
        <p className="text-gray-600 mt-2">الإعلان والطرح والتخصيص للعملاء</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="الوحدات المباعة"
          value="145"
          change="22%"
          changeType="increase"
          icon={Building}
          color="from-erp-green to-erp-green-light"
        />
        <StatCard
          title="الوحدات المتاحة"
          value="89"
          change="8%"
          changeType="decrease"
          icon={Home}
          color="from-erp-blue to-erp-blue-light"
        />
        <StatCard
          title="العملاء الجدد"
          value="32"
          change="15%"
          changeType="increase"
          icon={Users}
          color="from-erp-orange to-erp-orange-light"
        />
        <StatCard
          title="معدل البيع الشهري"
          value="18 وحدة"
          change="25%"
          changeType="increase"
          icon={TrendingUp}
          color="from-erp-purple to-erp-purple-light"
        />
      </div>

      <RealEstateReports />
      
      <RealEstateChart />

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">المبيعات الحديثة</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-right py-3 px-4 font-semibold text-gray-700">رقم الوحدة</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">المشروع</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">العميل</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">السعر</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">تاريخ البيع</th>
              </tr>
            </thead>
            <tbody>
              {[
                { unit: 'A-101', project: 'مشروع الأندلس', client: 'أحمد محمد علي', price: '450,000 ريال', date: '2024-06-01' },
                { unit: 'B-205', project: 'مشروع النور', client: 'فاطمة أحمد', price: '380,000 ريال', date: '2024-05-28' },
                { unit: 'C-301', project: 'مشروع الياسمين', client: 'محمد سالم', price: '520,000 ريال', date: '2024-05-25' },
                { unit: 'D-102', project: 'مشروع الورود', client: 'عائشة علي', price: '395,000 ريال', date: '2024-05-22' },
              ].map((sale, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{sale.unit}</td>
                  <td className="py-3 px-4">{sale.project}</td>
                  <td className="py-3 px-4">{sale.client}</td>
                  <td className="py-3 px-4">{sale.price}</td>
                  <td className="py-3 px-4">{sale.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
