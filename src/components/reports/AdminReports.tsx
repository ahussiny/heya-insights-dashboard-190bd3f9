
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BarChart3 } from 'lucide-react';

const adminReports = [
  'تقرير الحضور',
  'تقرير الأداء',
  'تقرير الرواتب',
  'تقرير الإجازات',
  'تقرير التدريب'
];

export const AdminReports = () => {
  const navigate = useNavigate();

  const handleReportClick = (reportName: string) => {
    navigate(`/report?name=${encodeURIComponent(reportName)}&sector=${encodeURIComponent('الشؤون الإدارية')}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          تقارير الموظفين
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {adminReports.map((report, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => handleReportClick(report)}
              className="h-auto p-4 text-right justify-start bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200"
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
