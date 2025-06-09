
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BarChart3 } from 'lucide-react';

const projectReports = [
  'تقرير حالة المشاريع',
  'تقرير التقدم الشهري', 
  'تقرير التكاليف',
  'تقرير المقايسات',
  'تقرير الجدولة الزمنية'
];

export const ProjectsReports = () => {
  const navigate = useNavigate();

  const handleReportClick = (reportName: string) => {
    navigate(`/report?name=${encodeURIComponent(reportName)}&sector=${encodeURIComponent('قطاع المشروعات')}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          تقارير قطاع المشروعات
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {projectReports.map((report, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => handleReportClick(report)}
              className="h-auto p-4 text-right justify-start bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200"
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
