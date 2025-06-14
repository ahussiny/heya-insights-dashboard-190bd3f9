
import React, { useState } from 'react';
import { StatCard } from '../components/StatCard';
import { ExecutionReports } from '../components/reports/ExecutionReports';
import { ExecutionChart } from '../components/charts/ExecutionChart';
import { Settings, CheckCircle, Clock, AlertTriangle, ArrowRight, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const ExecutionPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

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
      amount: '2.5 مليون جنيه مصري', 
      status: 'معتمد',
      currentStep: 'الصرف',
      date: '2024-05-15'
    },
    { 
      id: 'MS-002', 
      project: 'مشروع النور', 
      contractor: 'مقاولات الخليج', 
      amount: '1.8 مليون جنيه مصري', 
      status: 'قيد المراجعة',
      currentStep: 'نائب رئيس الهيئة',
      date: '2024-05-20'
    },
    { 
      id: 'MS-003', 
      project: 'مشروع الياسمين', 
      contractor: 'شركة العمران', 
      amount: '3.2 مليون جنيه مصري', 
      status: 'معتمد',
      currentStep: 'المالية',
      date: '2024-05-10'
    },
    { 
      id: 'MS-004', 
      project: 'مشروع الورود', 
      contractor: 'بناء المستقبل', 
      amount: '1.5 مليون جنيه مصري', 
      status: 'مرفوض',
      currentStep: 'المكتب الفني',
      date: '2024-05-25'
    },
  ];

  const filteredExtracts = extracts.filter(extract => 
    extract.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    extract.contractor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    extract.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    extract.date.includes(searchTerm)
  );

  const getStepStatus = (stepName: string, extractCurrentStep: string) => {
    const stepOrder = ['قطاع التعاون', 'المكتب الفني', 'نائب رئيس الهيئة', 'رئيس الهيئة', 'المالية', 'الصرف'];
    const currentIndex = stepOrder.indexOf(extractCurrentStep);
    const stepIndex = stepOrder.indexOf(stepName);
    
    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'current';
    return 'pending';
  };

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

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>المستخلصات ودورة العمل</span>
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-gray-500" />
              <Input
                placeholder="البحث بالمشروع، المقاول، رقم المستخلص أو التاريخ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-80"
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchTerm('')}
                >
                  مسح
                </Button>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filteredExtracts.map((extract, index) => (
              <div key={index} className="border rounded-lg p-4 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <span className="text-sm font-medium text-gray-600">رقم المستخلص:</span>
                    <p className="font-bold text-lg">{extract.id}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">اسم المشروع:</span>
                    <p className="font-semibold">{extract.project}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">اسم المقاول:</span>
                    <p className="font-semibold">{extract.contractor}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">المبلغ:</span>
                    <p className="font-semibold text-green-600">{extract.amount}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-gray-600">التاريخ:</span>
                    <span className="text-sm">{extract.date}</span>
                    <span className="text-sm font-medium text-gray-600 mr-4">الحالة:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      extract.status === 'معتمد' ? 'bg-green-100 text-green-600' :
                      extract.status === 'قيد المراجعة' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {extract.status}
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-3">مراحل دورة العمل:</h4>
                  <div className="flex items-center justify-between overflow-x-auto">
                    {workflowSteps.map((step, stepIndex) => {
                      const stepStatus = getStepStatus(step.name, extract.currentStep);
                      return (
                        <div key={stepIndex} className="flex items-center">
                          <div className="flex flex-col items-center min-w-[100px]">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                              stepStatus === 'completed' ? 'bg-green-500' :
                              stepStatus === 'current' ? 'bg-blue-500' :
                              'bg-gray-300'
                            }`}>
                              {stepIndex + 1}
                            </div>
                            <span className="text-xs font-medium mt-1 text-center">{step.name}</span>
                            {stepStatus === 'current' && (
                              <span className="text-xs text-blue-600 mt-1 font-semibold">جاري</span>
                            )}
                          </div>
                          {stepIndex < workflowSteps.length - 1 && (
                            <ArrowRight className="mx-2 text-gray-400" size={16} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
            
            {filteredExtracts.length === 0 && searchTerm && (
              <div className="text-center py-8 text-gray-500">
                <p>لا توجد نتائج للبحث "{searchTerm}"</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
