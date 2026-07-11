import { beginnerGuide } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  GraduationCap, FlaskConical, Layers, Droplets, Ruler, ChefHat, Briefcase,
  AlertCircle, Calculator, Zap, TrendingUp, Info
} from "lucide-react";

// ─── C-Class table data ──────────────────────────────────────────────
const cClasses = [
  { grade: "C16/20", cube: 20, color: "bg-blue-100 dark:bg-blue-950/40 border-blue-300 dark:border-blue-800", textColor: "text-blue-800 dark:text-blue-300", use: "أعمال بسيطة: أرصفة، صبّات غير إنشائية" },
  { grade: "C20/25", cube: 25, color: "bg-cyan-100 dark:bg-cyan-950/40 border-cyan-300 dark:border-cyan-800", textColor: "text-cyan-800 dark:text-cyan-300", use: "أساسات المنازل الصغيرة" },
  { grade: "C25/30", cube: 30, color: "bg-emerald-100 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800", textColor: "text-emerald-800 dark:text-emerald-300", use: "⭐ الأكثر شيوعاً في الأردن — أعمدة وجسور وأسقف المباني" },
  { grade: "C30/37", cube: 37, color: "bg-amber-100 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800", textColor: "text-amber-800 dark:text-amber-300", use: "مشاريع كبيرة — جسور، أرضيات صناعية" },
  { grade: "C35/45", cube: 45, color: "bg-orange-100 dark:bg-orange-950/40 border-orange-300 dark:border-orange-800", textColor: "text-orange-800 dark:text-orange-300", use: "منشآت خاصة — أبراج، مواقف طابقية" },
  { grade: "C40/50", cube: 50, color: "bg-red-100 dark:bg-red-950/40 border-red-300 dark:border-red-800", textColor: "text-red-800 dark:text-red-300", use: "خرسانة عالية القوة — مشاريع خاصة جداً" },
];

// ─── Calculation step builder ────────────────────────────────────────
function CalcStep({ num, label, formula, result }: { num: number; label: string; formula: string; result: string }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
        {num}
      </span>
      <div className="flex-1">
        <p className="text-sm font-semibold mb-1">{label}</p>
        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg px-3 py-2 font-mono text-sm text-primary border border-border">
          {formula}
        </div>
        <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-1 font-semibold">= {result}</p>
      </div>
    </div>
  );
}

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
          لو كنت جديداً في مجال مختبر الخرسانة الجاهزة، هذه الصفحة تُعلّمك كل الأساسيات من البداية.
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
                    <span className="font-semibold text-foreground">الأنواع / التفاصيل: </span>
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

      {/* ─── SUPERPLASTICIZER DEEP DIVE ─── */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="w-1.5 h-7 bg-violet-500 rounded-full block shrink-0"></span>
          <Zap className="w-6 h-6 text-violet-500" />
          ما هو المميع (السوبر / Superplasticizer)؟
        </h2>
        <Card className="overflow-hidden">
          <div className="bg-violet-50 dark:bg-violet-950/30 border-b border-violet-200 dark:border-violet-900 px-5 py-4">
            <p className="font-bold text-violet-800 dark:text-violet-300 text-base">
              بكلام بسيط: المميع يجعل الباطون طرياً بدون إضافة ماء — وهذا هو سر قوته.
            </p>
          </div>
          <CardContent className="pt-5 space-y-5">
            {/* How it works */}
            <div>
              <p className="font-semibold mb-3">كيف يعمل المميع؟</p>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  { step: "قبل المميع", desc: "جزيئات الأسمنت تتكتل مع بعضها ويحتجز الماء بينها — الخرسانة تبدو جامدة", color: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900 text-red-800 dark:text-red-300" },
                  { step: "المميع يعمل", desc: "يُحيط المميع بجزيئات الأسمنت ويفصلها عن بعضها — يُحرر الماء المحبوس", color: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-300" },
                  { step: "النتيجة", desc: "نفس كمية الماء + نفس الأسمنت = خرسانة أكثر طراوة وهطول أعلى بكثير", color: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300" },
                ].map((item, i) => (
                  <div key={i} className={`${item.color} border rounded-xl p-4`}>
                    <p className="font-bold text-sm mb-2">{item.step}</p>
                    <p className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why not water */}
            <div className="bg-slate-900 text-white rounded-xl p-5">
              <p className="font-bold mb-3 text-amber-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                لماذا السوبر أفضل من إضافة ماء؟
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-red-400 font-semibold text-sm mb-2">❌ إضافة ماء (خطأ):</p>
                  <ul className="space-y-1.5 text-sm text-slate-300">
                    <li>• ترفع نسبة w/c (ماء/أسمنت)</li>
                    <li>• تُضعف قوة الانضغاط في 28 يوماً</li>
                    <li>• تُخالف المواصفات وتصميم الخلطة</li>
                    <li>• قد تُسبب نتائج كسر منخفضة</li>
                  </ul>
                </div>
                <div>
                  <p className="text-emerald-400 font-semibold text-sm mb-2">✅ إضافة سوبر (صح):</p>
                  <ul className="space-y-1.5 text-sm text-slate-300">
                    <li>• نسبة w/c تبقى ثابتة</li>
                    <li>• القوة لا تتأثر</li>
                    <li>• تُحقق الهطول المطلوب</li>
                    <li>• مسموح بها بإذن المهندس وجرعة محددة</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Practical note */}
            <div className="bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-900 p-4 rounded-xl flex items-start gap-3">
              <Info className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
              <div className="text-sm text-violet-800 dark:text-violet-300 leading-relaxed">
                <strong>في الموقع:</strong> إذا قال مشرف المحطة "الخلطة جامدة — أضيف لها ماء"، الجواب الصحيح هو: "لا ماء بدون إذن المهندس. الحل الهندسي هو جرعة سوبر إضافية بموافقة المهندس وإعادة الخلط". دورك تُقنع بالرقم — قِس الهطول أولاً ثم تواصل مع المهندس.
              </div>
            </div>
          </CardContent>
        </Card>
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

      {/* ─── C-CLASSES SIMPLIFIED ─── */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="w-1.5 h-7 bg-emerald-500 rounded-full block shrink-0"></span>
          <TrendingUp className="w-6 h-6 text-emerald-500" />
          ما معنى C25/30 وC30/37 وبقية الرتب؟
        </h2>
        <Card>
          <CardContent className="pt-6 space-y-5">
            {/* Simple explanation */}
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 rounded-xl p-4">
              <p className="font-bold text-emerald-800 dark:text-emerald-300 text-base mb-2">
                القاعدة البسيطة:
              </p>
              <p className="text-emerald-800 dark:text-emerald-300 text-sm leading-relaxed">
                <strong>C</strong> = Compressive (قوة الانضغاط) |{" "}
                <strong>الرقم الأول</strong> = قوة الأسطوانة بالميجاباسكال |{" "}
                <strong>الرقم الثاني</strong> = قوة المكعب بالميجاباسكال.
                <br />
                في الأردن نستخدم <strong>مكعبات 150mm</strong> فالرقم الثاني هو المرجع لك.
              </p>
            </div>

            {/* Grade table */}
            <div className="space-y-2">
              <p className="font-semibold text-sm mb-3">جدول الرتب الشائعة — ماذا يعني كل رتبة؟</p>
              <div className="grid gap-2">
                {cClasses.map((cls) => (
                  <div key={cls.grade} className={`${cls.color} border rounded-xl p-3.5 flex items-center gap-3`}>
                    <div className="text-center min-w-[70px]">
                      <div className={`text-base font-bold ${cls.textColor}`}>{cls.grade}</div>
                      <div className={`text-xs ${cls.textColor} opacity-80`}>مكعب: {cls.cube} MPa</div>
                    </div>
                    <div className={`text-sm ${cls.textColor} leading-relaxed border-r border-current/20 pr-3 mr-1`}>
                      {cls.use}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MPa meaning */}
            <div className="bg-slate-50 dark:bg-slate-900 border border-border rounded-xl p-4">
              <p className="font-semibold mb-3 text-sm">ما معنى الميجاباسكال (MPa)؟</p>
              <div className="space-y-2 text-sm leading-relaxed">
                <p>1 MPa = 1 نيوتن على كل مليمتر مربع = حوالي 100 غرام على كل مليمتر مربع.</p>
                <p>مكعب C25/30: نريده أن يتحمل <strong>30 نيوتن على كل مم²</strong> قبل أن يُكسر.</p>
                <p className="text-muted-foreground">مساحة المكعب 150mm = 22,500 مم² — فإجمالي القوة = 30 × 22,500 = <strong>675,000 نيوتن = 675 كيلو نيوتن</strong>.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ─── HOW TO READ A CRUSH RESULT ─── */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="w-1.5 h-7 bg-primary rounded-full block shrink-0"></span>
          <Calculator className="w-6 h-6 text-primary" />
          ماذا يعني "كسر 500" أو "كسر 675"؟ — كيف تقرأ نتيجة المكعب
        </h2>
        <Card>
          <CardContent className="pt-6 space-y-5">
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-xl p-4 text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
              <strong>لماذا الناس يقولون "كسر 500" أو "كسر 675"؟</strong><br/>
              المكبس يُظهر قوة الكسر بالكيلو نيوتن (kN) — وهذه القوة الإجمالية على المكعب كاملاً. لكن الرتبة المطلوبة (مثل 30 MPa) تعني القوة على كل مليمتر مربع. لتحويل القراءة لـ MPa تحتاج خطوتين فقط.
            </div>

            {/* Step by step */}
            <div className="space-y-4">
              <p className="font-semibold text-sm">مثال: مكعب 150mm، كسر عند 585 kN، الرتبة C25/30</p>

              <CalcStep
                num={1}
                label="احسب مساحة وجه المكعب (mm²)"
                formula="150 mm × 150 mm = 22,500 mm²"
                result="المساحة = 22,500 مم²"
              />
              <CalcStep
                num={2}
                label="حوّل قوة الكسر من kN إلى N"
                formula="585 kN × 1,000 = 585,000 N"
                result="القوة = 585,000 نيوتن"
              />
              <CalcStep
                num={3}
                label="احسب قوة الانضغاط (MPa)"
                formula="585,000 ÷ 22,500 = 26 MPa"
                result="26 ميجاباسكال"
              />
              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-xl p-4">
                <p className="font-bold text-red-800 dark:text-red-300 text-sm mb-1">الحكم:</p>
                <p className="text-sm text-red-700 dark:text-red-400">
                  26 MPa أقل من الحد المطلوب لـ C25/30 (30 MPa) — المكعب <strong>لم يُحقق الرتبة</strong>. أبلغ المهندس.
                </p>
              </div>
            </div>

            {/* Quick reference table */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="bg-slate-900 text-white px-4 py-2 text-sm font-bold">
                جدول سريع — قراءة المكبس مقابل الرتبة (مكعب 150mm)
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-900">
                    <tr>
                      <th className="text-right px-4 py-2 font-semibold text-slate-600 dark:text-slate-400">قراءة المكبس (kN)</th>
                      <th className="text-right px-4 py-2 font-semibold text-slate-600 dark:text-slate-400">القوة (MPa)</th>
                      <th className="text-right px-4 py-2 font-semibold text-slate-600 dark:text-slate-400">الحكم لـ C25/30</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { kn: "450", mpa: "20", verdict: "❌ فشل", cls: "text-red-600 dark:text-red-400" },
                      { kn: "560", mpa: "24.9", verdict: "❌ فشل (أقل من 30)", cls: "text-red-600 dark:text-red-400" },
                      { kn: "675", mpa: "30.0", verdict: "✓ مقبول (حد أدنى)", cls: "text-amber-600 dark:text-amber-400" },
                      { kn: "750", mpa: "33.3", verdict: "✓ ✓ جيد", cls: "text-emerald-600 dark:text-emerald-400" },
                      { kn: "900", mpa: "40.0", verdict: "✓ ✓ ممتاز", cls: "text-emerald-600 dark:text-emerald-400" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-slate-950" : "bg-slate-50/50 dark:bg-slate-900/50"}>
                        <td className="px-4 py-2.5 font-mono font-bold">{row.kn}</td>
                        <td className="px-4 py-2.5 font-mono text-primary font-bold">{row.mpa}</td>
                        <td className={`px-4 py-2.5 font-semibold ${row.cls}`}>{row.verdict}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 p-3 rounded-lg text-sm text-blue-800 dark:text-blue-300">
              <strong>اختصار مفيد للمكعب 150mm:</strong> MPa = (kN × 1000) ÷ 22500. أو بشكل أسرع: اضرب kN في 0.0444.
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Strength / Timing */}
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

      {/* ─── STEP-BY-STEP CALCULATIONS ─── */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="w-1.5 h-7 bg-primary rounded-full block shrink-0"></span>
          <Calculator className="w-6 h-6 text-primary" />
          الحسابات خطوة بخطوة — أمثلة محسوبة كاملة
        </h2>
        <div className="space-y-4">

          {/* Calc 1: Compressive strength */}
          <Card>
            <CardHeader className="pb-3 bg-slate-50 dark:bg-slate-900 border-b border-border">
              <CardTitle className="text-base">📐 حساب قوة الانضغاط</CardTitle>
              <p className="text-xs text-muted-foreground">مكعب 150mm، المكبس أظهر 720 kN</p>
            </CardHeader>
            <CardContent className="pt-5 space-y-4">
              <CalcStep num={1} label="مساحة وجه المكعب" formula="150 × 150 = 22,500 mm²" result="22,500 مم²" />
              <CalcStep num={2} label="القوة بالنيوتن" formula="720 kN × 1000 = 720,000 N" result="720,000 نيوتن" />
              <CalcStep num={3} label="قوة الانضغاط" formula="720,000 ÷ 22,500 = 32 MPa" result="32 ميجاباسكال" />
              <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 p-3 rounded-lg text-sm text-emerald-800 dark:text-emerald-300">
                ✓ 32 MPa أعلى من 30 MPa المطلوبة لـ C25/30 — المكعب مقبول
              </div>
            </CardContent>
          </Card>

          {/* Calc 2: w/c ratio */}
          <Card>
            <CardHeader className="pb-3 bg-slate-50 dark:bg-slate-900 border-b border-border">
              <CardTitle className="text-base">💧 حساب نسبة الماء/الأسمنت (w/c)</CardTitle>
              <p className="text-xs text-muted-foreground">الخلطة: ماء 175 لتر، أسمنت 350 كيلو</p>
            </CardHeader>
            <CardContent className="pt-5 space-y-4">
              <CalcStep num={1} label="نسبة w/c" formula="175 ÷ 350 = 0.50" result="نسبة 0.50" />
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl text-sm space-y-2">
                <p className="font-semibold">ماذا يعني 0.50؟</p>
                <p className="text-muted-foreground leading-relaxed">
                  لكل كيلو أسمنت، هناك 500 غرام ماء (نصف الوزن). كلما قلّت النسبة (0.40) زادت القوة. كلما زادت النسبة (0.60) قلّت القوة. الحد المعتاد للبناء الإنشائي: 0.40 – 0.55.
                </p>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {[
                    { wc: "< 0.40", note: "عالية القوة جداً — صعبة الصب", color: "text-amber-600 dark:text-amber-400" },
                    { wc: "0.45-0.55", note: "النطاق الطبيعي — متوازن", color: "text-emerald-600 dark:text-emerald-400" },
                    { wc: "> 0.60", note: "قوة منخفضة — خطر", color: "text-red-600 dark:text-red-400" },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className={`font-bold text-sm ${item.color}`}>{item.wc}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Calc 3: Filler */}
          <Card>
            <CardHeader className="pb-3 bg-slate-50 dark:bg-slate-900 border-b border-border">
              <CardTitle className="text-base">🧪 حساب نسبة الفيلر (الغبار) في الركام</CardTitle>
              <p className="text-xs text-muted-foreground">وزن قبل الغسيل 2000g، بعد الغسيل والتجفيف 1950g</p>
            </CardHeader>
            <CardContent className="pt-5 space-y-4">
              <CalcStep num={1} label="الفرق في الوزن (الغبار المغسول)" formula="2000 – 1950 = 50 g" result="50 غرام فيلر" />
              <CalcStep num={2} label="نسبة الفيلر بالمئة" formula="(50 ÷ 2000) × 100 = 2.5%" result="2.5% فيلر" />
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 p-3 rounded-lg text-sm text-amber-800 dark:text-amber-300">
                للفولي والعدسي: الحد المسموح ≤ 1.5%. نتيجة 2.5% تتجاوز الحد — يجب إبلاغ المهندس وربما رفض هذه الدفعة.
              </div>
            </CardContent>
          </Card>

          {/* Calc 4: Density */}
          <Card>
            <CardHeader className="pb-3 bg-slate-50 dark:bg-slate-900 border-b border-border">
              <CardTitle className="text-base">⚖️ حساب كثافة الخرسانة الطرية</CardTitle>
              <p className="text-xs text-muted-foreground">وعاء فارغ 5.2 kg، ممتلئ 17.6 kg، الحجم 5 لتر</p>
            </CardHeader>
            <CardContent className="pt-5 space-y-4">
              <CalcStep num={1} label="وزن الخرسانة فقط" formula="17.6 – 5.2 = 12.4 kg" result="12.4 كيلوغرام" />
              <CalcStep num={2} label="تحويل الحجم لمتر مكعب" formula="5 لتر = 0.005 m³" result="0.005 متر مكعب" />
              <CalcStep num={3} label="الكثافة" formula="12.4 ÷ 0.005 = 2480 kg/m³" result="2480 كغ/م³" />
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 p-3 rounded-lg text-sm text-blue-800 dark:text-blue-300">
                الكثافة الطبيعية: 2300 – 2450 kg/m³. 2480 أعلى قليلاً من المعتاد — قد يعني ركام ثقيل أو محتوى هواء منخفض.
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Mix Design */}
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

            <div className="border border-border rounded-lg overflow-hidden mt-4">
              <div className="bg-slate-900 text-white px-4 py-2 text-sm font-bold">
                مثال: تصميم خلطة C25/30 (لكل 1 متر مكعب)
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-900">
                    <tr>
                      <th className="text-right px-4 py-2 font-semibold text-slate-600 dark:text-slate-400">المادة</th>
                      <th className="text-right px-4 py-2 font-semibold text-slate-600 dark:text-slate-400">الكمية</th>
                      <th className="text-right px-4 py-2 font-semibold text-slate-600 dark:text-slate-400">ملاحظة</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { mat: "أسمنت", qty: "350 kg", note: "300-400 kg حسب الرتبة" },
                      { mat: "ماء", qty: "175 L", note: "w/c = 175÷350 = 0.50" },
                      { mat: "فوليّة (10-20mm)", qty: "600 kg", note: "الهيكل الرئيسي" },
                      { mat: "عدسية (5-10mm)", qty: "300 kg", note: "يملأ فراغات الفولي" },
                      { mat: "سمسمية (2.36-5mm)", qty: "150 kg", note: "اختياري حسب التصميم" },
                      { mat: "رمل", qty: "750 kg", note: "الركام الناعم" },
                      { mat: "مضاف (سوبر / مميع)", qty: "3.5 – 7 L", note: "~1-2% من وزن الأسمنت" },
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
                  q: "ما الفرق بين C25/30 وC30/37؟",
                  a: "الرقمان يمثلان قوة الانضغاط بالميجاباسكال (MPa) عند 28 يوماً: الرقم الأول قوة الأسطوانة والثاني قوة المكعب. C25/30 أقل قوةً من C30/37. في الأردن: C25/30 للأعمال العادية، C30/37 وأعلى للمشاريع الكبيرة والجسور."
                },
                {
                  q: "لماذا نستخدم مكعبات 150mm وليس 100mm؟",
                  a: "المكعب 150mm هو الحجم القياسي حسب BS EN ويُعطي نتيجة أدق لأنه يستوعب حجارة فولي أكبر. المكعب 100mm يُستخدم أحياناً لكن نتيجته أعلى بـ 5-10% من 150mm. في حال استخدام 100mm: MPa = (kN × 1000) ÷ 10,000."
                },
                {
                  q: "لماذا نعالج المكعبات بالماء وليس بالهواء؟",
                  a: "الأسمنت يتصلب عبر تفاعل كيميائي مع الماء (الإماهة). هذا التفاعل يحتاج رطوبة مستمرة. إذا جفّت الخرسانة مبكراً، يتوقف التفاعل وتبقى القوة أقل. المعالجة المائية تضمن استمرار التفاعل وتطور القوة الكاملة حتى 28 يوماً وما بعدها."
                },
                {
                  q: "ماذا يعني MPa وكيف أفهم الرقم؟",
                  a: "MPa = ميجاباسكال = N/mm². 30 MPa تعني 30 نيوتن على كل مليمتر مربع. مكعب 150mm (مساحة 22,500 mm²) عند 30 MPa يتحمل: 30 × 22,500 = 675,000 نيوتن = 675 kN إجمالي قبل الكسر."
                },
                {
                  q: "مشرف الموقع قال 'الخلطة جامدة — أضيف لها ماء'. ماذا أرد؟",
                  a: "قُل له: 'بقيس الهطول أولاً وأشوف الرقم الفعلي. إضافة ماء بدون حساب تُضعف الخرسانة وتُخالف المواصفات. إذا الهطول أقل من المطلوب، أتواصل مع المهندس — الحل الصحيح سوبر إضافي وليس ماء.' ثم نفّذ ما قلت."
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
