
import React from 'react';
import { Clock, AlertTriangle, CheckCircle, User } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  department: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  status: 'pending' | 'overdue' | 'completed';
  assignedTo?: string;
}

export const TaskManager = () => {
  const tasks: Task[] = [
    {
      id: 1,
      title: 'مراجعة مقايسات مشروع الأندلس',
      department: 'قطاع المشروعات',
      priority: 'high',
      dueDate: '2024-06-05',
      status: 'overdue',
      assignedTo: 'م. أحمد محمد'
    },
    {
      id: 2,
      title: 'اعتماد مستخلص رقم 3 - مشروع النور',
      department: 'قطاع التنفيذ',
      priority: 'high',
      dueDate: '2024-06-06',
      status: 'pending',
      assignedTo: 'م. فاطمة أحمد'
    },
    {
      id: 3,
      title: 'طرح وحدات المرحلة الثانية',
      department: 'القطاع العقاري',
      priority: 'medium',
      dueDate: '2024-06-08',
      status: 'pending',
      assignedTo: 'أ. محمد سالم'
    },
    {
      id: 4,
      title: 'متابعة تحصيل أقساط مشروع الياسمين',
      department: 'القطاع المالي',
      priority: 'high',
      dueDate: '2024-06-07',
      status: 'pending',
      assignedTo: 'أ. عائشة علي'
    },
    {
      id: 5,
      title: 'مراجعة عقد جمعية الأندلس التعاونية',
      department: 'قطاع التعاون',
      priority: 'medium',
      dueDate: '2024-06-10',
      status: 'pending',
      assignedTo: 'أ. سارة أحمد'
    },
    {
      id: 6,
      title: 'متابعة قضية تحصيل العميل أحمد محمد',
      department: 'القطاع القانوني',
      priority: 'high',
      dueDate: '2024-06-09',
      status: 'pending',
      assignedTo: 'المستشار خالد عبدالله'
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

  const getDepartmentColor = (department: string) => {
    const colors = {
      'قطاع المشروعات': 'bg-blue-100 text-blue-700',
      'قطاع التنفيذ': 'bg-green-100 text-green-700',
      'القطاع العقاري': 'bg-purple-100 text-purple-700',
      'القطاع المالي': 'bg-orange-100 text-orange-700',
      'قطاع التعاون': 'bg-indigo-100 text-indigo-700',
      'القطاع القانوني': 'bg-gray-100 text-gray-700'
    };
    return colors[department as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">إدارة المهام</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-red-600 font-medium">
            {tasks.filter(t => t.status === 'overdue').length} متأخرة
          </span>
          <span className="text-sm text-yellow-600 font-medium">
            {tasks.filter(t => t.status === 'pending').length} معلقة
          </span>
        </div>
      </div>
      
      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3 flex-1">
              {getStatusIcon(task.status)}
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">{task.title}</h4>
                <div className="flex items-center space-x-2 mt-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDepartmentColor(task.department)}`}>
                    {task.department}
                  </span>
                  {task.assignedTo && (
                    <div className="flex items-center space-x-1">
                      <User size={12} className="text-gray-400" />
                      <span className="text-xs text-gray-500">{task.assignedTo}</span>
                    </div>
                  )}
                </div>
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
