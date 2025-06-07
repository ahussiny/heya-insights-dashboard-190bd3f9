
import React from 'react';
import { AlertTriangle, Clock, Bell, ExclamationTriangle } from 'lucide-react';

export const AlertsPanel = () => {
  const alerts = [
    {
      id: 1,
      title: 'مهمة عاجلة - مراجعة مقايسات مشروع الأندلس',
      department: 'قطاع المشروعات',
      priority: 'عاجل',
      dueDate: 'اليوم',
      type: 'urgent'
    },
    {
      id: 2,
      title: 'تأخر في سداد قسط - عميل أحمد محمد',
      department: 'القطاع المالي',
      priority: 'عالي',
      dueDate: 'منذ 3 أيام',
      type: 'overdue'
    },
    {
      id: 3,
      title: 'انتهاء صلاحية عقد مقاول شركة البناء المتقدم',
      department: 'القطاع القانوني',
      priority: 'متوسط',
      dueDate: 'خلال أسبوع',
      type: 'warning'
    },
    {
      id: 4,
      title: 'موعد استحقاق دفعة جمعية الأندلس التعاونية',
      department: 'قطاع التعاون',
      priority: 'عالي',
      dueDate: 'خلال يومين',
      type: 'reminder'
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'urgent':
        return <ExclamationTriangle className="text-red-500" size={20} />;
      case 'overdue':
        return <AlertTriangle className="text-red-600" size={20} />;
      case 'warning':
        return <Clock className="text-yellow-500" size={20} />;
      case 'reminder':
        return <Bell className="text-blue-500" size={20} />;
      default:
        return <Bell className="text-gray-500" size={20} />;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'urgent':
        return 'border-l-red-500 bg-red-50';
      case 'overdue':
        return 'border-l-red-600 bg-red-50';
      case 'warning':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'reminder':
        return 'border-l-blue-500 bg-blue-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'عاجل':
        return 'bg-red-100 text-red-700';
      case 'عالي':
        return 'bg-orange-100 text-orange-700';
      case 'متوسط':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">التنبيهات والمهام العاجلة</h3>
        <span className="text-sm text-gray-500">{alerts.length} تنبيه نشط</span>
      </div>
      
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className={`border-l-4 p-4 rounded-lg ${getAlertColor(alert.type)}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                {getAlertIcon(alert.type)}
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 text-sm">{alert.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{alert.department}</p>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(alert.priority)}`}>
                  {alert.priority}
                </span>
                <span className="text-xs text-gray-500">{alert.dueDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
