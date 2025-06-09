
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

export const ReportView = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const reportName = searchParams.get('name') || 'تقرير غير محدد';
  const sector = searchParams.get('sector') || 'قطاع غير محدد';

  // Sample data for demonstration
  const sampleData = [
    { id: 1, name: 'بيانات تجريبية 1', value: '100', status: 'مكتمل', date: '2024-01-01' },
    { id: 2, name: 'بيانات تجريبية 2', value: '200', status: 'قيد التنفيذ', date: '2024-01-02' },
    { id: 3, name: 'بيانات تجريبية 3', value: '150', status: 'مؤجل', date: '2024-01-03' },
    { id: 4, name: 'بيانات تجريبية 4', value: '300', status: 'مكتمل', date: '2024-01-04' },
    { id: 5, name: 'بيانات تجريبية 5', value: '250', status: 'قيد التنفيذ', date: '2024-01-05' },
  ];

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
                <TableHead className="text-right">الرقم</TableHead>
                <TableHead className="text-right">الاسم</TableHead>
                <TableHead className="text-right">القيمة</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">التاريخ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.value}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'مكتمل' 
                        ? 'bg-green-100 text-green-800' 
                        : item.status === 'قيد التنفيذ'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell>{item.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">ملاحظات التقرير:</h4>
            <p className="text-gray-600 text-sm">
              هذا تقرير تجريبي يحتوي على بيانات وهمية لأغراض العرض. في البيئة الحقيقية، ستظهر هنا البيانات الفعلية من قاعدة البيانات.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
