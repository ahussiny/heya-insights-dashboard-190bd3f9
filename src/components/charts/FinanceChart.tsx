
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const collectionData = [
  { month: 'يناير', collected: 6.5, installments: 45, overdue: 8 },
  { month: 'فبراير', collected: 7.2, installments: 52, overdue: 6 },
  { month: 'مارس', collected: 6.8, installments: 48, overdue: 9 },
  { month: 'أبريل', collected: 8.9, installments: 58, overdue: 5 },
  { month: 'مايو', collected: 9.1, installments: 62, overdue: 7 },
  { month: 'يونيو', collected: 8.5, installments: 56, overdue: 4 }
];

const paymentMethods = [
  { name: 'تحويل بنكي', value: 45, color: '#3b82f6' },
  { name: 'شيك', value: 30, color: '#10b981' },
  { name: 'نقد', value: 20, color: '#f59e0b' },
  { name: 'تمويل', value: 5, color: '#8b5cf6' }
];

const revenueGrowth = [
  { month: 'يناير', revenue: 6.5, target: 7.0 },
  { month: 'فبراير', revenue: 7.2, target: 7.5 },
  { month: 'مارس', revenue: 6.8, target: 7.2 },
  { month: 'أبريل', revenue: 8.9, target: 8.0 },
  { month: 'مايو', revenue: 9.1, target: 8.5 },
  { month: 'يونيو', revenue: 8.5, target: 8.8 }
];

const chartConfig = {
  collected: { label: 'محصل', color: '#10b981' },
  installments: { label: 'أقساط', color: '#3b82f6' },
  overdue: { label: 'متأخر', color: '#ef4444' },
  revenue: { label: 'الإيرادات الفعلية', color: '#10b981' },
  target: { label: 'الهدف', color: '#f59e0b' }
};

export const FinanceChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>التحصيلات الشهرية</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={collectionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="collected" 
                stroke="#10b981"
                strokeWidth={3}
                name="المحصل (مليون ريال)"
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>الأقساط والمتأخرات</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={collectionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="installments" fill="#3b82f6" name="أقساط" />
              <Bar dataKey="overdue" fill="#ef4444" name="متأخر" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>الإيرادات مقابل الأهداف</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={revenueGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#10b981"
                strokeWidth={3}
                name="الإيرادات الفعلية"
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#f59e0b"
                strokeWidth={2}
                strokeDasharray="5 5"
                name="الهدف"
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>طرق الدفع</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <PieChart>
              <Pie
                data={paymentMethods}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {paymentMethods.map((entry, index) => (
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
