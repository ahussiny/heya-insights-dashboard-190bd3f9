import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Home, 
  FolderOpen, 
  Settings, 
  Building, 
  DollarSign, 
  Users, 
  Scale, 
  Handshake, 
  MapPin, 
  UserCheck, 
  FileText, 
  BarChart3, 
  Calendar, 
  AlertTriangle, 
  CheckCircle 
} from 'lucide-react';

export const AppDocumentationPage = () => {
  const sections = [
    {
      title: "لوحة التحكم الرئيسية",
      icon: Home,
      description: "نظرة عامة شاملة على أداء جميع قطاعات الهيئة",
      features: [
        "إحصائيات عامة رئيسية: إجمالي المشاريع، الوحدات المباعة، الأراضي المباعة، إجمالي الإيرادات",
        "إحصائيات تفصيلية: المهام العاجلة، معدل الحضور، القضايا النشطة، الجمعيات التعاونية",
        "لوحة التنبيهات والمهام العاجلة",
        "الرسوم البيانية والمخططات التفاعلية",
        "إدارة المهام والأنشطة اليومية",
        "الأنشطة الحديثة مع تصنيفها حسب النوع (نجاح، تحذير، خطأ، معلومات)",
        "ملخص الأداء الشهري للمشاريع والعقارات والتحصيل المالي"
      ]
    },
    {
      title: "الإدارة المركزية للمشروعات والاقراض",
      icon: FolderOpen,
      description: "تخطيط ودراسة المشاريع وعمل المقايسات",
      features: [
        "إحصائيات المشاريع: المشاريع قيد التخطيط، المقايسات المكتملة، ميزانية المشاريع، المشاريع المتأخرة",
        "تقارير مفصلة للمشاريع",
        "مخططات بيانية لأداء المشاريع",
        "جدول المشاريع الحالية مع تفاصيل: اسم المشروع، الحالة، الميزانية بالجنيه المصري، تاريخ البدء، نسبة التقدم",
        "نظام تتبع حالات المشاريع: قيد التخطيط، مقايسة، مكتمل",
        "شريط تقدم مرئي لكل مشروع"
      ]
    },
    {
      title: "الإدارة المركزية لشئون التنفيذ",
      icon: Settings,
      description: "متابعة تنفيذ المشاريع وإدارة المستخلصات",
      features: [
        "إحصائيات التنفيذ: المشاريع تحت التنفيذ، المستخلصات المعتمدة، قيمة المستخلصات، المقاولين النشطين",
        "قائمة شاملة بالمستخلصات مع تفاصيل كاملة",
        "دورة عمل المستخلص (Timeline): قطاع التعاون ← المكتب الفني ← نائب رئيس الهيئة ← رئيس الهيئة ← المالية ← الصرف",
        "معلومات المستخلص: اسم المشروع، رقم المستخلص، اسم المقاول، التاريخ، القيمة بالجنيه المصري",
        "نظام بحث متقدم: البحث باسم المشروع، اسم المقاول، رقم المستخلص، التاريخ",
        "تتبع حالة كل مستخلص عبر مراحل الاعتماد المختلفة",
        "تقارير تفصيلية للتنفيذ",
        "مخططات بيانية لأداء التنفيذ"
      ]
    },
    {
      title: "الإدارة المركزية للشئون العقارية",
      icon: Building,
      description: "إدارة الوحدات السكنية والتجارية والأراضي",
      features: [
        "إحصائيات العقارات: الوحدات المطروحة، الوحدات المباعة، الأراضي المباعة، متوسط السعر",
        "إدارة الوحدات السكنية والتجارية",
        "إدارة الأراضي والقطع",
        "تتبع عمليات البيع والشراء",
        "تقارير مفصلة للعقارات",
        "مخططات بيانية لأداء العقارات",
        "جدول الوحدات المتاحة مع تفاصيل: الرقم، النوع، المساحة، السعر بالجنيه المصري، الحالة"
      ]
    },
    {
      title: "الإدارة المركزية للشئون المالية",
      icon: DollarSign,
      description: "التحصيل من العملاء بأنظمة التقسيط والسداد الكامل",
      features: [
        "إحصائيات مالية: إجمالي التحصيلات، الأقساط المحصلة، نمو التحصيلات، المتأخرات",
        "الموازنة الحالية مع تفاصيل: إجمالي الموازنة المعتمدة، إجمالي المنصرف، المتبقي، نسبة التنفيذ",
        "نسب تنفيذ بنود الصرف: المرتبات والأجور، التشغيل والصيانة، المشاريع الإنشائية، التسويق والإعلان، الخدمات القانونية، تقنية المعلومات",
        "تقارير مالية شاملة",
        "مخططات بيانية للأداء المالي",
        "جدول العمليات المالية الحديثة: رقم العملية، العميل، نوع الدفع، المبلغ بالجنيه المصري، التاريخ",
        "أشرطة تقدم ملونة حسب حالة الإنفاق (أخضر، برتقالي، أحمر)"
      ]
    },
    {
      title: "الشئون الإدارية",
      icon: Users,
      description: "حضور وانصراف الموظفين وتقييم الأداء",
      features: [
        "إحصائيات الموظفين: إجمالي الموظفين، معدل الحضور، تقييم الأداء، الموظف المثالي",
        "تقارير شاملة للموظفين",
        "مخططات بيانية لأداء الموظفين",
        "جدول تقارير الموظفين: اسم الموظف، القسم، معدل الحضور، تقييم الأداء، الحالة",
        "نظام تصنيف الأداء: ممتاز، جيد جداً، جيد",
        "متابعة الحضور والانصراف",
        "تقييم الأداء الدوري"
      ]
    },
    {
      title: "الإدارة المركزية للإدارات القانونية",
      icon: Scale,
      description: "متابعة القضايا القانونية والاستشارات",
      features: [
        "إحصائيات قانونية: القضايا النشطة، القضايا المكتملة، الاستشارات القانونية، معدل النجاح",
        "إدارة القضايا القانونية",
        "تتبع حالات القضايا",
        "تقارير قانونية مفصلة",
        "مخططات بيانية للأداء القانوني",
        "جدول القضايا الحالية مع التفاصيل الكاملة"
      ]
    },
    {
      title: "الإدارة المركزية لشئون التعاون",
      icon: Handshake,
      description: "إدارة الجمعيات التعاونية والشراكات",
      features: [
        "إحصائيات التعاون: الجمعيات النشطة، المشاريع المشتركة، الشراكات الجديدة، معدل النجاح",
        "إدارة الجمعيات التعاونية",
        "متابعة المشاريع المشتركة",
        "تقارير التعاون المفصلة",
        "مخططات بيانية لأداء التعاون",
        "جدول الجمعيات التعاونية النشطة"
      ]
    },
    {
      title: "أراضي الجمعيات",
      icon: MapPin,
      description: "إدارة أراضي الجمعيات التعاونية",
      features: [
        "إحصائيات الأراضي: الأراضي المتاحة، الأراضي المباعة، القيمة الإجمالية بالجنيه المصري، العمولات",
        "إدارة قطع الأراضي",
        "تتبع عمليات البيع والشراء",
        "تقارير أراضي الجمعيات",
        "مخططات بيانية لأداء أراضي الجمعيات",
        "جدول الأراضي المتاحة مع التفاصيل"
      ]
    },
    {
      title: "الإدارة المركزية لشئون مكتب رئيس مجلس الإدارة",
      icon: UserCheck,
      description: "إدارة شئون مكتب رئيس مجلس الإدارة",
      features: [
        "إحصائيات المكتب: الاجتماعات المعقودة، القرارات المتخذة، المهام المنجزة، المتابعات",
        "إدارة جدول أعمال رئيس مجلس الإدارة",
        "متابعة تنفيذ القرارات",
        "تقارير مكتب رئيس مجلس الإدارة",
        "مخططات بيانية لأداء المكتب"
      ]
    }
  ];

  const commonFeatures = [
    {
      title: "نظام التقارير",
      icon: FileText,
      description: "جميع الشاشات تحتوي على:",
      items: [
        "تقارير تفصيلية قابلة للتخصيص",
        "إمكانية التصدير بصيغ مختلفة",
        "فلترة البيانات حسب التاريخ والفترة",
        "تقارير دورية (يومية، أسبوعية، شهرية، سنوية)"
      ]
    },
    {
      title: "المخططات البيانية",
      icon: BarChart3,
      description: "عرض البيانات بصرياً:",
      items: [
        "مخططات دائرية (Pie Charts)",
        "مخططات عمودية (Bar Charts)",
        "مخططات خطية للاتجاهات",
        "مخططات تفاعلية مع إمكانية التكبير والتصغير"
      ]
    },
    {
      title: "إدارة المهام",
      icon: Calendar,
      description: "نظام شامل لإدارة المهام:",
      items: [
        "إضافة وتعديل وحذف المهام",
        "تصنيف المهام حسب الأولوية",
        "تتبع حالة المهام (جديدة، قيد التنفيذ، مكتملة)",
        "إشعارات للمهام العاجلة"
      ]
    },
    {
      title: "نظام التنبيهات",
      icon: AlertTriangle,
      description: "تنبيهات ذكية للأحداث المهمة:",
      items: [
        "تنبيهات المهام العاجلة",
        "تنبيهات المواعيد المهمة",
        "تنبيهات المتأخرات المالية",
        "تنبيهات انتهاء صلاحية المستندات"
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">دليل نظام ERP الشامل</h1>
        <p className="text-xl text-gray-600">شرح تفصيلي لجميع محتويات وشاشات النظام</p>
      </div>

      {/* نظرة عامة على النظام */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <CheckCircle className="h-8 w-8 text-green-600" />
            نظرة عامة على النظام
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              نظام ERP شامل لإدارة جميع العمليات في الهيئة العامة للإسكان والتعمير، يضم 10 إدارات مركزية متخصصة 
              مع أدوات متقدمة للتحليل والتقارير وإدارة المهام.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900">المميزات الأساسية</h4>
                <p className="text-blue-700 text-sm">واجهة عربية متكاملة مع دعم RTL</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-900">العملة الموحدة</h4>
                <p className="text-green-700 text-sm">جميع المبالغ بالجنيه المصري</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold text-orange-900">تقارير شاملة</h4>
                <p className="text-orange-700 text-sm">تقارير تفاعلية وقابلة للتصدير</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold text-purple-900">مخططات بيانية</h4>
                <p className="text-purple-700 text-sm">عرض مرئي للبيانات والإحصائيات</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* شرح الإدارات المختلفة */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">الإدارات المركزية</h2>
        {sections.map((section, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <section.icon className="h-6 w-6 text-blue-600" />
                {section.title}
              </CardTitle>
              <p className="text-gray-600 mt-2">{section.description}</p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {section.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* المميزات المشتركة */}
      <div className="space-y-6 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">المميزات المشتركة في جميع الشاشات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commonFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-3">
                  <feature.icon className="h-6 w-6 text-green-600" />
                  {feature.title}
                </CardTitle>
                <p className="text-gray-600">{feature.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* دورة عمل المستخلصات */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Settings className="h-8 w-8 text-blue-600" />
            دورة عمل المستخلصات (خاصة بالإدارة المركزية لشئون التنفيذ)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 mb-6">
              نظام متكامل لتتبع المستخلصات عبر 6 مراحل أساسية:
            </p>
            <div className="flex flex-wrap items-center justify-between bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
              {[
                'قطاع التعاون',
                'المكتب الفني', 
                'نائب رئيس الهيئة',
                'رئيس الهيئة',
                'المالية',
                'الصرف'
              ].map((stage, index, array) => (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-sm font-medium mt-2 text-center max-w-20">{stage}</p>
                  </div>
                  {index < array.length - 1 && (
                    <div className="w-8 h-1 bg-blue-300 mx-2"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">معلومات المستخلص</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• اسم المشروع</li>
                  <li>• رقم المستخلص</li>
                  <li>• اسم المقاول</li>
                  <li>• تاريخ المستخلص</li>
                  <li>• قيمة المستخلص بالجنيه المصري</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-900 mb-2">نظام البحث المتقدم</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• البحث باسم المشروع</li>
                  <li>• البحث باسم المقاول</li>
                  <li>• البحث برقم المستخلص</li>
                  <li>• البحث بالتاريخ</li>
                  <li>• فلترة متعددة المعايير</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* معلومات إضافية */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-2xl text-center">معلومات تقنية إضافية</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">تصميم متجاوب</h4>
              <p className="text-blue-700 text-sm">يعمل على جميع الأجهزة والشاشات</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h4 className="font-bold text-green-900 mb-2">أمان عالي</h4>
              <p className="text-green-700 text-sm">نظام حماية متقدم للبيانات</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <h4 className="font-bold text-orange-900 mb-2">سرعة في الأداء</h4>
              <p className="text-orange-700 text-sm">استجابة سريعة وتحميل فوري</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};