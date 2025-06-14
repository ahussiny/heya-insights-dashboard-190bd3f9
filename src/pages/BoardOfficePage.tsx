
import React from 'react';
import { StatCard } from '../components/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCheck, FileText, Calendar, CheckCircle, Clock, Users } from 'lucide-react';

export const BoardOfficePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">الإدارة المركزية لشئون مكتب رئيس مجلس الإدارة</h1>
        <p className="text-gray-600 mt-2">إدارة شئون مكتب رئيس مجلس الإدارة والمتابعة التنفيذية</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="الاجتماعات الشهرية"
          value="8"
          change="12%"
          changeType="increase"
          icon={Calendar}
          color="from-erp-blue to-erp-blue-light"
        />
        <StatCard
          title="القرارات المنفذة"
          value="24"
          change="18%"
          changeType="increase"
          icon={CheckCircle}
          color="from-erp-green to-erp-green-light"
        />
        <StatCard
          title="المتابعات المعلقة"
          value="6"
          change="15%"
          changeType="decrease"
          icon={Clock}
          color="from-erp-orange to-erp-orange-light"
        />
        <StatCard
          title="التقارير المرفوعة"
          value="12"
          change="25%"
          changeType="increase"
          icon={FileText}
          color="from-erp-purple to-erp-purple-light"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              اجتماعات مجلس الإدارة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: '2024-06-15', topic: 'مراجعة الميزانية السنوية', status: 'مكتمل', attendees: 8 },
                { date: '2024-06-20', topic: 'مناقشة المشاريع الجديدة', status: 'مجدول', attendees: 0 },
                { date: '2024-05-30', topic: 'تقييم الأداء الربعي', status: 'مكتمل', attendees: 7 },
                { date: '2024-05-15', topic: 'اعتماد السياسات الجديدة', status: 'مكتمل', attendees: 9 },
              ].map((meeting, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{meeting.topic}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      meeting.status === 'مكتمل' ? 'bg-green-100 text-green-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {meeting.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{meeting.date}</span>
                    {meeting.attendees > 0 && (
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        {meeting.attendees} حاضر
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              القرارات والمتابعات
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: 'QR-001', decision: 'اعتماد مشروع الأندلس الجديد', department: 'قطاع المشروعات', status: 'منفذ', priority: 'عالية' },
                { id: 'QR-002', decision: 'تحديث لائحة المقاولين', department: 'قطاع التنفيذ', status: 'قيد التنفيذ', priority: 'متوسطة' },
                { id: 'QR-003', decision: 'مراجعة أسعار الوحدات', department: 'القطاع العقاري', status: 'معلق', priority: 'عالية' },
                { id: 'QR-004', decision: 'تطوير نظام التحصيل', department: 'القطاع المالي', status: 'منفذ', priority: 'عالية' },
              ].map((decision, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">{decision.decision}</h4>
                      <p className="text-sm text-gray-600">{decision.department}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        decision.status === 'منفذ' ? 'bg-green-100 text-green-600' :
                        decision.status === 'قيد التنفيذ' ? 'bg-blue-100 text-blue-600' :
                        'bg-yellow-100 text-yellow-600'
                      }`}>
                        {decision.status}
                      </span>
                      <div className={`text-xs mt-1 ${
                        decision.priority === 'عالية' ? 'text-red-600' :
                        decision.priority === 'متوسطة' ? 'text-orange-600' :
                        'text-gray-600'
                      }`}>
                        أولوية {decision.priority}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">التقارير التنفيذية</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-right py-3 px-4 font-semibold text-gray-700">رقم التقرير</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">عنوان التقرير</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">القطاع</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">تاريخ الرفع</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 'RPT-001', title: 'تقرير الأداء الشهري', department: 'جميع القطاعات', date: '2024-06-01', status: 'مراجع' },
                { id: 'RPT-002', title: 'تقرير المبيعات العقارية', department: 'القطاع العقاري', date: '2024-05-30', status: 'معتمد' },
                { id: 'RPT-003', title: 'تقرير التحصيلات المالية', department: 'القطاع المالي', date: '2024-05-28', status: 'معتمد' },
                { id: 'RPT-004', title: 'تقرير سير المشاريع', department: 'قطاع المشروعات', date: '2024-05-25', status: 'قيد المراجعة' },
              ].map((report, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{report.id}</td>
                  <td className="py-3 px-4">{report.title}</td>
                  <td className="py-3 px-4">{report.department}</td>
                  <td className="py-3 px-4">{report.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      report.status === 'معتمد' ? 'bg-green-100 text-green-600' :
                      report.status === 'مراجع' ? 'bg-blue-100 text-blue-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
