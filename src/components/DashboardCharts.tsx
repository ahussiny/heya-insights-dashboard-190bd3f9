
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { month: 'يناير', projects: 12, sales: 25, revenue: 4.2, employees: 120 },
  { month: 'فبراير', projects: 15, sales: 32, revenue: 5.1, employees: 122 },
  { month: 'مارس', projects: 18, sales: 28, revenue: 4.8, employees: 125 },
  { month: 'أبريل', projects: 22, sales: 35, revenue: 6.2, employees: 127 },
  { month: 'مايو', projects: 28, sales: 42, revenue: 7.5, employees: 130 },
  { month: 'يونيو', projects: 25, sales: 38, revenue: 6.8, employees: 127 }
];

const sectorData = [
  { name: 'المشروعات', value: 35, color: '#3b82f6' },
  { name: 'العقارات', value: 25, color: '#10b981' },
  { name: 'المالي', value: 20, color: '#f59e0b' },
  { name: 'الإداري', value: 12, color: '#8b5cf6' },
  { name: 'القانوني', value: 5, color: '#ef4444' },
  { name: 'التعاون', value: 3, color: '#06b6d4' }
];

const chartConfig = {
  projects: {
    label: 'المشاريع',
    color: '#3b82f6'
  },
  sales: {
    label: 'المبيعات',
    color: '#10b981'
  },
  revenue: {
    label: 'الإيرادات (مليون)',
    color: '#f59e0b'
  },
  employees: {
    label: 'الموظفين',
    color: '#8b5cf6'
  }
};

export const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* مخطط الأعمدة - الأداء الشهري */}
      <Card>
        <CardHeader>
          <CardTitle>الأداء الشهري للمشاريع والمبيعات</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="projects" fill={chartConfig.projects.color} name="المشاريع" />
              <Bar dataKey="sales" fill={chartConfig.sales.color} name="المبيعات" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* مخطط خطي - الإيرادات */}
      <Card>
        <CardHeader>
          <CardTitle>نمو الإيرادات الشهرية</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke={chartConfig.revenue.color}
                strokeWidth={3}
                name="الإيرادات (مليون ريال)"
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* مخطط دائري - توزيع القطاعات */}
      <Card>
        <CardHeader>
          <CardTitle>توزيع الأنشطة حسب القطاعات</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <PieChart>
              <Pie
                data={sectorData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {sectorData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* مخطط مختلط - عدد الموظفين */}
      <Card>
        <CardHeader>
          <CardTitle>نمو عدد الموظفين</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="employees" 
                stroke={chartConfig.employees.color}
                strokeWidth={2}
                name="عدد الموظفين"
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};
