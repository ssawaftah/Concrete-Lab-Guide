import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings2, AlertTriangle, CheckCircle, XCircle, Info } from "lucide-react";

// ─── Jordan "كسر" system data ──────────────────────────────────────────────
const jordanCrushes = [
  {
    label: "كسر 200",
    kgcm2: 200,
    mpa: 19.6,
    minKN: 441,
    euClass: "C16/20",
    color: "bg-blue-50 dark:bg-blue-950/40 border-blue-300 dark:border-blue-700",
    badge: "bg-blue-600",
    textColor: "text-blue-900 dark:text-blue-200",
    use: "صبّات غير إنشائية — ردم مسلح، خرسانة النظافة (أساس التسوية)، أرصفة خفيفة.",
    acceptedBy: "نادراً ما يُطلبه مشروع إنشائي — وإن طُلب فالحد الأدنى 441 kN على المكبس.",
    day7min: 309,
    day28min: 441,
    typical28: "441–550",
    warn: "لا تُستخدم لأعمدة أو أسقف أو أسس إنشائية."
  },
  {
    label: "كسر 250",
    kgcm2: 250,
    mpa: 24.5,
    minKN: 551,
    euClass: "C20/25",
    color: "bg-cyan-50 dark:bg-cyan-950/40 border-cyan-300 dark:border-cyan-700",
    badge: "bg-cyan-600",
    textColor: "text-cyan-900 dark:text-cyan-200",
    use: "أساسات المنازل الصغيرة (منازل حديقة)، بلاطات أرضيات مستودعات خفيفة، جدران استنادية بسيطة.",
    acceptedBy: "الحد الأدنى المقبول فردياً: 441 kN (21 MPa). المتوسط المطلوب من 3 مكعبات: ≥ 653 kN (29 MPa).",
    day7min: 385,
    day28min: 551,
    typical28: "551–700",
    warn: "المشاريع التي تشترط BS EN 206 تتطلب نتيجة متوسط ≥ 29 MPa من 3 مكعبات."
  },
  {
    label: "كسر 300",
    kgcm2: 300,
    mpa: 29.4,
    minKN: 662,
    euClass: "C25/30",
    color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700",
    badge: "bg-emerald-600",
    textColor: "text-emerald-900 dark:text-emerald-200",
    use: "⭐ الأكثر طلباً في الأردن — أعمدة، جوائز، أسقف، أسس إنشائية في المباني السكنية والتجارية.",
    acceptedBy: "الحد الأدنى المقبول فردياً: 585 kN (26 MPa). المتوسط من 3 مكعبات: ≥ 765 kN (34 MPa).",
    day7min: 462,
    day28min: 662,
    typical28: "662–900",
    warn: "أكثر الكسور شيوعاً — تأكد دائماً أن المتوسط يتجاوز الحد."
  },
  {
    label: "كسر 350",
    kgcm2: 350,
    mpa: 34.3,
    minKN: 772,
    euClass: "C28/35 – C30/37",
    color: "bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700",
    badge: "bg-amber-600",
    textColor: "text-amber-900 dark:text-amber-200",
    use: "مشاريع كبيرة — جسور، أرضيات صناعية ثقيلة، مواقف سيارات طابقية، أعمدة أبراج.",
    acceptedBy: "الحد الأدنى المقبول فردياً: 675 kN (30 MPa). المتوسط من 3 مكعبات: ≥ 878 kN (39 MPa).",
    day7min: 540,
    day28min: 772,
    typical28: "772–1000",
    warn: "غالباً يُصاحبه متطلبات خاصة: نسبة ماء/أسمنت ≤ 0.45، سوبر إجباري."
  },
  {
    label: "كسر 400",
    kgcm2: 400,
    mpa: 39.2,
    minKN: 882,
    euClass: "C32/40 – C35/45",
    color: "bg-orange-50 dark:bg-orange-950/40 border-orange-300 dark:border-orange-700",
    badge: "bg-orange-600",
    textColor: "text-orange-900 dark:text-orange-200",
    use: "منشآت هندسية خاصة — أبراج تجارية، جسور شاهقة، خزانات ضغط، مشاريع بنية تحتية حكومية.",
    acceptedBy: "الحد الأدنى المقبول فردياً: 787 kN (35 MPa). المتوسط من 3 مكعبات: ≥ 990 kN (44 MPa).",
    day7min: 617,
    day28min: 882,
    typical28: "882–1100",
    warn: "يتطلب مراقبة مستمرة، سوبر عالي الأداء، وعادةً إشراف مهندس خرسانة متخصص."
  },
  {
    label: "كسر 450",
    kgcm2: 450,
    mpa: 44.1,
    minKN: 992,
    euClass: "C37/45 – C40/50",
    color: "bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-700",
    badge: "bg-red-600",
    textColor: "text-red-900 dark:text-red-200",
    use: "خرسانة عالية القوة — مشاريع استثنائية فقط. نادر في السوق الأردني العام.",
    acceptedBy: "الحد الأدنى فردياً: ≥ 900 kN. المتوسط: ≥ 1100 kN. يتطلب خبرة عالية.",
    day7min: 694,
    day28min: 992,
    typical28: "992+",
    warn: "لا تُنفَّذ إلا بتصميم خلطة معتمد من مختبر متخصص وإشراف كامل."
  },
];

// ─── Slump classes data ──────────────────────────────────────────────────────
const slumpClasses = [
  {
    cls: "S1", range: "10 – 40 mm", arabic: "جامدة / صلبة",
    color: "bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600",
    badge: "bg-slate-500",
    where: "أرصفة طرق بالدك الميكانيكي، خرسانة مجاري مقوّسة",
    why: "تُدمك بالهزازات القوية — الهطول المنخفض يعني أقل ماء = أعلى قوة",
    jordan: "نادرة في الأردن — يحتاج موقعها هزازات ميكانيكية متخصصة",
    check: "الميكسر أو القالب على الموقع يُخبرك بالهطول المطلوب في تذكرة التسليم",
    problem: "لو هطولها أعلى من 40mm — أبلغ المهندس، قد تكون المياه زادت"
  },
  {
    cls: "S2", range: "50 – 90 mm", arabic: "متوسطة القوام",
    color: "bg-blue-50 dark:bg-blue-950/40 border-blue-300 dark:border-blue-700",
    badge: "bg-blue-600",
    where: "أساسات، جدران استنادية، أعمدة بتسليح خفيف",
    why: "قوام كافٍ للتدفق داخل القالب لكن غير سائل جداً",
    jordan: "شائعة في أساسات المنازل البسيطة",
    check: "حدود القبول: 50–90mm. لو قياسك 45 أو 95 — أعد القياس مرة ثانية",
    problem: "لو أقل من 50: إضافة سوبر (بعد موافقة المهندس). لو أكثر من 90: بلّغ فوراً"
  },
  {
    cls: "S3", range: "100 – 150 mm", arabic: "جيدة السيولة",
    color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700",
    badge: "bg-emerald-600",
    where: "⭐ الأكثر شيوعاً — أسقف، جوائز، أعمدة بتسليح متوسط لعالٍ",
    why: "تتدفق جيداً حول التسليح وتملأ القوالب بسهولة مع هزازة يد عادية",
    jordan: "تمثل 70-80% من طلبات الأردن — هذه الفئة ستتعامل معها يومياً",
    check: "الهطول المستهدف في التذكرة غالباً 120mm ± 30mm",
    problem: "لو أقل من 100: تحقق من زمن الانتظار — ربما تأخر التسليم. لو أكثر من 150: تحقق من الماء المضاف"
  },
  {
    cls: "S4", range: "160 – 210 mm", arabic: "عالية السيولة",
    color: "bg-violet-50 dark:bg-violet-950/40 border-violet-300 dark:border-violet-700",
    badge: "bg-violet-600",
    where: "أعمدة ضيقة، جدران شديدة التسليح، مناطق يصعب وصول الهزازة",
    why: "السيولة العالية تضمن وصول الخرسانة لكل أجزاء القالب بدون فراغات",
    jordan: "تُستخدم في المشاريع الكبيرة والتجارية — دائماً مع سوبر وليس ماءً زائداً",
    check: "يُصاحبها دائماً سوبر بلاستيسايزر — لو رأيت S4 بدون سوبر في تصميم الخلطة فهذا خطأ",
    problem: "لو هطولها أكثر من 210mm: احتمال عالٍ لإضافة ماء غير مصرح — وثّق وأبلغ"
  },
  {
    cls: "S5", range: "أكثر من 210 mm", arabic: "ذاتية الرص (SCC)",
    color: "bg-primary/5 border-primary/30",
    badge: "bg-primary",
    where: "خرسانة ذاتية الرص (Self-Compacting Concrete) — عناصر سابقة الصب، جدران رقيقة جداً",
    why: "تتدفق بوزنها وتملأ القوالب كاملاً بدون هزاز — لكن تحتاج تصميم خلطة خاص",
    jordan: "نادرة في المصانع العادية — مصانع متخصصة فقط. لا تتعامل معها قبل التدريب المتخصص",
    check: "اختبار SCC يختلف عن الهطول العادي — يستخدم 'Slump Flow' بصفيحة مستوية وقياس قطر الانتشار",
    problem: "لا تستخدم مخروط الهطول العادي — النتيجة ستكون غير صحيحة"
  },
];

// ─── Full BS EN C-class table ────────────────────────────────────────────────
const euClasses = [
  { eu: "C8/10",   cyl: 8,  cube: 10,  note: "خرسانة نظافة فقط" },
  { eu: "C12/15",  cyl: 12, cube: 15,  note: "ملء، ردم مسلح خفيف" },
  { eu: "C16/20",  cyl: 16, cube: 20,  note: "أرصفة، قواعد بسيطة" },
  { eu: "C20/25",  cyl: 20, cube: 25,  note: "كسر 250 — أساسات منازل" },
  { eu: "C25/30",  cyl: 25, cube: 30,  note: "⭐ كسر 300 — المباني السكنية" },
  { eu: "C28/35",  cyl: 28, cube: 35,  note: "كسر 350 — جوائز ثقيلة" },
  { eu: "C30/37",  cyl: 30, cube: 37,  note: "كسر 350 — مشاريع كبيرة" },
  { eu: "C32/40",  cyl: 32, cube: 40,  note: "كسر 400 — أبراج وجسور" },
  { eu: "C35/45",  cyl: 35, cube: 45,  note: "كسر 450 — منشآت خاصة" },
  { eu: "C40/50",  cyl: 40, cube: 50,  note: "خرسانة عالية القوة" },
  { eu: "C45/55",  cyl: 45, cube: 55,  note: "خرسانة فائقة القوة" },
  { eu: "C50/60",  cyl: 50, cube: 60,  note: "منشآت هندسية خاصة جداً" },
];

export default function Classes() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="bg-gradient-to-l from-primary/5 to-primary/20 border border-primary/20 rounded-xl p-6">
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-2">
          <Settings2 className="text-primary w-8 h-8 shrink-0" />
          الرتب ودرجات القوام — الدليل الشامل
        </h1>
        <p className="text-muted-foreground leading-relaxed text-lg">
          ما هو كسر 250؟ وما الفرق بينه وبين كسر 300؟ وكيف أعرف إذا كانت النتيجة مقبولة؟ — كل إجاباتك هنا.
        </p>
      </div>

      <Tabs defaultValue="jordan" className="mt-2">
        <TabsList className="grid w-full grid-cols-3 max-w-lg">
          <TabsTrigger value="jordan">🇯🇴 الكسور (الأردن)</TabsTrigger>
          <TabsTrigger value="consistence">درجات القوام</TabsTrigger>
          <TabsTrigger value="eu">الرتب الأوروبية</TabsTrigger>
        </TabsList>

        {/* ═══════════════ TAB 1: JORDAN CRUSHES ═══════════════ */}
        <TabsContent value="jordan" className="mt-6 space-y-6">

          {/* Intro explanation */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-xl p-4">
                <p className="font-bold text-amber-900 dark:text-amber-200 text-base mb-2">
                  ما معنى "كسر 300" أو "كسر 250"؟
                </p>
                <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
                  في الأردن، يُعبَّر عن قوة الخرسانة بوحدة <strong>كيلوغرام على سنتيمتر مربع (kg/cm²)</strong> — وهذا ما يُسمى "الكسر".
                  كسر 300 يعني: المكعب يجب أن يتحمل <strong>300 كيلوغرام على كل سنتيمتر مربع</strong> قبل أن ينكسر.
                  هذه التسمية مختلفة عن التسمية الأوروبية (C25/30) لكنها تصف نفس الشيء.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 text-center border border-border">
                  <div className="text-2xl font-bold text-primary mb-1">كسر 300</div>
                  <div className="text-muted-foreground">= 29.4 ميجاباسكال</div>
                  <div className="text-muted-foreground">= C25/30</div>
                  <div className="text-xs mt-2 font-semibold text-emerald-700 dark:text-emerald-400">الأكثر طلباً في الأردن</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-border">
                  <p className="font-semibold mb-2 text-center">معادلة التحويل</p>
                  <div className="space-y-1.5 text-xs text-muted-foreground font-mono text-center">
                    <p>MPa = kg/cm² ÷ 10.2</p>
                    <p>كسر 300 ÷ 10.2 = 29.4 MPa</p>
                    <p className="border-t border-border pt-1.5">kg/cm² = MPa × 10.2</p>
                    <p>30 MPa × 10.2 = 306 kg/cm²</p>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 text-center border border-border">
                  <p className="font-semibold mb-2 text-sm">لقراءة المكبس (CTM)</p>
                  <div className="text-xs text-muted-foreground space-y-1.5 font-mono">
                    <p>مساحة المكعب 150mm:</p>
                    <p className="text-base font-bold text-primary">22,500 mm²</p>
                    <p className="border-t border-border pt-1.5">MPa = (kN × 1000) ÷ 22,500</p>
                    <p>أو: MPa = kN × 0.0444</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Acceptability criteria */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                كيف أحكم على نتيجة الكسر؟ — معيار القبول
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 rounded-xl p-4">
                  <p className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">✓ شرط النتيجة الفردية (مكعب واحد)</p>
                  <p className="text-emerald-700 dark:text-emerald-400 leading-relaxed">
                    يجب ألا تقل نتيجة أي مكعب منفرد عن: <br/>
                    <strong>القوة المطلوبة − 4 MPa</strong><br/>
                    مثال كسر 300 (29.4 MPa): الحد الأدنى = 25.4 MPa ≈ 572 kN
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-xl p-4">
                  <p className="font-bold text-blue-800 dark:text-blue-300 mb-2">✓ شرط المتوسط (3 مكعبات)</p>
                  <p className="text-blue-700 dark:text-blue-400 leading-relaxed">
                    متوسط كل 3 نتائج يجب أن يكون: <br/>
                    <strong>≥ القوة المطلوبة + 4 MPa</strong><br/>
                    مثال كسر 300: المتوسط ≥ 33.4 MPa ≈ 752 kN
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 border border-border rounded-xl p-4">
                <p className="font-semibold mb-2">نتيجة 7 أيام — هل تُعتمد؟</p>
                <p className="text-muted-foreground leading-relaxed">
                  النتيجة الرسمية دائماً عند <strong>28 يوماً</strong> — هذه هي التي تُقرر القبول والرفض.
                  نتيجة 7 أيام هي <em>مؤشر مبكر فقط</em>: عادةً تكون 65–75% من قوة الـ28 يوم.
                  لو كانت نتيجة 7 أيام أقل بكثير من المتوقع — أبلغ المهندس فوراً ولا تنتظر.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Each crush detailed */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">الكسور الشائعة — تفصيل كامل لكل رتبة</h2>
            {jordanCrushes.map((c) => (
              <Card key={c.label} className={`border-2 ${c.color}`}>
                <CardContent className="pt-5">
                  <div className="flex flex-wrap items-start gap-3 mb-4">
                    <span className={`${c.badge} text-white text-lg font-bold px-4 py-1.5 rounded-xl`}>{c.label}</span>
                    <span className={`text-sm font-semibold ${c.textColor} bg-white/60 dark:bg-black/20 px-3 py-1.5 rounded-lg border border-current/20`}>
                      {c.kgcm2} kg/cm² = {c.mpa} MPa = {c.euClass}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold mb-1">📍 يُستخدم في:</p>
                        <p className={`leading-relaxed ${c.textColor}`}>{c.use}</p>
                      </div>
                      <div className={`rounded-lg p-3 bg-white/50 dark:bg-black/20 border border-current/20`}>
                        <p className="font-semibold mb-1">⚠️ تنبيه:</p>
                        <p className={`text-xs leading-relaxed ${c.textColor}`}>{c.warn}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="border border-border rounded-xl overflow-hidden bg-white dark:bg-slate-950">
                        <div className="bg-slate-900 text-white px-3 py-1.5 text-xs font-bold">
                          قراءة المكبس (CTM) — مكعب 150mm
                        </div>
                        <table className="w-full text-xs">
                          <tbody>
                            <tr className="border-b border-border">
                              <td className="px-3 py-2 text-muted-foreground">الحد الأدنى (28 يوم)</td>
                              <td className="px-3 py-2 font-bold font-mono text-red-600 dark:text-red-400">{c.day28min} kN</td>
                            </tr>
                            <tr className="border-b border-border">
                              <td className="px-3 py-2 text-muted-foreground">المؤشر عند 7 أيام</td>
                              <td className="px-3 py-2 font-bold font-mono text-amber-600 dark:text-amber-400">≥ {c.day7min} kN</td>
                            </tr>
                            <tr>
                              <td className="px-3 py-2 text-muted-foreground">النطاق المتوقع عادةً</td>
                              <td className="px-3 py-2 font-bold font-mono text-emerald-600 dark:text-emerald-400">{c.typical28} kN</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="text-xs text-muted-foreground leading-relaxed border border-border rounded-lg p-3">
                        <p className="font-semibold text-foreground mb-1">معيار القبول:</p>
                        {c.acceptedBy}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick reference table */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">جدول مرجعي سريع — قراءة المكبس مقابل الكسر</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-right px-4 py-2.5 font-semibold">الكسر (الأردن)</th>
                      <th className="text-right px-4 py-2.5 font-semibold">الرتبة الأوروبية</th>
                      <th className="text-right px-4 py-2.5 font-semibold">القوة (MPa)</th>
                      <th className="text-right px-4 py-2.5 font-semibold">الحد الأدنى (kN)</th>
                      <th className="text-right px-4 py-2.5 font-semibold">مؤشر 7 أيام (kN)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jordanCrushes.map((c, i) => (
                      <tr key={c.label} className={i % 2 === 0 ? "bg-white dark:bg-slate-950" : "bg-slate-50 dark:bg-slate-900"}>
                        <td className="px-4 py-2.5 font-bold">{c.label}</td>
                        <td className="px-4 py-2.5 font-mono text-muted-foreground text-xs">{c.euClass}</td>
                        <td className="px-4 py-2.5 font-mono font-bold text-primary">{c.mpa}</td>
                        <td className="px-4 py-2.5 font-mono font-bold text-red-600 dark:text-red-400">≥ {c.day28min}</td>
                        <td className="px-4 py-2.5 font-mono font-bold text-amber-600 dark:text-amber-400">≥ {c.day7min}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* What to do if fail */}
          <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2 text-red-800 dark:text-red-200">
                <XCircle className="w-5 h-5" />
                ماذا تفعل إذا فشل الكسر؟
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { step: "1", title: "وثّق فوراً", desc: "سجّل رقم المكعب، الشحنة، الرتبة المطلوبة، النتيجة الفعلية، والفرق. لا تُبلّغ شفهياً — اكتب." },
                  { step: "2", title: "أبلغ مسؤولك المباشر", desc: "رسالة واضحة: 'مكعب الشحنة رقم X، رتبة كسر 300، النتيجة Y kN، أقل من الحد المطلوب بـ Z kN.'" },
                  { step: "3", title: "انتظر قرار المهندس", desc: "لا تمحُ السجل ولا تُغيّر النتيجة. قرار المقبول والمرفوض للمهندس فقط." },
                  { step: "4", title: "خيارات المهندس", desc: "اختبار بالمطرقة، سحب عينات من الهيكل، أو اختبار الحمولة. في أسوأ الأحوال: هدم أو تدعيم — لكن هذا قراره." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3 bg-white dark:bg-slate-950 rounded-xl p-3 border border-border">
                    <span className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ═══════════════ TAB 2: CONSISTENCE ═══════════════ */}
        <TabsContent value="consistence" className="mt-6 space-y-6">

          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <p className="font-bold text-base mb-2">ما هو القوام (Consistence)؟</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  القوام يصف <strong>مدى سيولة الخرسانة</strong> — بمعنى هل هي جامدة (صعبة الصب) أم سائلة (سهلة التدفق)؟
                  وُضعت أنظمة الهطول S1-S5 لتصنيف هذه السيولة بشكل موحد ومقبول بين المختبرات والمشاريع.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-3 text-sm text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-3 border border-border">
                  <div className="text-2xl mb-1">📏</div>
                  <p className="font-semibold">كيف تُقاس؟</p>
                  <p className="text-xs text-muted-foreground mt-1">بمخروط الهطول الفولاذي — الارتفاع 300mm والقطر 100/200mm</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-3 border border-border">
                  <div className="text-2xl mb-1">⏱️</div>
                  <p className="font-semibold">متى تُقاس؟</p>
                  <p className="text-xs text-muted-foreground mt-1">خلال 5 دقائق من أخذ العينة — قبل 15 دقيقة من الخلط</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-3 border border-border">
                  <div className="text-2xl mb-1">📋</div>
                  <p className="font-semibold">من يحدد الدرجة؟</p>
                  <p className="text-xs text-muted-foreground mt-1">مهندس الموقع — مكتوبة في تذكرة التسليم وتصميم الخلطة</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {slumpClasses.map((s) => (
              <Card key={s.cls} className={`border-2 ${s.color}`}>
                <CardContent className="pt-5">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`${s.badge} text-white text-xl font-bold px-4 py-1.5 rounded-xl min-w-[60px] text-center`}>{s.cls}</span>
                    <div>
                      <span className="font-bold text-base">{s.arabic}</span>
                      <span className="text-muted-foreground text-sm mr-2">— هطول {s.range}</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2.5">
                      <div>
                        <p className="font-semibold text-xs text-muted-foreground mb-1">📍 تُستخدم في</p>
                        <p className="leading-relaxed">{s.where}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-xs text-muted-foreground mb-1">🔬 لماذا؟</p>
                        <p className="leading-relaxed text-muted-foreground">{s.why}</p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <p className="font-semibold text-xs text-blue-800 dark:text-blue-300 mb-1">🇯🇴 في الأردن</p>
                        <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed">{s.jordan}</p>
                      </div>
                    </div>
                    <div className="space-y-2.5">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-border rounded-lg p-3">
                        <p className="font-semibold text-xs mb-1">✅ كيف تتحقق؟</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{s.check}</p>
                      </div>
                      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="font-semibold text-xs text-amber-800 dark:text-amber-300 mb-1">⚠️ لو الهطول خارج المدى</p>
                        <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">{s.problem}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Slump tolerance table */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">هامش التسامح المسموح في الهطول</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-right px-4 py-2.5">الهطول المستهدف</th>
                      <th className="text-right px-4 py-2.5">هامش القبول (±)</th>
                      <th className="text-right px-4 py-2.5">مثال: مستهدف 120mm</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { target: "أقل من 40 mm", tol: "± 10 mm", ex: "—" },
                      { target: "40 – 100 mm", tol: "± 20 mm", ex: "—" },
                      { target: "100 – 200 mm", tol: "± 30 mm", ex: "90 – 150 mm مقبول" },
                      { target: "أكثر من 200 mm", tol: "± 30 mm", ex: "—" },
                    ].map((r, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-slate-950" : "bg-slate-50 dark:bg-slate-900"}>
                        <td className="px-4 py-2.5 font-mono">{r.target}</td>
                        <td className="px-4 py-2.5 font-bold text-primary font-mono">{r.tol}</td>
                        <td className="px-4 py-2.5 text-muted-foreground text-xs">{r.ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Slump fail scenarios */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2 text-red-800 dark:text-red-200">
                  <XCircle className="w-4 h-4" />
                  الهطول أقل من المطلوب — ماذا تفعل؟
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-2 text-red-700 dark:text-red-400">
                <p>1. أعد قياس الهطول مرة ثانية للتأكد.</p>
                <p>2. تحقق من وقت الانتظار — هل تأخر التسليم؟</p>
                <p>3. لا تُضف ماءً بنفسك أبداً — تواصل مع المهندس.</p>
                <p>4. الحل الصحيح: سوبر بلاستيسايزر إضافي (بأمر المهندس فقط).</p>
                <p>5. إذا تجاوزت 45 دقيقة على الخلط — ارفضها أو استشر المهندس.</p>
              </CardContent>
            </Card>
            <Card className="border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2 text-amber-800 dark:text-amber-200">
                  <AlertTriangle className="w-4 h-4" />
                  الهطول أعلى من المطلوب — ماذا تفعل؟
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-2 text-amber-700 dark:text-amber-400">
                <p>1. هذا أخطر من الهطول المنخفض — قد يعني ماء زائداً.</p>
                <p>2. تحقق مما إذا أُضيف ماء في الميكسر أو من الموقع.</p>
                <p>3. وثّق النتيجة كاملاً مع الملاحظة.</p>
                <p>4. أبلغ المهندس وانتظر قراره — قد يرفض الشحنة.</p>
                <p>5. في حال شك بالنزاهة: سجّل ملاحظة "suspected water addition".</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ═══════════════ TAB 3: EU CLASSES ═══════════════ */}
        <TabsContent value="eu" className="mt-6 space-y-6">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-sm leading-relaxed">
                <p className="font-bold mb-2">كيف تقرأ الرمز الأوروبي؟</p>
                <p className="text-muted-foreground">
                  <strong>C25/30</strong>: الـ C تعني Compressive (انضغاطي). 25 = قوة الأسطوانة (MPa). 30 = قوة المكعب (MPa).
                  في الأردن نستخدم <strong>مكعبات 150mm</strong> — فالرقم المرجعي لك دائماً هو <strong>الرقم الثاني</strong> (قوة المكعب).
                </p>
              </div>

              <div className="border border-border rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-right px-4 py-2.5 font-semibold">الرتبة (BS EN)</th>
                      <th className="text-right px-4 py-2.5 font-semibold">قوة الأسطوانة</th>
                      <th className="text-right px-4 py-2.5 font-semibold">قوة المكعب</th>
                      <th className="text-right px-4 py-2.5 font-semibold">الحد الأدنى (kN) على المكبس</th>
                      <th className="text-right px-4 py-2.5 font-semibold">الاستخدام / الكسر المقابل</th>
                    </tr>
                  </thead>
                  <tbody>
                    {euClasses.map((r, i) => (
                      <tr key={r.eu} className={i % 2 === 0 ? "bg-white dark:bg-slate-950" : "bg-slate-50 dark:bg-slate-900"}>
                        <td className="px-4 py-2.5 font-mono font-bold text-primary">{r.eu}</td>
                        <td className="px-4 py-2.5 font-mono text-muted-foreground">{r.cyl} MPa</td>
                        <td className="px-4 py-2.5 font-mono font-bold">{r.cube} MPa</td>
                        <td className="px-4 py-2.5 font-mono font-bold text-emerald-700 dark:text-emerald-400">
                          {Math.round(r.cube * 22500 / 1000)} kN
                        </td>
                        <td className="px-4 py-2.5 text-xs text-muted-foreground">{r.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-sm">
                <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">💡 عمود "الحد الأدنى على المكبس" — كيف يُحسب؟</p>
                <p className="text-blue-700 dark:text-blue-400 leading-relaxed font-mono text-xs">
                  الحد الأدنى (kN) = قوة المكعب (MPa) × 22,500 (مم²) ÷ 1,000<br/>
                  مثال C25/30: 30 × 22,500 ÷ 1,000 = <strong>675 kN</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Exposure classes */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                درجات التعرض البيئي (Exposure Classes) — لماذا تهم الفني؟
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="text-muted-foreground leading-relaxed">
                درجة التعرض تُحدد الحد الأقصى لنسبة الماء/الأسمنت (w/c) والحد الأدنى لكمية الأسمنت.
                ستجدها مكتوبة في تذكرة تسليم المشاريع الكبيرة.
              </p>
              <div className="border border-border rounded-xl overflow-hidden">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-right px-3 py-2">الدرجة</th>
                      <th className="text-right px-3 py-2">وصف البيئة</th>
                      <th className="text-right px-3 py-2">أقصى w/c</th>
                      <th className="text-right px-3 py-2">الرتبة الأدنى</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cls: "X0", env: "لا خطر تآكل (داخلي جاف)", wc: "—", min: "C12/15" },
                      { cls: "XC1", env: "جاف أو رطب دائماً (داخل أبنية)", wc: "0.65", min: "C20/25" },
                      { cls: "XC2", env: "رطب، أحياناً جاف (أساسات)", wc: "0.60", min: "C25/30" },
                      { cls: "XC3", env: "رطوبة متوسطة (خارجي محمي)", wc: "0.55", min: "C30/37" },
                      { cls: "XC4", env: "تعاقب جفاف ورطوبة (خارجي مكشوف)", wc: "0.50", min: "C30/37" },
                      { cls: "XS / XD", env: "تعرض للملوحة أو مزيل الجليد", wc: "0.45", min: "C35/45" },
                    ].map((r, i) => (
                      <tr key={r.cls} className={i % 2 === 0 ? "bg-white dark:bg-slate-950" : "bg-slate-50 dark:bg-slate-900"}>
                        <td className="px-3 py-2 font-mono font-bold text-primary">{r.cls}</td>
                        <td className="px-3 py-2 text-muted-foreground">{r.env}</td>
                        <td className="px-3 py-2 font-mono font-bold">{r.wc}</td>
                        <td className="px-3 py-2 font-mono text-emerald-700 dark:text-emerald-400 font-bold">{r.min}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3 text-xs text-amber-800 dark:text-amber-300">
                <strong>مهم للفني:</strong> إذا كانت تذكرة التسليم تذكر درجة التعرض (مثل XC3) — تحقق أن نسبة الماء/الأسمنت في تصميم الخلطة لا تتجاوز الحد المسموح.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
