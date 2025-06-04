
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export const ProjectChart = () => {
  const projectData = [
    { name: 'مشروع الأندلس', completed: 85, pending: 15 },
    { name: 'مشروع النور', completed: 60, pending: 40 },
    { name: 'مشروع الياسمين', completed: 95, pending: 5 },
    { name: 'مشروع الورود', completed: 30, pending: 70 },
  ];

  const pieData = [
    { name: 'مكتملة', value: 12, color: '#10b981' },
    { name: 'قيد التنفيذ', value: 8, color: '#f59e0b' },
    { name: 'متأخرة', value: 3, color: '#ef4444' },
    { name: 'مخططة', value: 5, color: '#6b7280' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">تقدم المشاريع</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={projectData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="completed" fill="#10b981" name="مكتمل" />
            <Bar dataKey="pending" fill="#f59e0b" name="متبقي" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">حالة المشاريع</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}`}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
