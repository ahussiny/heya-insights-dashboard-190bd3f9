
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FolderOpen, 
  Building, 
  DollarSign, 
  Users, 
  Scale, 
  Handshake,
  Settings,
  FileText,
  BarChart3
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const sectorReports = [
  {
    id: 'projects',
    title: 'تقارير المشروعات',
    icon: FolderOpen,
    color: 'from-blue-500 to-blue-600',
    path: '/projects',
    reports: ['تقرير حالة المشاريع', 'تقرير التقدم الشهري', 'تقرير التكاليف']
  },
  {
    id: 'execution',
    title: 'تقارير التنفيذ',
    icon: Settings,
    color: 'from-green-500 to-green-600',
    path: '/execution',
    reports: ['تقرير المقاولين', 'تقرير المستخلصات', 'تقرير الجودة']
  },
  {
    id: 'real-estate',
    title: 'تقارير العقارات',
    icon: Building,
    color: 'from-purple-500 to-purple-600',
    path: '/real-estate',
    reports: ['تقرير المبيعات', 'تقرير الوحدات المتاحة', 'تقرير العملاء']
  },
  {
    id: 'finance',
    title: 'التقارير المالية',
    icon: DollarSign,
    color: 'from-emerald-500 to-emerald-600',
    path: '/finance',
    reports: ['تقرير التحصيلات', 'تقرير الأقساط', 'تقرير المتأخرات']
  },
  {
    id: 'admin',
    title: 'تقارير الموظفين',
    icon: Users,
    color: 'from-orange-500 to-orange-600',
    path: '/admin',
    reports: ['تقرير الحضور', 'تقرير الأداء', 'تقرير الرواتب']
  },
  {
    id: 'legal',
    title: 'التقارير القانونية',
    icon: Scale,
    color: 'from-red-500 to-red-600',
    path: '/legal',
    reports: ['تقرير القضايا', 'تقرير العقود', 'تقرير الاستشارات']
  },
  {
    id: 'cooperation',
    title: 'تقارير التعاون',
    icon: Handshake,
    color: 'from-indigo-500 to-indigo-600',
    path: '/cooperation',
    reports: ['تقرير الجمعيات', 'تقرير الأنشطة', 'تقرير الدعم']
  }
];

export const SectorReportsPanel = () => {
  const navigate = useNavigate();

  const handleSectorClick = (path: string) => {
    navigate(path);
  };

  const handleReportClick = (sectorId: string, reportName: string) => {
    console.log(`فتح تقرير: ${reportName} من قطاع: ${sectorId}`);
    // هنا يمكن إضافة منطق فتح التقرير
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          مفاتيح التقارير القطاعية
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sectorReports.map((sector) => {
            const Icon = sector.icon;
            return (
              <div key={sector.id} className="group">
                <div className={`bg-gradient-to-r ${sector.color} rounded-lg p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="h-6 w-6" />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20"
                      onClick={() => handleSectorClick(sector.path)}
                    >
                      عرض القطاع
                    </Button>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-3">{sector.title}</h3>
                  
                  <div className="space-y-2">
                    {sector.reports.map((report, index) => (
                      <button
                        key={index}
                        onClick={() => handleReportClick(sector.id, report)}
                        className="w-full text-right bg-white/20 hover:bg-white/30 rounded px-3 py-2 text-sm transition-colors duration-200 flex items-center gap-2"
                      >
                        <FileText className="h-4 w-4" />
                        {report}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
