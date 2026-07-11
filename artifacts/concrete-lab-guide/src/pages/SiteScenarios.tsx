import { siteScenarios } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, CheckCircle2, AlertTriangle, Info } from "lucide-react";

export default function SiteScenarios() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-2">
          <HelpCircle className="text-primary w-8 h-8" />
          ماذا تفعل لو...؟ — سيناريوهات الموقع
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed">
          مواقف حقيقية تواجهها في الميدان — خطوات عملية وأسباب لكل قرار.
        </p>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 p-4 rounded-xl flex items-start gap-3">
        <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800 dark:text-amber-400 leading-relaxed">
          <strong>تذكير أساسي:</strong> دورك كفني هو القياس والتوثيق والإبلاغ. قرار القبول أو الرفض النهائي هو من صلاحية المهندس المسؤول عن المشروع — أنت المرجع الفني وليس صاحب القرار الإداري.
        </p>
      </div>

      {/* Scenarios */}
      <div className="space-y-6">
        {siteScenarios.map((scenario) => (
          <Card key={scenario.id} className="overflow-hidden border-2 hover:border-primary/30 transition-colors">
            <CardHeader className="bg-slate-50 dark:bg-slate-900/50 border-b border-border pb-4">
              <CardTitle className="text-xl flex items-center gap-3">
                <span className="text-3xl">{scenario.icon}</span>
                {scenario.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                <strong className="text-foreground">الموقف: </strong>
                {scenario.situation}
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="px-6 py-4">
                <p className="font-semibold text-sm text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  الخطوات المطلوبة منك:
                </p>
                <div className="space-y-3">
                  {scenario.steps.map((step, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{step.action}</p>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          <span className="font-medium text-foreground/70">لماذا؟ </span>
                          {step.why}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warning */}
              <div className="mx-6 mb-5 flex items-start gap-2 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 p-3 rounded-lg">
                <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                <p className="text-xs text-red-800 dark:text-red-300 leading-relaxed">
                  <strong>انتبه: </strong>
                  {scenario.warning}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* General Rules */}
      <Card className="bg-slate-900 text-white">
        <CardContent className="pt-6 pb-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            القواعد الذهبية للفني في الميدان
          </h3>
          <div className="space-y-3">
            {[
              "قِس دائماً قبل أي حكم — الأرقام أقوى من الانطباعات",
              "سجّل كل شيء: الهطول، الوقت، عدد اللفات، درجة الحرارة، أي ملاحظة",
              "بلّغ المهندس فوراً عند أي انحراف عن المواصفات — لا تتردد ولا تتأخر",
              "لا تُضف ماء بدون موافقة المهندس وحساب دقيق — هذا خط أحمر",
              "التوثيق الأمين هو حمايتك القانونية والمهنية",
              "إذا شككت في صحة مكعباتك: وثّق الشك وأبلغ — لا تُخفيه",
              "الاختبار الخاطئ يعني نتيجة خاطئة — راجع خطوات التحضير قبل التشكيك في الخرسانة"
            ].map((rule, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <span className="text-primary font-bold shrink-0 mt-0.5">◆</span>
                <span className="text-slate-200 leading-relaxed">{rule}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference: What affects strength */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">المؤثرات الرئيسية على قوة الخرسانة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { factor: "نسبة الماء/الأسمنت (w/c)", impact: "الأعلى تأثيراً — كلما زادت النسبة قلّت القوة", dir: "neg" },
              { factor: "المعالجة المائية", impact: "معالجة ناقصة = قوة أقل بكثير من الحقيقية", dir: "neg" },
              { factor: "كمية الأسمنت", impact: "أسمنت أكثر = قوة أعلى (حتى حد معين)", dir: "pos" },
              { factor: "نظافة الركام (SE)", impact: "الطين والفيلر الزائد يُقللان القوة", dir: "neg" },
              { factor: "الدمك والرص", impact: "دمك ناقص = فراغات = قوة أقل", dir: "neg" },
              { factor: "درجة الحرارة", impact: "الحر الشديد يُسرع الجمود ويضرّ القوة البعيدة", dir: "neg" },
              { factor: "عمر الاختبار", impact: "الخرسانة تزداد قوةً مع الوقت (28 يوماً هو المعيار)", dir: "pos" },
              { factor: "نوع الأسمنت", impact: "الأسمنت سريع الصلابة يُعطي قوة 7 أيام أعلى", dir: "info" },
            ].map((item, i) => (
              <div key={i} className={`text-sm p-3 rounded-lg border ${
                item.dir === 'neg' ? 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900' :
                item.dir === 'pos' ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900' :
                'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700'
              }`}>
                <p className="font-semibold mb-1">{item.factor}</p>
                <p className={`text-xs leading-relaxed ${
                  item.dir === 'neg' ? 'text-red-700 dark:text-red-300' :
                  item.dir === 'pos' ? 'text-emerald-700 dark:text-emerald-300' :
                  'text-muted-foreground'
                }`}>{item.impact}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick scenario accordion */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">أسئلة سريعة أخرى</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 pb-0">
          <Accordion type="single" collapsible>
            {[
              {
                q: "كسرت مكعباً قبل موعده بالخطأ — ماذا أفعل؟",
                a: "سجّل الحادثة في التقرير فوراً بصدق (التاريخ الفعلي للكسر وليس الموعد المقرر). أبلغ المهندس. لا يمكن الاعتماد على هذه النتيجة كنتيجة 28 يوماً — يُحدد المهندس التصرف المناسب (انتظار مكعبات بديلة أو فحص الهيكل)."
              },
              {
                q: "ميكسر وصل بدون بيانات شحنة (Delivery Note) — ماذا أفعل؟",
                a: "لا تأخذ عينات ولا تصنع مكعبات قبل توفر بيانات الشحنة — لأن المعلومات الأساسية (رقم الشحنة، الرتبة، وقت الخلط) غير موثقة. أبلغ مشرف الموقع واطلب التواصل مع المصنع للحصول على بيانات الشحنة."
              },
              {
                q: "انكسر مكعب بشكل غريب (الكسر غير منتظم) — هل النتيجة صحيحة؟",
                a: "شكل الكسر يُشير لسبب الضعف: كسر بطولين متعامدين (كسر نظيف ✓)، كسر جانبي أو في ركن (قد يعني عدم محورية أو سطح غير مستوٍ)، كسر انفلاقي (يعني سطح زائد الاستواء أو مشكلة في ألواح المكبس). وثّق شكل الكسر مع النتيجة وأبلغ المهندس في حالات الكسر غير الطبيعي."
              },
              {
                q: "وجدت في حوض المعالجة مكعباً بدون ملصق — ماذا أفعل؟",
                a: "هذا موقف صعب. لا تخمّن الشحنة التي ينتمي لها. سجّل في السجل أنك وجدته بدون هوية. أبلغ المهندس. في الحالات القياسية: نتيجة المكعب المجهول لا يمكن ربطها بشحنة محددة وتُعد غير صالحة رسمياً."
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`scenario-q-${i}`}>
                <AccordionTrigger className="text-right text-sm font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-muted-foreground pb-2">{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
