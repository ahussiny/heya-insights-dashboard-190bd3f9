
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BarChart3 } from 'lucide-react';

const legalReports = [
  'تقرير القضايا',
  'تقرير العقود',
  'تقرير الاستشارات',
  'تقرير المطالبات',
  'تقرير الإنذارات'
];

export const LegalReports = () => {
  const handleReportClick = (reportName: string) => {
    console.log(`فتح تقرير: ${reportName} من القطاع القانوني`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          التقارير القانونية
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {legalReports.map((report, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => handleReportClick(report)}
              className="h-auto p-4 text-right justify-start bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200"
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
