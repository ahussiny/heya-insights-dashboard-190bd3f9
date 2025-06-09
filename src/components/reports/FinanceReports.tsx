
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BarChart3 } from 'lucide-react';

const financeReports = [
  'تقرير التحصيلات',
  'تقرير الأقساط',
  'تقرير المتأخرات',
  'تقرير الإيرادات',
  'تقرير التدفق النقدي'
];

export const FinanceReports = () => {
  const navigate = useNavigate();

  const handleReportClick = (reportName: string) => {
    navigate(`/report?name=${encodeURIComponent(reportName)}&sector=${encodeURIComponent('القطاع المالي')}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          التقارير المالية
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {financeReports.map((report, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => handleReportClick(report)}
              className="h-auto p-4 text-right justify-start bg-gradient-to-r from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200"
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
