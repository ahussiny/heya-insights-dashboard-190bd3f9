
import React from 'react';
import { StatCard } from '../components/StatCard';
import { AssociationLandsReports } from '../components/reports/AssociationLandsReports';
import { AssociationLandsChart } from '../components/charts/AssociationLandsChart';
import { MapPin, Building2, FileText, TrendingUp, Users, DollarSign, AlertCircle, CheckCircle } from 'lucide-react';

export const AssociationLandsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">أراضي الجمعيات</h1>
        <p className="text-gray-600 mt-2">إدارة الأراضي الممنوحة من وزارة الإسكان - هيئة المجتمعات العمرانية</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="إجمالي الأراضي"
          value="84"
          change="8%"
          changeType="increase"
          icon={MapPin}
          color="from-erp-blue to-erp-blue-light"
        />
        <StatCard
          title="الأراضي المقسمة"
          value="62"
          change="15%"
          changeType="increase"
          icon={Building2}
          color="from-erp-green to-erp-green-light"
        />
        <StatCard
          title="العقود المبرمة"
          value="156"
          change="12%"
          changeType="increase"
          icon={FileText}
          color="from-erp-orange to-erp-orange-light"
        />
        <StatCard
          title="الجمعيات المستفيدة"
          value="28"
          change="18%"
          changeType="increase"
          icon={Users}
          color="from-erp-purple to-erp-purple-light"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="قيمة البيع"
          value="45.2 مليون"
          change="22%"
          changeType="increase"
          icon={DollarSign}
          color="from-erp-green to-erp-green-light"
        />
        <StatCard
          title="المشاريع قيد البناء"
          value="18"
          change="25%"
          changeType="increase"
          icon={Building2}
          color="from-erp-blue to-erp-blue-light"
        />
        <StatCard
          title="الأقساط المتأخرة"
          value="8"
          change="15%"
          changeType="decrease"
          icon={AlertCircle}
          color="from-erp-red to-erp-red-light"
        />
        <StatCard
          title="المشاريع المكتملة"
          value="12"
          change="30%"
          changeType="increase"
          icon={CheckCircle}
          color="from-erp-green to-erp-green-light"
        />
      </div>

      <AssociationLandsReports />
      
      <AssociationLandsChart />

      {/* جدول بيانات الأراضي */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">بيانات الأراضي الممنوحة</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-right py-3 px-4 font-semibold text-gray-700">رقم القطعة</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">المساحة</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">الجمعية المستفيدة</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">حالة التقسيم</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">حالة البناء</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">المتابعة القانونية</th>
              </tr>
            </thead>
            <tbody>
              {[
                { plot: 'ق-001', area: '5000 م²', association: 'جمعية الأمل', division: 'مكتمل', construction: 'قيد التنفيذ', legal: 'مطابق' },
                { plot: 'ق-002', area: '7500 م²', association: 'جمعية النور', division: 'قيد التقسيم', construction: 'لم يبدأ', legal: 'مطابق' },
                { plot: 'ق-003', area: '4200 م²', association: 'جمعية الخير', division: 'مكتمل', construction: 'مكتمل', legal: 'مطابق' },
                { plot: 'ق-004', area: '6800 م²', association: 'جمعية التعاون', division: 'مكتمل', construction: 'قيد التنفيذ', legal: 'يحتاج مراجعة' },
              ].map((land, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{land.plot}</td>
                  <td className="py-3 px-4">{land.area}</td>
                  <td className="py-3 px-4">{land.association}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      land.division === 'مكتمل' ? 'bg-green-100 text-green-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      {land.division}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      land.construction === 'مكتمل' ? 'bg-green-100 text-green-600' :
                      land.construction === 'قيد التنفيذ' ? 'bg-blue-100 text-blue-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {land.construction}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      land.legal === 'مطابق' ? 'bg-green-100 text-green-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {land.legal}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* جدول العقود والبيع */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">عقود البيع والتحصيل المالي</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-right py-3 px-4 font-semibold text-gray-700">رقم العقد</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">الجمعية</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">قيمة العقد</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">المبلغ المحصل</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">المتبقي</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">حالة السداد</th>
              </tr>
            </thead>
            <tbody>
              {[
                { contract: 'ع-001', association: 'جمعية الأمل', value: '2,500,000', collected: '2,000,000', remaining: '500,000', status: 'منتظم' },
                { contract: 'ع-002', association: 'جمعية النور', value: '3,750,000', collected: '1,500,000', remaining: '2,250,000', status: 'منتظم' },
                { contract: 'ع-003', association: 'جمعية الخير', value: '2,100,000', collected: '2,100,000', remaining: '0', status: 'مكتمل' },
                { contract: 'ع-004', association: 'جمعية التعاون', value: '3,400,000', collected: '800,000', remaining: '2,600,000', status: 'متأخر' },
              ].map((contract, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{contract.contract}</td>
                  <td className="py-3 px-4">{contract.association}</td>
                  <td className="py-3 px-4">{contract.value} ريال</td>
                  <td className="py-3 px-4">{contract.collected} ريال</td>
                  <td className="py-3 px-4">{contract.remaining} ريال</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      contract.status === 'مكتمل' ? 'bg-green-100 text-green-600' :
                      contract.status === 'منتظم' ? 'bg-blue-100 text-blue-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {contract.status}
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
