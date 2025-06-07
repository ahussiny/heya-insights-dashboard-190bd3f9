
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const projectsData = [
  { month: 'يناير', completed: 3, inProgress: 5, planning: 4 },
  { month: 'فبراير', completed: 4, inProgress: 6, planning: 5 },
  { month: 'مارس', completed: 5, inProgress: 7, planning: 6 },
  { month: 'أبريل', completed: 6, inProgress: 8, planning: 8 },
  { month: 'مايو', completed: 7, inProgress: 10, planning: 11 },
  { month: 'يونيو', completed: 8, inProgress: 12, planning: 12 }
];

const budgetData = [
  { name: 'مشروع الأندلس', budget: 15.5 },
  { name: 'مشروع النور', budget: 22.3 },
  { name: 'مشروع الياسمين', budget: 8.7 },
  { name: 'مشروع الورود', budget: 12.1 }
];

const statusData = [
  { name: 'مكتمل', value: 8, color: '#10b981' },
  { name: 'قيد التنفيذ', value: 12, color: '#f59e0b' },
  { name: 'قيد التخطيط', value: 12, color: '#3b82f6' }
];

const chartConfig = {
  completed: { label: 'مكتمل', color: '#10b981' },
  inProgress: { label: 'قيد التنفيذ', color: '#f59e0b' },
  planning: { label: 'قيد التخطيط', color: '#3b82f6' }
};

export const ProjectsChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>حالة المشاريع الشهرية</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={projectsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="completed" fill="#10b981" name="مكتمل" />
              <Bar dataKey="inProgress" fill="#f59e0b" name="قيد التنفيذ" />
              <Bar dataKey="planning" fill="#3b82f6" name="قيد التخطيط" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ميزانيات المشاريع الحالية</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={budgetData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="budget" fill="#3b82f6" name="الميزانية (مليون ريال)" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>توزيع المشاريع حسب الحالة</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};
