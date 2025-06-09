
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BarChart3 } from 'lucide-react';

const realEstateReports = [
  'تقرير مبيعات الوحدات',
  'تقرير الوحدات المتاحة',
  'تقرير مبيعات الأراضي',
  'تقرير الأراضي المتاحة',
  'تقرير العملاء',
  'تقرير الأسعار',
  'تقرير الدفعات',
  'تقرير عقود الأراضي'
];

export const RealEstateReports = () => {
  const handleReportClick = (reportName: string) => {
    console.log(`فتح تقرير: ${reportName} من القطاع العقاري`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          تقارير القطاع العقاري
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {realEstateReports.map((report, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => handleReportClick(report)}
              className="h-auto p-4 text-right justify-start bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200"
            >
              <FileText className="h-4 w-4 ml-2" />
              {report}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
