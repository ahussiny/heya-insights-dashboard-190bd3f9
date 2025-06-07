
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const attendanceData = [
  { month: 'يناير', attendance: 94, performance: 88, employees: 120 },
  { month: 'فبراير', attendance: 92, performance: 90, employees: 122 },
  { month: 'مارس', attendance: 96, performance: 87, employees: 125 },
  { month: 'أبريل', attendance: 93, performance: 92, employees: 127 },
  { month: 'مايو', attendance: 95, performance: 89, employees: 130 },
  { month: 'يونيو', attendance: 94, performance: 91, employees: 127 }
];

const departmentData = [
  { name: 'المشروعات', employees: 25, satisfaction: 88 },
  { name: 'العقاري', employees: 20, satisfaction: 92 },
  { name: 'التنفيذ', employees: 22, satisfaction: 85 },
  { name: 'المالي', employees: 18, satisfaction: 90 },
  { name: 'الإداري', employees: 15, satisfaction: 87 },
  { name: 'القانوني', employees: 12, satisfaction: 93 },
  { name: 'التعاون', employees: 15, satisfaction: 89 }
];

const performanceRating = [
  { name: 'ممتاز', value: 35, color: '#10b981' },
  { name: 'جيد جداً', value: 40, color: '#3b82f6' },
  { name: 'جيد', value: 20, color: '#f59e0b' },
  { name: 'يحتاج تحسين', value: 5, color: '#ef4444' }
];

const chartConfig = {
  attendance: { label: 'الحضور %', color: '#3b82f6' },
  performance: { label: 'الأداء %', color: '#10b981' },
  employees: { label: 'عدد الموظفين', color: '#f59e0b' }
};

export const AdminChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>معدلات الحضور والأداء</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="attendance" 
                stroke="#3b82f6"
                strokeWidth={3}
                name="معدل الحضور %"
              />
              <Line 
                type="monotone" 
                dataKey="performance" 
                stroke="#10b981"
                strokeWidth={3}
                name="معدل الأداء %"
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>توزيع الموظفين على الأقسام</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={departmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="employees" fill="#3b82f6" name="عدد الموظفين" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>نمو عدد الموظفين</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="employees" 
                stroke="#f59e0b"
                strokeWidth={3}
                name="عدد الموظفين"
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>تقييم الأداء العام</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <PieChart>
              <Pie
                data={performanceRating}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {performanceRating.map((entry, index) => (
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
