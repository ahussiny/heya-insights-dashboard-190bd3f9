
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BarChart3 } from 'lucide-react';

const associationLandsReports = [
  'تقرير الأراضي الممنوحة',
  'تقرير التقسيمات',
  'تقرير العقود والبيع',
  'تقرير مشاريع البناء',
  'تقرير التحصيل المالي',
  'تقرير الأقساط المتأخرة',
  'تقرير المتابعة القانونية',
  'تقرير الجمعيات المستفيدة'
];

export const AssociationLandsReports = () => {
  const handleReportClick = (reportName: string) => {
    console.log(`فتح تقرير: ${reportName} من قسم أراضي الجمعيات`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          تقارير أراضي الجمعيات
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {associationLandsReports.map((report, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => handleReportClick(report)}
              className="h-auto p-4 text-right justify-start bg-gradient-to-r from-teal-50 to-teal-100 hover:from-teal-100 hover:to-teal-200"
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
