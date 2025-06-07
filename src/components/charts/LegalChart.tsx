
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const casesData = [
  { month: 'يناير', active: 5, resolved: 3, new: 2 },
  { month: 'فبراير', active: 6, resolved: 4, new: 3 },
  { month: 'مارس', active: 7, resolved: 2, new: 3 },
  { month: 'أبريل', active: 8, resolved: 5, new: 4 },
  { month: 'مايو', active: 7, resolved: 6, new: 2 },
  { month: 'يونيو', active: 8, resolved: 4, new: 3 }
];

const contractTypes = [
  { name: 'عقود مقاولة', value: 45, color: '#3b82f6' },
  { name: 'عقود بيع', value: 30, color: '#10b981' },
  { name: 'عقود توريد', value: 15, color: '#f59e0b' },
  { name: 'عقود خدمات', value: 10, color: '#8b5cf6' }
];

const caseTypes = [
  { name: 'تحصيل مبالغ', cases: 12 },
  { name: 'مطالبات عمالية', cases: 8 },
  { name: 'منازعات عقود', cases: 6 },
  { name: 'قضايا إدارية', cases: 4 },
  { name: 'استشارات قانونية', cases: 15 }
];

const chartConfig = {
  active: { label: 'نشطة', color: '#f59e0b' },
  resolved: { label: 'محلولة', color: '#10b981' },
  new: { label: 'جديدة', color: '#3b82f6' }
};

export const LegalChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>حالة القضايا الشهرية</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={casesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="active" fill="#f59e0b" name="نشطة" />
              <Bar dataKey="resolved" fill="#10b981" name="محلولة" />
              <Bar dataKey="new" fill="#3b82f6" name="جديدة" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>أنواع العقود</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <PieChart>
              <Pie
                data={contractTypes}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {contractTypes.map((entry, index) => (
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
          <CardTitle>توزيع أنواع القضايا</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={caseTypes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="cases" fill="#ef4444" name="عدد القضايا" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>معدل نجاح القضايا</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={casesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="resolved" 
                stroke="#10b981"
                strokeWidth={3}
                name="القضايا المحلولة"
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};
