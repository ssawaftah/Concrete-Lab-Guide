import { tests, jordanAggregates } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TestTube, Target, PenTool, CheckCircle2, AlertTriangle, Layers, Info } from "lucide-react";

export default function TestsGuide() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-2">
          <TestTube className="text-primary w-8 h-8" />
          دليل الاختبارات خطوة بخطوة
        </h1>
        <p className="text-muted-foreground">
          الخطوات الميدانية الدقيقة لتنفيذ اختبارات الخرسانة الطرية والصلبة حسب المواصفات.
        </p>
      </div>

      <Card className="bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900 mt-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2 text-amber-900 dark:text-amber-500">
            <Info className="w-5 h-5" />
            {jordanAggregates.title}
          </CardTitle>
          <CardDescription className="text-amber-800 dark:text-amber-400">
            {jordanAggregates.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {jordanAggregates.items.map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-amber-100 dark:border-amber-900">
                <strong className="block text-amber-900 dark:text-amber-400 mb-1">{item.name}</strong>
                <span className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-amber-800 dark:text-amber-400/80 leading-relaxed font-semibold">
            {jordanAggregates.note}
          </p>
        </CardContent>
      </Card>

      <div className="space-y-8 mt-8">
        {tests.map((test) => (
          <Card key={test.id} className="overflow-hidden border-2 hover:border-primary/20 transition-colors" id={test.id}>
            <CardHeader className="bg-slate-50 dark:bg-slate-900/50 border-b border-border pb-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-xl text-slate-900 dark:text-slate-100">{test.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mt-1 flex items-start gap-2">
                    <Target className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    {test.purpose}
                  </p>
                </div>
                <Badge variant="outline" className="w-fit font-mono bg-white dark:bg-slate-950 text-base py-1 px-3">
                  {test.standard}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full" defaultValue="steps">
                
                {test.equipment && (
                  <AccordionItem value="equipment" className="border-b px-6">
                    <AccordionTrigger className="hover:no-underline font-semibold text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <PenTool className="w-4 h-4 text-slate-400" />
                        المعدات المطلوبة
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-4">
                        {test.equipment.map((eq, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                            {eq}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                )}

                <AccordionItem value="steps" className="border-b px-6">
                  <AccordionTrigger className="hover:no-underline font-semibold text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-slate-400" />
                      خطوات العمل
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ol className="space-y-4 pb-4">
                      {test.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-sm leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                {test.classification && (
                  <AccordionItem value="classification" className="border-b px-6">
                    <AccordionTrigger className="hover:no-underline font-semibold text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        التصنيف / القيم النموذجية
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pb-4 text-sm bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
                        {test.classification.map((item, i) => (
                          <li key={i} className="text-right leading-relaxed font-semibold">{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                )}

                {(test.commonErrors || test.notes) && (
                  <AccordionItem value="errors" className="px-6 border-b-0">
                    <AccordionTrigger className="hover:no-underline font-semibold text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-destructive" />
                        ملاحظات وأخطاء شائعة
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-destructive/10 text-destructive p-4 rounded-md text-sm leading-relaxed mb-4">
                        {test.commonErrors || test.notes}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )}
                
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
