import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, TestTube, Settings2, Calculator, Search } from "lucide-react";
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
      <section className="bg-slate-900 text-white p-8 rounded-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">دليل فني مختبر الخرسانة الجاهزة</h1>
          <p className="text-slate-300 max-w-2xl text-lg leading-relaxed mb-8">
            مرجعك المهني السريع في الميدان. يحتوي على المعايير البريطانية (BS EN)، خطوات الاختبارات، الحسابات، ودليل الأخطاء الشائعة لضمان الدقة والموثوقية في عملك.
          </p>
          
          <div className="relative max-w-md">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input 
              placeholder="ابحث عن معيار (مثال: BS EN 206) أو اختبار..." 
              className="pl-4 pr-10 py-6 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus-visible:ring-primary text-lg"
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

      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-primary rounded-full block"></span>
          الوصول السريع
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/standards">
            <Card className="hover-elevate cursor-pointer hover:border-primary/50 transition-colors h-full">
              <CardHeader className="pb-2">
                <BookOpen className="w-8 h-8 text-primary mb-2" />
                <CardTitle>المعايير (BS EN)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">بنك المعايير البريطانية للخرسانة والمجاميع والأسمنت.</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/tests">
            <Card className="hover-elevate cursor-pointer hover:border-primary/50 transition-colors h-full">
              <CardHeader className="pb-2">
                <TestTube className="w-8 h-8 text-primary mb-2" />
                <CardTitle>دليل الاختبارات</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">خطوات تفصيلية لاختبارات الهطول، الضغط، والمزيد.</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/classes">
            <Card className="hover-elevate cursor-pointer hover:border-primary/50 transition-colors h-full">
              <CardHeader className="pb-2">
                <Settings2 className="w-8 h-8 text-primary mb-2" />
                <CardTitle>الرتب والقوام</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">جداول رتب قوة الانضغاط ودرجات قابلية التشغيل.</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/calculations">
            <Card className="hover-elevate cursor-pointer hover:border-primary/50 transition-colors h-full">
              <CardHeader className="pb-2">
                <Calculator className="w-8 h-8 text-primary mb-2" />
                <CardTitle>الحسابات</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">معادلات حساب القوة، الكثافة، ونسبة الماء/الأسمنت.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
      
      <section className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 p-6 rounded-xl">
        <h3 className="font-bold text-amber-900 dark:text-amber-400 mb-2 flex items-center gap-2">
          <Settings2 className="w-5 h-5" />
          تذكير مهني
        </h3>
        <p className="text-amber-800 dark:text-amber-500/80 text-sm leading-relaxed">
          الدقة في تسجيل قراءات الاختبارات وتوقيتها هي الفاصل بين قبول الشحنة ورفضها. تأكد دائماً من معايرة مكبس الضغط ونظافة مخروط الهطول قبل أي اختبار.
        </p>
      </section>
    </div>
  );
}
