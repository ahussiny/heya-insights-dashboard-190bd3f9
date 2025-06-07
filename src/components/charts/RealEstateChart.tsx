
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const salesData = [
  { month: 'يناير', sold: 12, available: 45, revenue: 4.2 },
  { month: 'فبراير', sold: 18, available: 39, revenue: 6.8 },
  { month: 'مارس', sold: 15, available: 42, revenue: 5.5 },
  { month: 'أبريل', sold: 22, available: 35, revenue: 8.9 },
  { month: 'مايو', sold: 28, available: 29, revenue: 11.2 },
  { month: 'يونيو', sold: 25, available: 32, revenue: 9.8 }
];

const projectSales = [
  { name: 'مشروع الأندلس', units: 45, sold: 32 },
  { name: 'مشروع النور', units: 38, sold: 28 },
  { name: 'مشروع الياسمين', units: 52, sold: 41 },
  { name: 'مشروع الورود', units: 30, sold: 18 }
];

const customerTypes = [
  { name: 'عملاء أفراد', value: 65, color: '#3b82f6' },
  { name: 'شركات', value: 25, color: '#10b981' },
  { name: 'مؤسسات حكومية', value: 10, color: '#f59e0b' }
];

const chartConfig = {
  sold: { label: 'مباع', color: '#10b981' },
  available: { label: 'متاح', color: '#3b82f6' },
  revenue: { label: 'الإيرادات', color: '#f59e0b' }
};

export const RealEstateChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>المبيعات والوحدات المتاحة</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="sold" fill="#10b981" name="مباع" />
              <Bar dataKey="available" fill="#3b82f6" name="متاح" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>نمو الإيرادات الشهرية</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#f59e0b"
                strokeWidth={3}
                name="الإيرادات (مليون ريال)"
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>مبيعات المشاريع</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={projectSales}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="sold" fill="#10b981" name="مباع" />
              <Bar dataKey="units" fill="#e5e7eb" name="إجمالي الوحدات" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>توزيع العملاء</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <PieChart>
              <Pie
                data={customerTypes}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {customerTypes.map((entry, index) => (
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
