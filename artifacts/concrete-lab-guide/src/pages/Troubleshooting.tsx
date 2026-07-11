import { troubleshooting } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, Eye, Lightbulb, ShieldCheck, Wrench } from "lucide-react";

const severityConfig = {
  high: { label: "خطورة عالية", color: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300", border: "border-l-red-500" },
  medium: { label: "خطورة متوسطة", color: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300", border: "border-l-amber-500" },
  low: { label: "خطورة منخفضة", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300", border: "border-l-blue-500" },
};

export default function Troubleshooting() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-2">
          <AlertTriangle className="text-primary w-8 h-8" />
          مشاكل الموقع واستكشاف الأخطاء
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          أبرز المشاكل التي تواجهها في موقع الصب — الأسباب، ماذا تفعل خطوة بخطوة، ولماذا تهم.
        </p>
      </div>

      <div className="grid gap-5 mt-4">
        {troubleshooting.map((item, i) => {
          const sev = severityConfig[item.severity as keyof typeof severityConfig] ?? severityConfig.medium;
          return (
            <Card key={i} className={`border-l-4 ${sev.border} overflow-hidden`}>
              <CardHeader className="bg-slate-50 dark:bg-slate-900/50 border-b border-border pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive shrink-0" />
                    {item.issue}
                  </CardTitle>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full w-fit ${sev.color}`}>
                    {sev.label}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <Accordion type="single" collapsible defaultValue="whatToDo">

                  {/* Symptoms */}
                  <AccordionItem value="symptoms" className="border-b px-6">
                    <AccordionTrigger className="hover:no-underline font-semibold text-slate-700 dark:text-slate-300 text-sm">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-slate-400" />
                        كيف تعرف أن المشكلة موجودة؟
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm leading-relaxed pb-3 text-muted-foreground">{item.symptoms}</p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Cause & Why Matters */}
                  <AccordionItem value="cause" className="border-b px-6">
                    <AccordionTrigger className="hover:no-underline font-semibold text-slate-700 dark:text-slate-300 text-sm">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-amber-500" />
                        لماذا تحدث؟ ولماذا تهم؟
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pb-3">
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3">
                          <p className="text-xs font-semibold text-muted-foreground mb-1">السبب:</p>
                          <p className="text-sm leading-relaxed">{item.cause}</p>
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-3">
                          <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">لماذا يهم؟</p>
                          <p className="text-sm leading-relaxed text-amber-800 dark:text-amber-300">{item.whyMatters}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* What To Do */}
                  <AccordionItem value="whatToDo" className="border-b px-6">
                    <AccordionTrigger className="hover:no-underline font-semibold text-slate-700 dark:text-slate-300 text-sm">
                      <div className="flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-primary" />
                        ماذا تفعل الآن؟
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ol className="space-y-3 pb-3">
                        {item.whatToDo.map((step, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                              {j + 1}
                            </span>
                            <span className="text-sm leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Prevention */}
                  <AccordionItem value="prevention" className="px-6 border-b-0">
                    <AccordionTrigger className="hover:no-underline font-semibold text-slate-700 dark:text-slate-300 text-sm">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        كيف تمنعها مستقبلاً؟
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 p-3 rounded-lg text-sm leading-relaxed mb-3">
                        {item.prevention}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-slate-900 text-white p-6 rounded-xl mt-4">
        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-primary" />
          قاعدة ذهبية
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          عند الشك في نتيجة اختبار قوة ضغط، لا تعتمد على مكعب واحد. تحقق من العينات الأخرى في نفس العمر، وراجع سجلات الخلطة والهطول، وتأكد من محورية المكبس ونظافة الألواح قبل إصدار الحكم. إذا لزم الأمر يمكن اللجوء لتقييم القوة في الموقع (BS EN 13791).
        </p>
      </div>
    </div>
  );
}
