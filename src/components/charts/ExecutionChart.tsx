
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const executionData = [
  { month: 'يناير', approved: 6, pending: 2, rejected: 1 },
  { month: 'فبراير', approved: 8, pending: 3, rejected: 1 },
  { month: 'مارس', approved: 10, pending: 2, rejected: 2 },
  { month: 'أبريل', approved: 12, pending: 4, rejected: 1 },
  { month: 'مايو', approved: 15, pending: 3, rejected: 2 },
  { month: 'يونيو', approved: 18, pending: 5, rejected: 1 }
];

const contractorData = [
  { name: 'شركة البناء المتقدم', projects: 4, rating: 95 },
  { name: 'مقاولات الخليج', projects: 3, rating: 88 },
  { name: 'شركة العمران', projects: 5, rating: 92 },
  { name: 'بناء المستقبل', projects: 2, rating: 85 }
];

const qualityData = [
  { name: 'ممتاز', value: 15, color: '#10b981' },
  { name: 'جيد جداً', value: 8, color: '#3b82f6' },
  { name: 'جيد', value: 3, color: '#f59e0b' },
  { name: 'يحتاج تحسين', value: 1, color: '#ef4444' }
];

const chartConfig = {
  approved: { label: 'معتمد', color: '#10b981' },
  pending: { label: 'قيد المراجعة', color: '#f59e0b' },
  rejected: { label: 'مرفوض', color: '#ef4444' }
};

export const ExecutionChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>حالة المستخلصات الشهرية</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={executionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="approved" fill="#10b981" name="معتمد" />
              <Bar dataKey="pending" fill="#f59e0b" name="قيد المراجعة" />
              <Bar dataKey="rejected" fill="#ef4444" name="مرفوض" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>تقييم المقاولين</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={contractorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="rating" fill="#3b82f6" name="التقييم %" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>توزيع الجودة</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <PieChart>
              <Pie
                data={qualityData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {qualityData.map((entry, index) => (
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
