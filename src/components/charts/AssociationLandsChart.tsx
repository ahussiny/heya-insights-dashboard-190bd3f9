
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const landsData = [
  { month: 'يناير', granted: 8, divided: 6, sold: 4 },
  { month: 'فبراير', granted: 12, divided: 10, sold: 7 },
  { month: 'مارس', granted: 10, divided: 8, sold: 6 },
  { month: 'أبريل', granted: 15, divided: 12, sold: 9 },
  { month: 'مايو', granted: 18, divided: 15, sold: 12 },
  { month: 'يونيو', granted: 21, divided: 17, sold: 14 }
];

const constructionData = [
  { name: 'مشاريع مكتملة', value: 12, color: '#10b981' },
  { name: 'قيد التنفيذ', value: 18, color: '#3b82f6' },
  { name: 'لم تبدأ', value: 8, color: '#f59e0b' },
  { name: 'متوقفة', value: 3, color: '#ef4444' }
];

const collectionData = [
  { month: 'يناير', collected: 2.5, target: 3.0 },
  { month: 'فبراير', collected: 3.2, target: 3.5 },
  { month: 'مارس', collected: 2.8, target: 3.2 },
  { month: 'أبريل', collected: 4.1, target: 4.0 },
  { month: 'مايو', collected: 3.7, target: 4.2 },
  { month: 'يونيو', collected: 5.2, target: 5.0 }
];

const chartConfig = {
  granted: { label: 'الأراضي الممنوحة', color: '#3b82f6' },
  divided: { label: 'المقسمة', color: '#10b981' },
  sold: { label: 'المباعة', color: '#f59e0b' }
};

export const AssociationLandsChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>حالة الأراضي الشهرية</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={landsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="granted" fill="#3b82f6" name="الأراضي الممنوحة" />
              <Bar dataKey="divided" fill="#10b981" name="المقسمة" />
              <Bar dataKey="sold" fill="#f59e0b" name="المباعة" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>حالة مشاريع البناء</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <PieChart>
              <Pie
                data={constructionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {constructionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>التحصيل المالي مقابل المستهدف</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={collectionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="collected" stroke="#10b981" name="المحصل (مليون ريال)" strokeWidth={2} />
              <Line type="monotone" dataKey="target" stroke="#ef4444" name="المستهدف (مليون ريال)" strokeWidth={2} strokeDasharray="5 5" />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};
