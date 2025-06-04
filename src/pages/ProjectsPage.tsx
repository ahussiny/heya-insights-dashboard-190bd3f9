
import React from 'react';
import { StatCard } from '../components/StatCard';
import { FolderOpen, Calculator, TrendingUp, Clock } from 'lucide-react';

export const ProjectsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">قطاع المشروعات</h1>
        <p className="text-gray-600 mt-2">تخطيط ودراسة المشاريع وعمل المقايسات</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="المشاريع قيد التخطيط"
          value="12"
          change="20%"
          changeType="increase"
          icon={FolderOpen}
          color="from-erp-blue to-erp-blue-light"
        />
        <StatCard
          title="المقايسات المكتملة"
          value="8"
          change="15%"
          changeType="increase"
          icon={Calculator}
          color="from-erp-green to-erp-green-light"
        />
        <StatCard
          title="ميزانية المشاريع"
          value="45.2 مليون"
          change="10%"
          changeType="increase"
          icon={TrendingUp}
          color="from-erp-orange to-erp-orange-light"
        />
        <StatCard
          title="المشاريع المتأخرة"
          value="3"
          change="25%"
          changeType="decrease"
          icon={Clock}
          color="from-erp-red to-erp-red-light"
        />
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">المشاريع الحالية</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-right py-3 px-4 font-semibold text-gray-700">اسم المشروع</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">الحالة</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">الميزانية</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">تاريخ البدء</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">التقدم</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'مشروع الأندلس السكني', status: 'قيد التخطيط', budget: '15.5 مليون', date: '2024-01-15', progress: 75 },
                { name: 'مشروع النور التجاري', status: 'مقايسة', budget: '22.3 مليون', date: '2024-02-01', progress: 45 },
                { name: 'مشروع الياسمين', status: 'مكتمل', budget: '8.7 مليون', date: '2023-11-20', progress: 100 },
                { name: 'مشروع الورود', status: 'قيد التخطيط', budget: '12.1 مليون', date: '2024-03-10', progress: 25 },
              ].map((project, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">{project.name}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'مكتمل' ? 'bg-green-100 text-green-600' :
                      project.status === 'مقايسة' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{project.budget}</td>
                  <td className="py-3 px-4">{project.date}</td>
                  <td className="py-3 px-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-erp-blue h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">{project.progress}%</span>
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
