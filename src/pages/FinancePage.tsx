import React from 'react';
import { StatCard } from '../components/StatCard';
import { FinanceReports } from '../components/reports/FinanceReports';
import { FinanceChart } from '../components/charts/FinanceChart';
import { DollarSign, CreditCard, TrendingUp, AlertCircle } from 'lucide-react';

export const FinancePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">القطاع المالي</h1>
        <p className="text-gray-600 mt-2">التحصيل من العملاء بأنظمة التقسيط والسداد الكامل</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="إجمالي التحصيلات"
          value="8.5 مليون"
          change="18%"
          changeType="increase"
          icon={DollarSign}
          color="from-erp-green to-erp-green-light"
        />
        <StatCard
          title="الأقساط المحصلة"
          value="156"
          change="12%"
          changeType="increase"
          icon={CreditCard}
          color="from-erp-blue to-erp-blue-light"
        />
        <StatCard
          title="نمو التحصيلات"
          value="15%"
          change="5%"
          changeType="increase"
          icon={TrendingUp}
          color="from-erp-orange to-erp-orange-light"
        />
        <StatCard
          title="المتأخرات"
          value="12 عميل"
          change="8%"
          changeType="decrease"
          icon={AlertCircle}
          color="from-erp-red to-erp-red-light"
        />
      </div>

      <FinanceReports />
      
      <FinanceChart />

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">العمليات المالية الحديثة</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-right py-3 px-4 font-semibold text-gray-700">رقم العملية</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">العميل</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">نوع الدفع</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">المبلغ</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">التاريخ</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 'FIN-001', client: 'أحمد محمد علي', type: 'قسط شهري', amount: '12,000 ريال', date: '2024-06-01' },
                { id: 'FIN-002', client: 'فاطمة أحمد', type: 'سداد كامل', amount: '380,000 ريال', date: '2024-05-30' },
                { id: 'FIN-003', client: 'محمد سالم', type: 'قسط شهري', amount: '15,000 ريال', date: '2024-05-28' },
                { id: 'FIN-004', client: 'عائشة علي', type: 'دفعة أولى', amount: '120,000 ريال', date: '2024-05-25' },
              ].map((transaction, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{transaction.id}</td>
                  <td className="py-3 px-4">{transaction.client}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      transaction.type === 'سداد كامل' ? 'bg-green-100 text-green-600' :
                      transaction.type === 'قسط شهري' ? 'bg-blue-100 text-blue-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className="py-3 px-4">{transaction.amount}</td>
                  <td className="py-3 px-4">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
