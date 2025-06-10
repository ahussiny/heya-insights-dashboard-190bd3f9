
import React from 'react';
import { StatCard } from '../components/StatCard';
import { FinanceReports } from '../components/reports/FinanceReports';
import { FinanceChart } from '../components/charts/FinanceChart';
import { DollarSign, CreditCard, TrendingUp, AlertCircle, Target, PieChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const FinancePage = () => {
  const budgetItems = [
    { item: 'المرتبات والأجور', budgeted: 2500000, spent: 2350000, percentage: 94 },
    { item: 'التشغيل والصيانة', budgeted: 800000, spent: 720000, percentage: 90 },
    { item: 'المشاريع الإنشائية', budgeted: 5000000, spent: 4200000, percentage: 84 },
    { item: 'التسويق والإعلان', budgeted: 300000, spent: 280000, percentage: 93 },
    { item: 'الخدمات القانونية', budgeted: 150000, spent: 120000, percentage: 80 },
    { item: 'تقنية المعلومات', budgeted: 200000, spent: 180000, percentage: 90 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">القطاع المالي</h1>
        <p className="text-gray-600 mt-2">التحصيل من العملاء بأنظمة التقسيط والسداد الكامل</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="إجمالي التحصيلات"
          value="8.5 مليون جنيه"
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              الموازنة الحالية
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="font-medium">إجمالي الموازنة المعتمدة</span>
                <span className="text-lg font-bold text-blue-600">8.95 مليون جنيه</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium">إجمالي المنصرف</span>
                <span className="text-lg font-bold text-green-600">7.85 مليون جنيه</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <span className="font-medium">المتبقي من الموازنة</span>
                <span className="text-lg font-bold text-orange-600">1.10 مليون جنيه</span>
              </div>
              <div className="pt-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">نسبة التنفيذ الإجمالية</span>
                  <span className="text-sm font-bold">87.7%</span>
                </div>
                <Progress value={87.7} className="w-full" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              نسب تنفيذ بنود الصرف
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {budgetItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{item.item}</span>
                    <div className="text-left">
                      <div className="text-xs text-gray-500">
                        {(item.spent / 1000000).toFixed(1)}م / {(item.budgeted / 1000000).toFixed(1)}م جنيه
                      </div>
                      <div className={`text-sm font-bold ${
                        item.percentage > 95 ? 'text-red-600' :
                        item.percentage > 85 ? 'text-orange-600' :
                        'text-green-600'
                      }`}>
                        {item.percentage}%
                      </div>
                    </div>
                  </div>
                  <Progress 
                    value={item.percentage} 
                    className={`w-full ${
                      item.percentage > 95 ? '[&>div]:bg-red-500' :
                      item.percentage > 85 ? '[&>div]:bg-orange-500' :
                      '[&>div]:bg-green-500'
                    }`}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
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
                { id: 'FIN-001', client: 'أحمد محمد علي', type: 'قسط شهري', amount: '12,000 جنيه', date: '2024-06-01' },
                { id: 'FIN-002', client: 'فاطمة أحمد', type: 'سداد كامل', amount: '380,000 جنيه', date: '2024-05-30' },
                { id: 'FIN-003', client: 'محمد سالم', type: 'قسط شهري', amount: '15,000 جنيه', date: '2024-05-28' },
                { id: 'FIN-004', client: 'عائشة علي', type: 'دفعة أولى', amount: '120,000 جنيه', date: '2024-05-25' },
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
