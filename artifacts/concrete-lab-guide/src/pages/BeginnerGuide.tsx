import { beginnerGuide } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GraduationCap, FlaskConical, Layers, Droplets, Ruler, ChefHat, Briefcase, AlertCircle } from "lucide-react";

export default function BeginnerGuide() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="bg-gradient-to-l from-primary/5 to-primary/20 border border-primary/20 rounded-xl p-6">
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-2">
          <GraduationCap className="text-primary w-8 h-8 shrink-0" />
          دليل المبتدئ — من الصفر للاحتراف
        </h1>
        <p className="text-muted-foreground leading-relaxed text-lg">
          لو كنت جديداً في مجال مختبر الخرسانة الجاهزة، هذه الصفحة تُعلّمك كل الأساسيات التي تحتاجها قبل أن تدخل الموقع أول مرة.
        </p>
      </div>

      {/* What is the Lab */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="w-1.5 h-7 bg-primary rounded-full block shrink-0"></span>
          <FlaskConical className="w-6 h-6 text-primary" />
          {beginnerGuide.whatIsLab.title}
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-base leading-relaxed mb-6 text-foreground font-medium">
              {beginnerGuide.whatIsLab.intro}
            </p>
            <div className="grid gap-3">
              {beginnerGuide.whatIsLab.points.map((point, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Technician Role */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="w-1.5 h-7 bg-primary rounded-full block shrink-0"></span>
          <Briefcase className="w-6 h-6 text-primary" />
          {beginnerGuide.technicianRole.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">مهام يومية نموذجية</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {beginnerGuide.technicianRole.daily.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{task}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
          <Card className="bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-amber-900 dark:text-amber-400">المهارات المطلوبة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {beginnerGuide.technicianRole.skills.map((skill, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-amber-500 mt-1 shrink-0">◆</span>
                    <span className="leading-relaxed text-amber-900 dark:text-amber-300">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Materials */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="w-1.5 h-7 bg-primary rounded-full block shrink-0"></span>
          <Layers className="w-6 h-6 text-primary" />
          {beginnerGuide.materials.title}
        </h2>
        <div className="space-y-4">
          {beginnerGuide.materials.items.map((item, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 px-5 py-3 border-b border-border">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-base">{item.name}</h3>
                  <span className="text-xs text-muted-foreground">{item.arabic}</span>
                </div>
              </div>
              <CardContent className="pt-4 space-y-2">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-primary">الدور: </span>
                  {item.role}
                </p>
                {item.types && (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">الأنواع: </span>
                    {item.types}
                  </p>
                )}
                {item.caution && (
                  <div className="flex items-start gap-2 bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300 p-2 rounded-md text-xs mt-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    {item.caution}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Slump Explained */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="w-1.5 h-7 bg-primary rounded-full block shrink-0"></span>
          <Ruler className="w-6 h-6 text-primary" />
          {beginnerGuide.slumpExplained.title}
        </h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
              <p className="font-bold text-lg text-primary">{beginnerGuide.slumpExplained.simple}</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
              <p className="text-sm leading-relaxed">
                <span className="font-semibold">تشبيه مبسّط: </span>
                {beginnerGuide.slumpExplained.analogy}
              </p>
            </div>
            <div>
              <p className="font-semibold mb-3">لماذا الهطول مهم؟</p>
              <div className="space-y-2">
                {beginnerGuide.slumpExplained.whyImportant.map((point, i) => (
                  <div key={i} className={`flex items-start gap-2 text-sm p-3 rounded-lg ${
                    i === 0 ? 'bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300' :
                    i === 1 ? 'bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300' :
                    'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300'
                  }`}>
                    <span className="shrink-0 mt-0.5">{i === 0 ? '⬇️' : i === 1 ? '⬆️' : '✅'}</span>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 p-3 rounded-lg text-sm">
              <span className="font-semibold">في الأردن: </span>
              {beginnerGuide.slumpExplained.inJordan}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Strength Explained */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="w-1.5 h-7 bg-primary rounded-full block shrink-0"></span>
          <Droplets className="w-6 h-6 text-primary" />
          {beginnerGuide.strengthExplained.title}
        </h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
              <p className="font-bold text-base text-primary">{beginnerGuide.strengthExplained.simple}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-2">7</div>
                <div className="text-xs font-bold mb-1">أيام</div>
                <div className="text-xs text-muted-foreground leading-relaxed">مؤشر مبكر — حوالي 65-70% من القوة النهائية</div>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-4 text-center border-2 border-emerald-200 dark:border-emerald-900">
                <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">28</div>
                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-1">يوماً</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed">النتيجة الرسمية — تُقرر القبول والرفض</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-2">90</div>
                <div className="text-xs font-bold mb-1">يوماً</div>
                <div className="text-xs text-muted-foreground leading-relaxed">للتحقق في حالات الشك النادرة</div>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 p-3 rounded-lg text-sm">
              <span className="font-semibold">في الأردن: </span>
              {beginnerGuide.strengthExplained.inJordan}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Mix Design Explained */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="w-1.5 h-7 bg-primary rounded-full block shrink-0"></span>
          <ChefHat className="w-6 h-6 text-primary" />
          {beginnerGuide.mixDesign.title}
        </h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
              <p className="text-base leading-relaxed font-medium">{beginnerGuide.mixDesign.simple}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="font-semibold text-sm">من يُصمم الخلطة؟</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{beginnerGuide.mixDesign.whoDesigns}</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-sm">دورك كفني مختبر</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{beginnerGuide.mixDesign.techRole}</p>
              </div>
            </div>

            {/* Example mix table */}
            <div className="border border-border rounded-lg overflow-hidden mt-4">
              <div className="bg-slate-900 text-white px-4 py-2 text-sm font-bold">
                مثال: تصميم خلطة C25/30 (لكل 1 متر مكعب)
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-900">
                    <tr>
                      <th className="text-right px-4 py-2 font-semibold text-slate-600 dark:text-slate-400">المادة</th>
                      <th className="text-right px-4 py-2 font-semibold text-slate-600 dark:text-slate-400">الكمية التقريبية</th>
                      <th className="text-right px-4 py-2 font-semibold text-slate-600 dark:text-slate-400">ملاحظة</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { mat: "أسمنت", qty: "350 kg", note: "يتراوح 300-400 kg حسب الرتبة" },
                      { mat: "ماء", qty: "175 L", note: "w/c = 0.50" },
                      { mat: "فوليّة (10-20mm)", qty: "600 kg", note: "الهيكل الرئيسي" },
                      { mat: "عدسية (5-10mm)", qty: "300 kg", note: "يملأ فراغات الفولي" },
                      { mat: "سمسمية (2.36-5mm)", qty: "150 kg", note: "اختياري حسب التصميم" },
                      { mat: "رمل", qty: "750 kg", note: "الركام الناعم" },
                      { mat: "مضاف (سوبر)", qty: "3.5 L", note: "حوالي 1% من وزن الأسمنت" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50/50 dark:bg-slate-900/50'}>
                        <td className="px-4 py-2.5 font-medium">{row.mat}</td>
                        <td className="px-4 py-2.5 font-mono text-primary font-bold">{row.qty}</td>
                        <td className="px-4 py-2.5 text-muted-foreground text-xs">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Accordion */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="w-1.5 h-7 bg-primary rounded-full block shrink-0"></span>
          أسئلة شائعة للمبتدئ
        </h2>
        <Card>
          <CardContent className="pt-4 pb-0">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "ما الفرق بين الخرسانة والباطون؟",
                  a: "في الأردن وعموم الشام، 'الباطون' هو الاسم العامي للخرسانة (Concrete). هي نفس المادة — الباطون الجاهز هو Ready-Mix Concrete وهو الباطون الذي يُصنع في مصنع متخصص ويُوزَّع بميكسرات للمواقع."
                },
                {
                  q: "ما الفرق بين الرتبة C25/30 وC30/37؟",
                  a: "الرقمان يمثلان قوة الانضغاط بالميجاباسكال (MPa) عند 28 يوماً: الرقم الأول قوة الأسطوانة (Cylinder) والثاني قوة المكعب (Cube). C25/30 أقل قوةً من C30/37. في الأردن: C25/30 للأعمال العادية، C30/37 وأعلى للمشاريع الكبيرة والجسور."
                },
                {
                  q: "لماذا نستخدم مكعبات 150mm وليس 100mm؟",
                  a: "المكعب 150mm هو الحجم القياسي حسب BS EN ويُعطي نتيجة أكثر دقة لأنه يستوعب حجارة فولي أكبر حجماً. المكعب 100mm يُستخدم أحياناً للمقارنة لكن نتيجته ترتفع بنسبة حوالي 5-10% عن 150mm. حسب معظم المواصفات: المكعب المرجعي هو 150mm."
                },
                {
                  q: "لماذا نعالج المكعبات بالماء وليس بالهواء؟",
                  a: "الأسمنت يتصلب عن طريق تفاعل كيميائي مع الماء (يُسمى الإماهة / Hydration). هذا التفاعل يحتاج رطوبة مستمرة لأسابيع. إذا جفّت الخرسانة مبكراً، يتوقف التفاعل ويبقى الأسمنت غير متفاعل بالكامل وتنتهي القوة أقل بكثير. المعالجة المائية تضمن استمرار التفاعل وتطور القوة الكاملة."
                },
                {
                  q: "ماذا يعني MPa وكيف أفهم الرقم؟",
                  a: "MPa هي ميجاباسكال — وحدة قياس الضغط. 1 MPa = 1 N/mm² = حوالي 10 كغ على كل مليمتر مربع. مكعب C25/30 يعني: عند الانهيار تحمّل ضغطاً يعادل 30 نيوتن (حوالي 3 كغ) على كل ميليمتر مربع من سطحه. مكعب 150mm مساحة سطحه 22,500mm² — فيتحمل قوة إجمالية تقارب 675,000 نيوتن = 675 كيلونيوتن."
                },
                {
                  q: "لماذا قد تختلف نتائج المكعبات بين اليوم 7 واليوم 28؟",
                  a: "الأسمنت يُطوّر قوته تدريجياً مع الوقت. عند 7 أيام عادةً تكون القوة 60-70% من قوة 28 يوماً. النسبة تختلف حسب نوع الأسمنت والإضافات. المكعب ذو النتيجة المنخفضة عند 7 أيام قد يُعطي نتيجة مقبولة عند 28 يوماً — لذلك لا يُحكم بناءً على نتيجة 7 أيام وحدها."
                }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
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
      </section>
    </div>
  );
}
