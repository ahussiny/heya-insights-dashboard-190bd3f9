
import React from 'react';
import { StatCard } from '../components/StatCard';
import { ExecutionReports } from '../components/reports/ExecutionReports';
import { ExecutionChart } from '../components/charts/ExecutionChart';
import { Settings, CheckCircle, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const ExecutionPage = () => {
  const workflowSteps = [
    { name: 'قطاع التعاون', status: 'completed', date: '2024-06-01' },
    { name: 'المكتب الفني', status: 'completed', date: '2024-06-03' },
    { name: 'نائب رئيس الهيئة', status: 'current', date: '2024-06-05' },
    { name: 'رئيس الهيئة', status: 'pending', date: '' },
    { name: 'المالية', status: 'pending', date: '' },
    { name: 'الصرف', status: 'pending', date: '' }
  ];

  const extracts = [
    { 
      id: 'MS-001', 
      project: 'مشروع الأندلس', 
      contractor: 'شركة البناء المتقدم', 
      amount: '2.5 مليون جنيه', 
      status: 'معتمد',
      currentStep: 'الصرف'
    },
    { 
      id: 'MS-002', 
      project: 'مشروع النور', 
      contractor: 'مقاولات الخليج', 
      amount: '1.8 مليون جنيه', 
      status: 'قيد المراجعة',
      currentStep: 'نائب رئيس الهيئة'
    },
    { 
      id: 'MS-003', 
      project: 'مشروع الياسمين', 
      contractor: 'شركة العمران', 
      amount: '3.2 مليون جنيه', 
      status: 'معتمد',
      currentStep: 'المالية'
    },
    { 
      id: 'MS-004', 
      project: 'مشروع الورود', 
      contractor: 'بناء المستقبل', 
      amount: '1.5 مليون جنيه', 
      status: 'مرفوض',
      currentStep: 'المكتب الفني'
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">الإدارة المركزية لشئون التنفيذ</h1>
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

      <ExecutionReports />
      
      <ExecutionChart />

      <Card>
        <CardHeader>
          <CardTitle>دورة عمل المستخلصات</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between overflow-x-auto pb-4">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center min-w-[120px]">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                    step.status === 'completed' ? 'bg-green-500' :
                    step.status === 'current' ? 'bg-blue-500' :
                    'bg-gray-300'
                  }`}>
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium mt-2 text-center">{step.name}</span>
                  {step.date && (
                    <span className="text-xs text-gray-500 mt-1">{step.date}</span>
                  )}
                </div>
                {index < workflowSteps.length - 1 && (
                  <ArrowRight className="mx-4 text-gray-400" size={20} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">المستخلصات ودورة العمل</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-right py-3 px-4 font-semibold text-gray-700">رقم المستخلص</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">المشروع</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">المقاول</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">المبلغ</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">المرحلة الحالية</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {extracts.map((extract, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{extract.id}</td>
                  <td className="py-3 px-4">{extract.project}</td>
                  <td className="py-3 px-4">{extract.contractor}</td>
                  <td className="py-3 px-4">{extract.amount}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600">
                      {extract.currentStep}
                    </span>
                  </td>
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
