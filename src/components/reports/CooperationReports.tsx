
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BarChart3 } from 'lucide-react';

const cooperationReports = [
  'تقرير الجمعيات',
  'تقرير الأنشطة',
  'تقرير الدعم',
  'تقرير الأعضاء',
  'تقرير المشاريع'
];

export const CooperationReports = () => {
  const navigate = useNavigate();

  const handleReportClick = (reportName: string) => {
    navigate(`/report?name=${encodeURIComponent(reportName)}&sector=${encodeURIComponent('قطاع التعاون')}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          تقارير التعاون
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {cooperationReports.map((report, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => handleReportClick(report)}
              className="h-auto p-4 text-right justify-start bg-gradient-to-r from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200"
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
