import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const getReportData = (reportName: string, sector: string) => {
  const reportKey = `${sector}-${reportName}`;
  
  const reportDataMap = {
    // تقارير القطاع العقاري
    'القطاع العقاري-تقرير مبيعات الوحدات': [
      { id: 'U001', name: 'وحدة الأندلس A1', type: 'شقة', area: '120 م²', price: '85,000 جنيه', status: 'مباعة', buyer: 'أحمد محمد علي', date: '2024-05-15' },
      { id: 'U002', name: 'وحدة النور B2', type: 'فيلا', area: '250 م²', price: '150,000 جنيه', status: 'مباعة', buyer: 'فاطمة أحمد سالم', date: '2024-05-20' },
      { id: 'U003', name: 'وحدة الياسمين C3', type: 'شقة', area: '100 م²', price: '70,000 جنيه', status: 'محجوزة', buyer: 'محمد عبدالله', date: '2024-05-25' },
    ],
    'القطاع العقاري-تقرير الوحدات المتاحة': [
      { id: 'U004', name: 'وحدة الورود D4', type: 'شقة', area: '110 م²', price: '75,000 جنيه', status: 'متاحة', location: 'المجمع الأول', phase: 'المرحلة الثانية' },
      { id: 'U005', name: 'وحدة السلام E5', type: 'فيلا', area: '300 م²', price: '180,000 جنيه', status: 'متاحة', location: 'المجمع الثاني', phase: 'المرحلة الأولى' },
      { id: 'U006', name: 'وحدة الأمل F6', type: 'دوبلكس', area: '180 م²', price: '120,000 جنيه', status: 'قيد الإنشاء', location: 'المجمع الثالث', phase: 'المرحلة الثالثة' },
    ],
    'القطاع العقاري-تقرير مبيعات الأراضي': [
      { id: 'L001', name: 'قطعة رقم 15', area: '500 م²', price: '50,000 جنيه', status: 'مباعة', buyer: 'سالم أحمد محمد', paymentType: 'نقدي', date: '2024-04-10' },
      { id: 'L002', name: 'قطعة رقم 28', area: '750 م²', price: '75,000 جنيه', status: 'مباعة', buyer: 'عائشة علي سالم', paymentType: 'أقساط', date: '2024-04-15' },
      { id: 'L003', name: 'قطعة رقم 42', area: '600 م²', price: '60,000 جنيه', status: 'محجوزة', buyer: 'خالد محمد عبدالله', paymentType: 'أقساط', date: '2024-04-20' },
    ],

    // تقارير الشؤون الإدارية
    'الشؤون الإدارية-تقرير الحضور': [
      { id: 'EMP001', name: 'أحمد محمد علي', department: 'المحاسبة', attendance: '22/24', absences: '2', lateArrivals: '1', overtime: '5 ساعات', month: 'مايو 2024' },
      { id: 'EMP002', name: 'فاطمة سالم أحمد', department: 'الموارد البشرية', attendance: '24/24', absences: '0', lateArrivals: '0', overtime: '8 ساعات', month: 'مايو 2024' },
      { id: 'EMP003', name: 'محمد عبدالله سعيد', department: 'تقنية المعلومات', attendance: '20/24', absences: '4', lateArrivals: '3', overtime: '12 ساعات', month: 'مايو 2024' },
    ],
    'الشؤون الإدارية-تقرير الرواتب': [
      { id: 'SAL001', employee: 'أحمد محمد علي', position: 'محاسب أول', basicSalary: '1,200 جنيه', allowances: '300 جنيه', deductions: '150 جنيه', netSalary: '1,350 جنيه', month: 'مايو 2024' },
      { id: 'SAL002', employee: 'فاطمة سالم أحمد', position: 'مسؤولة موارد بشرية', basicSalary: '1,500 جنيه', allowances: '400 جنيه', deductions: '200 جنيه', netSalary: '1,700 جنيه', month: 'مايو 2024' },
      { id: 'SAL003', employee: 'محمد عبدالله سعيد', position: 'مطور نظم', basicSalary: '1,800 جنيه', allowances: '500 جنيه', deductions: '250 جنيه', netSalary: '2,050 جنيه', month: 'مايو 2024' },
    ],

    // تقارير قطاع التعاون
    'قطاع التعاون-تقرير الجمعيات': [
      { id: 'SOC001', name: 'جمعية الأندلس الفئوية', type: 'فئوية', region: 'القاهرة', members: '85', activeProjects: '3', totalLands: '25 قطعة', status: 'نشطة' },
      { id: 'SOC002', name: 'جمعية النور الإقليمية', type: 'إقليمية', region: 'الجيزة', members: '120', activeProjects: '2', totalLands: '40 قطعة', status: 'نشطة' },
      { id: 'SOC003', name: 'جمعية الياسمين المختلطة', type: 'فئوية وإقليمية', region: 'الإسكندرية', members: '65', activeProjects: '1', totalLands: '15 قطعة', status: 'معلقة' },
      { id: 'SOC004', name: 'جمعية الورود الإقليمية', type: 'إقليمية', region: 'أسوان', members: '95', activeProjects: '4', totalLands: '30 قطعة', status: 'نشطة' },
    ],

    // تقارير القطاع المالي
    'القطاع المالي-تقرير التحصيلات': [
      { id: 'COL001', source: 'مبيعات الوحدات', amount: '2,500,000 جنيه', collectedAmount: '2,200,000 جنيه', pendingAmount: '300,000 جنيه', collectionRate: '88%', month: 'مايو 2024' },
      { id: 'COL002', source: 'مبيعات الأراضي', amount: '1,800,000 جنيه', collectedAmount: '1,650,000 جنيه', pendingAmount: '150,000 جنيه', collectionRate: '92%', month: 'مايو 2024' },
      { id: 'COL003', source: 'رسوم الجمعيات', amount: '450,000 جنيه', collectedAmount: '400,000 جنيه', pendingAmount: '50,000 جنيه', collectionRate: '89%', month: 'مايو 2024' },
    ],

    // تقارير القطاع القانوني
    'القطاع القانوني-تقرير القضايا': [
      { id: 'LEG001', caseType: 'قضية تحصيل', party: 'أحمد محمد علي', amount: '50,000 جنيه', status: 'قيد النظر', court: 'المحكمة التجارية', date: '2024-05-15' },
      { id: 'LEG002', caseType: 'قضية مطالبة', party: 'مقاولات الخليج', amount: '120,000 جنيه', status: 'محلولة', court: 'المحكمة العامة', date: '2024-04-10' },
      { id: 'LEG003', caseType: 'قضية عقارية', party: 'شركة التطوير', amount: '200,000 جنيه', status: 'قيد التنفيذ', court: 'المحكمة العقارية', date: '2024-05-20' },
    ],

    // تقارير قطاع المشروعات
    'قطاع المشروعات-تقرير حالة المشاريع': [
      { id: 'PRJ001', name: 'مجمع الأندلس السكني', contractor: 'شركة البناء المتقدم', progress: '75%', budget: '5,000,000 جنيه', spent: '3,750,000 جنيه', status: 'قيد التنفيذ', expectedCompletion: '2024-12-31' },
      { id: 'PRJ002', name: 'مجمع النور التجاري', contractor: 'مقاولات الخليج', progress: '45%', budget: '8,000,000 جنيه', spent: '3,600,000 جنيه', status: 'قيد التنفيذ', expectedCompletion: '2025-06-30' },
      { id: 'PRJ003', name: 'مجمع الياسمين السكني', contractor: 'شركة التطوير العقاري', progress: '100%', budget: '3,500,000 جنيه', spent: '3,400,000 جنيه', status: 'مكتمل', expectedCompletion: '2024-04-30' },
    ],

    // Default data
    'default': [
      { id: 1, name: 'بيانات تجريبية 1', value: '100', status: 'مكتمل', date: '2024-01-01' },
      { id: 2, name: 'بيانات تجريبية 2', value: '200', status: 'قيد التنفيذ', date: '2024-01-02' },
      { id: 3, name: 'بيانات تجريبية 3', value: '150', status: 'مؤجل', date: '2024-01-03' },
    ]
  };

  return reportDataMap[reportKey] || reportDataMap['default'];
};

const getTableHeaders = (reportName: string, sector: string) => {
  const reportKey = `${sector}-${reportName}`;
  
  const headerMap = {
    'القطاع العقاري-تقرير مبيعات الوحدات': ['رقم الوحدة', 'اسم الوحدة', 'النوع', 'المساحة', 'السعر', 'الحالة', 'المشتري', 'تاريخ البيع'],
    'القطاع العقاري-تقرير الوحدات المتاحة': ['رقم الوحدة', 'اسم الوحدة', 'النوع', 'المساحة', 'السعر', 'الحالة', 'الموقع', 'المرحلة'],
    'القطاع العقاري-تقرير مبيعات الأراضي': ['رقم القطعة', 'اسم القطعة', 'المساحة', 'السعر', 'الحالة', 'المشتري', 'نوع الدفع', 'تاريخ البيع'],
    'الشؤون الإدارية-تقرير الحضور': ['رقم الموظف', 'اسم الموظف', 'القسم', 'الحضور', 'الغياب', 'التأخير', 'الإضافي', 'الشهر'],
    'الشؤون الإدارية-تقرير الرواتب': ['رقم الراتب', 'الموظف', 'المنصب', 'الراتب الأساسي', 'البدلات', 'الخصومات', 'صافي الراتب', 'الشهر'],
    'قطاع التعاون-تقرير الجمعيات': ['رقم الجمعية', 'اسم الجمعية', 'النوع', 'المنطقة', 'عدد الأعضاء', 'المشاريع النشطة', 'إجمالي الأراضي', 'الحالة'],
    'القطاع المالي-تقرير التحصيلات': ['رقم التحصيل', 'مصدر الإيراد', 'المبلغ المستحق', 'المبلغ المحصل', 'المبلغ المعلق', 'نسبة التحصيل', 'الشهر'],
    'القطاع القانوني-تقرير القضايا': ['رقم القضية', 'نوع القضية', 'الطرف الآخر', 'المبلغ', 'الحالة', 'المحكمة', 'التاريخ'],
    'قطاع المشروعات-تقرير حالة المشاريع': ['رقم المشروع', 'اسم المشروع', 'المقاول', 'نسبة الإنجاز', 'الميزانية', 'المصروف', 'الحالة', 'تاريخ الانتهاء المتوقع'],
    'default': ['الرقم', 'الاسم', 'القيمة', 'الحالة', 'التاريخ']
  };

  return headerMap[reportKey] || headerMap['default'];
};

export const ReportView = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const reportName = searchParams.get('name') || 'تقرير غير محدد';
  const sector = searchParams.get('sector') || 'قطاع غير محدد';

  const reportData = getReportData(reportName, sector);
  const tableHeaders = getTableHeaders(reportName, sector);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2"
        >
          <ArrowRight className="h-4 w-4" />
          العودة
        </Button>
      </div>

      <Card>
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center justify-between">
            <div className="text-right">
              <h1 className="text-xl font-bold text-gray-900">الهيئة العامة لتعاونيات البناء والاسكان</h1>
              <p className="text-sm text-gray-600 mt-1">{sector}</p>
            </div>
            
            <div className="text-center flex-1">
              <CardTitle className="text-2xl font-bold text-erp-blue">{reportName}</CardTitle>
            </div>
            
            <div className="text-left">
              <img 
                src="/lovable-uploads/2afaecf2-ca8f-4cad-9518-80c17aa49952.png" 
                alt="شعار الهيئة" 
                className="h-16 w-16 object-contain"
              />
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">بيانات التقرير</h3>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                {tableHeaders.map((header, index) => (
                  <TableHead key={index} className="text-right">{header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {reportData.map((item, index) => (
                <TableRow key={index}>
                  {Object.values(item).map((value, cellIndex) => (
                    <TableCell key={cellIndex} className={cellIndex === 0 ? "font-medium" : ""}>
                      {String(value) === 'مكتمل' || String(value) === 'مباعة' || String(value) === 'نشطة' || String(value) === 'محلولة' || String(value) === 'معتمد' ? (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {String(value)}
                        </span>
                      ) : String(value) === 'قيد التنفيذ' || String(value) === 'محجوزة' || String(value) === 'مراجعة' || String(value) === 'قيد النظر' || String(value) === 'متاحة' ? (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          {String(value)}
                        </span>
                      ) : String(value) === 'مؤجل' || String(value) === 'معلقة' || String(value) === 'متأخر' ? (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          {String(value)}
                        </span>
                      ) : (
                        String(value)
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">ملاحظات التقرير:</h4>
            <p className="text-gray-600 text-sm">
              هذا تقرير {reportName} الخاص بـ{sector}. البيانات المعروضة تعكس الوضع الحالي للقطاع وتحديثاتها تتم بشكل دوري.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
