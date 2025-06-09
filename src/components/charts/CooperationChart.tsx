
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const societiesData = [
  { month: 'يناير', active: 20, members: 1200, projects: 8 },
  { month: 'فبراير', active: 21, members: 1220, projects: 9 },
  { month: 'مارس', active: 22, members: 1235, projects: 10 },
  { month: 'أبريل', active: 23, members: 1248, projects: 11 },
  { month: 'مايو', active: 24, members: 1256, projects: 12 },
  { month: 'يونيو', active: 24, members: 1256, projects: 10 }
];

const paymentStatus = [
  { name: 'مدفوع', value: 65, color: '#10b981' },
  { name: 'مستحق', value: 25, color: '#f59e0b' },
  { name: 'متأخر', value: 10, color: '#ef4444' }
];

const societyTypes = [
  { name: 'فئوية', count: 12, revenue: 35.2 },
  { name: 'إقليمية', count: 10, revenue: 42.8 },
  { name: 'فئوية وإقليمية', count: 2, revenue: 7.5 }
];

const landAllocation = [
  { month: 'يناير', allocated: 25, revenue: 12.5 },
  { month: 'فبراير', allocated: 30, revenue: 15.2 },
  { month: 'مارس', allocated: 28, revenue: 14.8 },
  { month: 'أبريل', allocated: 35, revenue: 18.9 },
  { month: 'مايو', allocated: 40, revenue: 22.1 },
  { month: 'يونيو', allocated: 38, revenue: 20.8 }
];

const chartConfig = {
  active: { label: 'نشطة', color: '#3b82f6' },
  members: { label: 'أعضاء', color: '#10b981' },
  projects: { label: 'مشاريع', color: '#f59e0b' },
  allocated: { label: 'مخصص', color: '#8b5cf6' },
  revenue: { label: 'الإيرادات', color: '#10b981' }
};

export const CooperationChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>نمو الجمعيات والأعضاء</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={societiesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="active" 
                stroke="#3b82f6"
                strokeWidth={3}
                name="الجمعيات النشطة"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="members" 
                stroke="#10b981"
                strokeWidth={3}
                name="عدد الأعضاء"
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>تخصيص الأراضي والإيرادات</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={landAllocation}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="allocated" fill="#8b5cf6" name="قطع مخصصة" />
              <Bar dataKey="revenue" fill="#10b981" name="الإيرادات (مليون)" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>حالة الدفعات</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <PieChart>
              <Pie
                data={paymentStatus}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {paymentStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>أنواع الجمعيات</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={societyTypes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="count" fill="#3b82f6" name="عدد الجمعيات" />
              <Bar dataKey="revenue" fill="#10b981" name="الإيرادات (مليون)" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};
