import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, TestTube, Settings2, Calculator, Search, GraduationCap, HelpCircle, AlertTriangle, Languages } from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { standards, tests } from "@/data/content";

export default function Home() {
  const [search, setSearch] = useState("");
  
  const searchResults = search.trim() === "" ? [] : [
    ...standards.filter(s => 
      s.title.includes(search) || s.code.toLowerCase().includes(search.toLowerCase())
    ).map(s => ({ ...s, type: 'standard', link: '/standards' })),
    ...tests.filter(t => 
      t.title.includes(search) || t.standard.toLowerCase().includes(search.toLowerCase())
    ).map(t => ({ ...t, type: 'test', link: '/tests' }))
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Hero */}
      <section className="bg-slate-900 text-white p-8 rounded-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">دليل فني مختبر الباطون الجاهز</h1>
          <p className="text-slate-300 max-w-2xl text-base leading-relaxed mb-6">
            من الصفر للاحتراف — مرجع شامل لفني مختبر الخرسانة الجاهزة في الأردن. تعلّم الاختبارات والحسابات والمصطلحات وكيف تتصرف في كل موقف ميداني.
          </p>
          
          <div className="relative max-w-md">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input 
              placeholder="ابحث عن اختبار أو معيار أو موضوع..." 
              className="pl-4 pr-10 py-6 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus-visible:ring-primary text-base"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {searchResults.length > 0 && (
              <div className="absolute w-full mt-2 bg-white text-slate-900 rounded-md shadow-xl border border-slate-200 max-h-64 overflow-y-auto z-50">
                {searchResults.map((result, i) => (
                  <Link key={i} href={result.link} className="block px-4 py-3 border-b border-slate-100 hover:bg-slate-50 cursor-pointer last:border-0 text-slate-900">
                    <div className="text-xs font-bold text-primary mb-1">
                      {result.type === 'standard' ? 'معيار' : 'اختبار'}
                    </div>
                    <div className="font-semibold">{result.title}</div>
                    {'code' in result && <div className="text-sm text-slate-500 mt-1">{result.code}</div>}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Start Here — for beginners */}
      <section>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-emerald-500 rounded-full block"></span>
          ابدأ من هنا — للمبتدئ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/beginner">
            <Card className="cursor-pointer hover:border-emerald-400 border-2 border-emerald-200 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-950/20 transition-colors h-full">
              <CardHeader className="pb-2">
                <GraduationCap className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-2" />
                <CardTitle className="text-emerald-800 dark:text-emerald-300">دليل المبتدئ — من الصفر</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-emerald-700 dark:text-emerald-400 leading-relaxed">ما هو المختبر؟ ما دور الفني؟ شرح المواد والهطول والرتبة وتصميم الخلطة بأسلوب مبسط.</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/scenarios">
            <Card className="cursor-pointer hover:border-primary/50 border-2 transition-colors h-full">
              <CardHeader className="pb-2">
                <HelpCircle className="w-8 h-8 text-primary mb-2" />
                <CardTitle>ماذا تفعل لو...؟</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">سيناريوهات حقيقية: الخلطة طرية، الخلطة جامدة، نتائج منخفضة، ميكسر متأخر — خطوات واضحة لكل موقف.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Quick Access */}
      <section>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-primary rounded-full block"></span>
          الأدوات والمراجع
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { href: "/tests", icon: TestTube, label: "دليل الاختبارات", desc: "خطوات مفصّلة لكل اختبار" },
            { href: "/calculations", icon: Calculator, label: "الحاسبات", desc: "احسب القوة والكثافة والفيلر" },
            { href: "/classes", icon: Settings2, label: "الرتب والقوام", desc: "جداول C-classes وS-classes" },
            { href: "/troubleshooting", icon: AlertTriangle, label: "مشاكل الموقع", desc: "تشخيص وحل المشاكل" },
            { href: "/standards", icon: BookOpen, label: "المعايير BS EN", desc: "بنك المواصفات البريطانية" },
            { href: "/dictionary", icon: Languages, label: "القاموس", desc: "مصطلحات عربي-إنجليزي" },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="cursor-pointer hover:border-primary/50 transition-colors h-full">
                <CardHeader className="pb-1 pt-4 px-4">
                  <item.icon className="w-6 h-6 text-primary mb-1" />
                  <CardTitle className="text-sm">{item.label}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Jordan context reminder */}
      <section className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 p-5 rounded-xl">
        <h3 className="font-bold text-amber-900 dark:text-amber-400 mb-2 text-sm">
          🇯🇴 هذا الدليل موجّه لسوق الباطون الجاهز في الأردن
        </h3>
        <p className="text-amber-800 dark:text-amber-500/80 text-sm leading-relaxed">
          المصطلحات المستخدمة هي مصطلحات سوق العمل الأردني: فوليّة، عدسية، سمسمية، ميكسر، شحنة، لودة. المعايير المعتمدة هي BS EN البريطانية المستخدمة في الأردن. الاختبارات والحسابات مشروحة من الصفر لمن لا خبرة لديه.
        </p>
      </section>
    </div>
  );
}
