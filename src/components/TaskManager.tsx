
import React from 'react';
import { Clock, AlertTriangle, CheckCircle } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  department: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  status: 'pending' | 'overdue' | 'completed';
}

export const TaskManager = () => {
  const tasks: Task[] = [
    {
      id: 1,
      title: 'مراجعة مقايسات مشروع الأندلس',
      department: 'قطاع المشروعات',
      priority: 'high',
      dueDate: '2024-06-05',
      status: 'overdue'
    },
    {
      id: 2,
      title: 'اعتماد مستخلص رقم 3 - مشروع النور',
      department: 'قطاع التنفيذ',
      priority: 'high',
      dueDate: '2024-06-06',
      status: 'pending'
    },
    {
      id: 3,
      title: 'طرح وحدات المرحلة الثانية',
      department: 'القطاع العقاري',
      priority: 'medium',
      dueDate: '2024-06-08',
      status: 'pending'
    },
    {
      id: 4,
      title: 'متابعة تحصيل أقساط مشروع الياسمين',
      department: 'القطاع المالي',
      priority: 'high',
      dueDate: '2024-06-07',
      status: 'pending'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'overdue': return <AlertTriangle className="text-red-500" size={16} />;
      case 'pending': return <Clock className="text-yellow-500" size={16} />;
      case 'completed': return <CheckCircle className="text-green-500" size={16} />;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">إدارة المهام</h3>
      
      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              {getStatusIcon(task.status)}
              <div>
                <h4 className="font-medium text-gray-900">{task.title}</h4>
                <p className="text-sm text-gray-500">{task.department}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                {task.priority === 'high' ? 'عاجل' : task.priority === 'medium' ? 'متوسط' : 'منخفض'}
              </span>
              <span className="text-sm text-gray-500">{task.dueDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
