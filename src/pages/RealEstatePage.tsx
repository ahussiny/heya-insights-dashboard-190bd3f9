
import React from 'react';
import { StatCard } from '../components/StatCard';
import { RealEstateReports } from '../components/reports/RealEstateReports';
import { RealEstateChart } from '../components/charts/RealEstateChart';
import { Building, Users, TrendingUp, Home, MapPin, FileText } from 'lucide-react';

export const RealEstatePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">القطاع العقاري</h1>
        <p className="text-gray-600 mt-2">الإعلان والطرح والتخصيص للعملاء - الوحدات والأراضي</p>
      </div>

      {/* إحصائيات الوحدات */}
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

      {/* إحصائيات الأراضي */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="الأراضي المباعة"
          value="62"
          change="18%"
          changeType="increase"
          icon={MapPin}
          color="from-erp-green to-erp-green-light"
        />
        <StatCard
          title="الأراضي المتاحة"
          value="28"
          change="12%"
          changeType="decrease"
          icon={MapPin}
          color="from-erp-blue to-erp-blue-light"
        />
        <StatCard
          title="عقود الأراضي"
          value="48"
          change="20%"
          changeType="increase"
          icon={FileText}
          color="from-erp-orange to-erp-orange-light"
        />
        <StatCard
          title="المساحة المباعة"
          value="125 هكتار"
          change="15%"
          changeType="increase"
          icon={TrendingUp}
          color="from-erp-purple to-erp-purple-light"
        />
      </div>

      <RealEstateReports />
      
      <RealEstateChart />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">المبيعات الحديثة - الوحدات</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">رقم الوحدة</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">المشروع</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">العميل</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">السعر</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { unit: 'A-101', project: 'مشروع الأندلس', client: 'أحمد محمد علي', price: '450,000 ريال' },
                  { unit: 'B-205', project: 'مشروع النور', client: 'فاطمة أحمد', price: '380,000 ريال' },
                  { unit: 'C-301', project: 'مشروع الياسمين', client: 'محمد سالم', price: '520,000 ريال' },
                ].map((sale, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{sale.unit}</td>
                    <td className="py-3 px-4">{sale.project}</td>
                    <td className="py-3 px-4">{sale.client}</td>
                    <td className="py-3 px-4">{sale.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">مبيعات الأراضي</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">رقم القطعة</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">المساحة</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">العميل</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">السعر</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { plot: 'ق-001', area: '500 م²', client: 'شركة البناء المتطور', price: '250,000 ريال' },
                  { plot: 'ق-002', area: '750 م²', client: 'مؤسسة الإعمار', price: '375,000 ريال' },
                  { plot: 'ق-003', area: '420 م²', client: 'شركة الخليج للتطوير', price: '210,000 ريال' },
                ].map((land, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{land.plot}</td>
                    <td className="py-3 px-4">{land.area}</td>
                    <td className="py-3 px-4">{land.client}</td>
                    <td className="py-3 px-4">{land.price}</td>
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
