
import React from 'react';
import { StatCard } from '../components/StatCard';
import { Settings, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export const ExecutionPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">قطاع التنفيذ</h1>
        <p className="text-gray-600 mt-2">متابعة التنفيذ من قبل المقاولين واعتماد المستخلصات</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="المستخلصات المعتمدة"
          value="24"
          change="18%"
          changeType="increase"
          icon={CheckCircle}
          color="from-erp-green to-erp-green-light"
        />
        <StatCard
          title="المستخلصات قيد المراجعة"
          value="8"
          change="12%"
          changeType="increase"
          icon={Clock}
          color="from-erp-orange to-erp-orange-light"
        />
        <StatCard
          title="المقاولين النشطين"
          value="12"
          change="5%"
          changeType="increase"
          icon={Settings}
          color="from-erp-blue to-erp-blue-light"
        />
        <StatCard
          title="مشاريع متأخرة"
          value="3"
          change="15%"
          changeType="decrease"
          icon={AlertTriangle}
          color="from-erp-red to-erp-red-light"
        />
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">المستخلصات الحديثة</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-right py-3 px-4 font-semibold text-gray-700">رقم المستخلص</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">المشروع</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">المقاول</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">المبلغ</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 'MS-001', project: 'مشروع الأندلس', contractor: 'شركة البناء المتقدم', amount: '2.5 مليون', status: 'معتمد' },
                { id: 'MS-002', project: 'مشروع النور', contractor: 'مقاولات الخليج', amount: '1.8 مليون', status: 'قيد المراجعة' },
                { id: 'MS-003', project: 'مشروع الياسمين', contractor: 'شركة العمران', amount: '3.2 مليون', status: 'معتمد' },
                { id: 'MS-004', project: 'مشروع الورود', contractor: 'بناء المستقبل', amount: '1.5 مليون', status: 'مرفوض' },
              ].map((extract, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{extract.id}</td>
                  <td className="py-3 px-4">{extract.project}</td>
                  <td className="py-3 px-4">{extract.contractor}</td>
                  <td className="py-3 px-4">{extract.amount}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      extract.status === 'معتمد' ? 'bg-green-100 text-green-600' :
                      extract.status === 'قيد المراجعة' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {extract.status}
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
