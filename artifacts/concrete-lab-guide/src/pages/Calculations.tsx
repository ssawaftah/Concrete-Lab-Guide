import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Plus, Trash2 } from "lucide-react";

export default function Calculations() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-2">
          <Calculator className="text-primary w-8 h-8" />
          الحاسبات والأدوات التفاعلية
        </h1>
        <p className="text-muted-foreground">
          أدوات حسابية دقيقة لتسريع عملك الميداني وتجنب أخطاء الحساب اليدوي.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <CompressiveStrengthCalc />
        <WCRatioCalc />
        <DensityCalc />
        <AbsorptionCalc />
        <FillerCalc />
        <SandEquivalentCalc />
        <CorrectionFactorCalc />
        <StdDevCalc />
      </div>
    </div>
  );
}

function CompressiveStrengthCalc() {
  const [load, setLoad] = useState("");
  const [dimension, setDimension] = useState("");
  const [target, setTarget] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    const l = parseFloat(load);
    const d = parseFloat(dimension);
    if (isNaN(l) || isNaN(d) || l <= 0 || d <= 0) {
      setError("الرجاء إدخال قيم موجبة صالحة.");
      setResult(null);
    } else {
      setError(null);

      const area = d * d;
      const strength = (l * 1000) / area; // l is kN, area in mm2 -> N/mm2 = MPa
      setResult(strength);
    }
  };

  return (
    <Card className="hover-elevate">
      <CardHeader className="pb-3 border-b border-border/50 bg-slate-50/50 dark:bg-slate-900/20">
        <CardTitle className="text-lg">1. قوة الانضغاط (Compressive Strength)</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>الحمل الأقصى (kN)</Label>
            <Input type="number" value={load} onChange={(e) => setLoad(e.target.value)} placeholder="مثال: 600" />
          </div>
          <div className="space-y-2">
            <Label>طول الضلع / القطر (mm)</Label>
            <Input type="number" value={dimension} onChange={(e) => setDimension(e.target.value)} placeholder="مثال: 150" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>الرتبة المستهدفة (MPa) - اختياري</Label>
          <Input type="number" value={target} onChange={(e) => setTarget(e.target.value)} placeholder="مثال: 25" />
        </div>
        <Button onClick={calculate} className="w-full">احسب قوة الانضغاط</Button>
        
        {error && (
          <div className="p-3 bg-red-50 text-red-900 border border-red-200 rounded-lg text-sm mt-4 text-center">
            {error}
          </div>
        )}
        {result !== null && (
          <div className={`p-4 rounded-lg text-center font-bold text-lg mt-4 ${
             target && result >= parseFloat(target) ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800' :
             target && result < parseFloat(target) ? 'bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800' :
             'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100'
          }`}>
            النتيجة: {result.toFixed(2)} MPa
            {target && result >= parseFloat(target) && <div className="text-sm mt-1">مطابق للرتبة</div>}
            {target && result < parseFloat(target) && <div className="text-sm mt-1">أقل من الرتبة المستهدفة</div>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function WCRatioCalc() {
  const [water, setWater] = useState("");
  const [cement, setCement] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    const w = parseFloat(water);
    const c = parseFloat(cement);
    if (isNaN(w) || isNaN(c) || w < 0 || c <= 0) {
      setError("الرجاء إدخال قيم صالحة (الأسمنت أكبر من صفر).");
      setResult(null);
    } else {
      setError(null);
      setResult(w / c);
    }
  };

  return (
    <Card className="hover-elevate">
      <CardHeader className="pb-3 border-b border-border/50 bg-slate-50/50 dark:bg-slate-900/20">
        <CardTitle className="text-lg">2. نسبة الماء/الأسمنت (w/c ratio)</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>وزن الماء (kg)</Label>
            <Input type="number" value={water} onChange={(e) => setWater(e.target.value)} placeholder="مثال: 180" />
          </div>
          <div className="space-y-2">
            <Label>وزن الأسمنت (kg)</Label>
            <Input type="number" value={cement} onChange={(e) => setCement(e.target.value)} placeholder="مثال: 350" />
          </div>
        </div>
        <Button onClick={calculate} className="w-full">احسب النسبة</Button>
        {error && (
          <div className="p-3 bg-red-50 text-red-900 border border-red-200 rounded-lg text-sm mt-4 text-center">
            {error}
          </div>
        )}
        {result !== null && (
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-center font-bold text-lg mt-4 text-slate-900 dark:text-slate-100">
            النسبة: {result.toFixed(3)}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function DensityCalc() {
  const [mass, setMass] = useState("");
  const [volume, setVolume] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    const m = parseFloat(mass);
    const v = parseFloat(volume);
    if (isNaN(m) || isNaN(v) || m < 0 || v <= 0) {
      setError("الرجاء إدخال قيم صالحة (الحجم أكبر من صفر).");
      setResult(null);
    } else {
      setError(null);
      setResult(m / v);
    }
  };

  return (
    <Card className="hover-elevate">
      <CardHeader className="pb-3 border-b border-border/50 bg-slate-50/50 dark:bg-slate-900/20">
        <CardTitle className="text-lg">3. كثافة الخرسانة (Density)</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>الكتلة (kg)</Label>
            <Input type="number" value={mass} onChange={(e) => setMass(e.target.value)} placeholder="مثال: 8.1" />
          </div>
          <div className="space-y-2">
            <Label>الحجم (m³)</Label>
            <Input type="number" value={volume} onChange={(e) => setVolume(e.target.value)} placeholder="مثال: 0.003375" />
          </div>
        </div>
        <Button onClick={calculate} className="w-full">احسب الكثافة</Button>
        {error && (
          <div className="p-3 bg-red-50 text-red-900 border border-red-200 rounded-lg text-sm mt-4 text-center">
            {error}
          </div>
        )}
        {result !== null && (
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-center font-bold text-lg mt-4 text-slate-900 dark:text-slate-100">
            الكثافة: {result.toFixed(1)} kg/m³
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function AbsorptionCalc() {
  const [ssd, setSsd] = useState("");
  const [dry, setDry] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    const s = parseFloat(ssd);
    const d = parseFloat(dry);
    if (isNaN(s) || isNaN(d) || s <= 0 || d <= 0) {
      setError("الرجاء إدخال قيم موجبة صالحة.");
      setResult(null);
    } else if (d > s) {
      setError("وزن SSD يجب أن يكون أكبر من أو يساوي الوزن الجاف.");
      setResult(null);
    } else {
      setError(null);
      setResult(((s - d) / d) * 100);
    }
  };

  return (
    <Card className="hover-elevate">
      <CardHeader className="pb-3 border-b border-border/50 bg-slate-50/50 dark:bg-slate-900/20">
        <CardTitle className="text-lg">4. امتصاص الركام (Water Absorption)</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>وزن SSD (g)</Label>
            <Input type="number" value={ssd} onChange={(e) => setSsd(e.target.value)} placeholder="مثال: 1020" />
          </div>
          <div className="space-y-2">
            <Label>الوزن الجاف (g)</Label>
            <Input type="number" value={dry} onChange={(e) => setDry(e.target.value)} placeholder="مثال: 1000" />
          </div>
        </div>
        <Button onClick={calculate} className="w-full">احسب نسبة الامتصاص</Button>
        {error && (
          <div className="p-3 bg-red-50 text-red-900 border border-red-200 rounded-lg text-sm mt-4 text-center">
            {error}
          </div>
        )}
        {result !== null && (
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-center font-bold text-lg mt-4 text-slate-900 dark:text-slate-100">
            النسبة: {result.toFixed(2)}%
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function FillerCalc() {
  const [before, setBefore] = useState("");
  const [after, setAfter] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    const b = parseFloat(before);
    const a = parseFloat(after);
    if (isNaN(b) || isNaN(a) || b <= 0 || a <= 0) {
      setError("الرجاء إدخال قيم موجبة صالحة.");
      setResult(null);
    } else if (a > b) {
      setError("الوزن قبل الغسيل يجب أن يكون أكبر من أو يساوي الوزن بعد الغسيل.");
      setResult(null);
    } else {
      setError(null);
      setResult(((b - a) / b) * 100);
    }
  };

  return (
    <Card className="hover-elevate">
      <CardHeader className="pb-3 border-b border-border/50 bg-slate-50/50 dark:bg-slate-900/20">
        <CardTitle className="text-lg">5. نسبة الفيلر / الغبار (Filler Content)</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>الوزن قبل الغسيل (g)</Label>
            <Input type="number" value={before} onChange={(e) => setBefore(e.target.value)} placeholder="مثال: 2000" />
          </div>
          <div className="space-y-2">
            <Label>الوزن بعد الغسيل والتجفيف (g)</Label>
            <Input type="number" value={after} onChange={(e) => setAfter(e.target.value)} placeholder="مثال: 1950" />
          </div>
        </div>
        <Button onClick={calculate} className="w-full">احسب نسبة الفيلر</Button>
        {error && (
          <div className="p-3 bg-red-50 text-red-900 border border-red-200 rounded-lg text-sm mt-4 text-center">
            {error}
          </div>
        )}
        {result !== null && (
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-center font-bold text-lg mt-4 text-slate-900 dark:text-slate-100">
            النسبة: {result.toFixed(2)}%
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function SandEquivalentCalc() {
  const [h1, setH1] = useState("");
  const [h2, setH2] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    const v1 = parseFloat(h1);
    const v2 = parseFloat(h2);
    if (isNaN(v1) || isNaN(v2) || v1 <= 0 || v2 < 0) {
      setError("الرجاء إدخال قيم صالحة (h1 أكبر من صفر).");
      setResult(null);
    } else if (v2 > v1) {
      setError("مستوى الرمل (h2) لا يمكن أن يكون أكبر من مستوى العوالق (h1).");
      setResult(null);
    } else {
      setError(null);
      setResult((v2 / v1) * 100);
    }
  };

  return (
    <Card className="hover-elevate">
      <CardHeader className="pb-3 border-b border-border/50 bg-slate-50/50 dark:bg-slate-900/20">
        <CardTitle className="text-lg">6. المكافئ الرملي (Sand Equivalent)</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>h1 - مستوى العوالق</Label>
            <Input type="number" value={h1} onChange={(e) => setH1(e.target.value)} placeholder="مثال: 10" />
          </div>
          <div className="space-y-2">
            <Label>h2 - مستوى الرمل</Label>
            <Input type="number" value={h2} onChange={(e) => setH2(e.target.value)} placeholder="مثال: 8" />
          </div>
        </div>
        <Button onClick={calculate} className="w-full">احسب SE%</Button>
        {error && (
          <div className="p-3 bg-red-50 text-red-900 border border-red-200 rounded-lg text-sm mt-4 text-center">
            {error}
          </div>
        )}
        {result !== null && (
          <div className={`p-4 rounded-lg text-center font-bold text-lg mt-4 ${
             result < 60 ? 'bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800' :
             result <= 75 ? 'bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800' :
             'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
          }`}>
            SE%: {result.toFixed(1)}%
            <div className="text-sm mt-1">
              {result < 60 ? 'غير مرغوب (نسبة طين عالية)' : result <= 75 ? 'مقبول' : 'رمل نظيف وجيد'}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function CorrectionFactorCalc() {
  const [ratio, setRatio] = useState<string>("");
  
  const factors: Record<string, number> = {
    "2.00": 1.00,
    "1.75": 0.98,
    "1.50": 0.96,
    "1.25": 0.94,
    "1.00": 0.87
  };

  return (
    <Card className="hover-elevate">
      <CardHeader className="pb-3 border-b border-border/50 bg-slate-50/50 dark:bg-slate-900/20">
        <CardTitle className="text-lg">7. معامل تصحيح الأسطوانة (H/D)</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="space-y-2">
          <Label>نسبة الارتفاع إلى القطر (H/D)</Label>
          <Select value={ratio} onValueChange={setRatio} dir="rtl">
            <SelectTrigger>
              <SelectValue placeholder="اختر نسبة H/D" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2.00">2.00 (قياسي)</SelectItem>
              <SelectItem value="1.75">1.75</SelectItem>
              <SelectItem value="1.50">1.50</SelectItem>
              <SelectItem value="1.25">1.25</SelectItem>
              <SelectItem value="1.00">1.00</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {ratio && factors[ratio] && (
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-center font-bold text-lg mt-4 text-slate-900 dark:text-slate-100">
            معامل التصحيح: {factors[ratio].toFixed(2)}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function StdDevCalc() {
  const [values, setValues] = useState<string[]>(["", "", ""]);
  const [result, setResult] = useState<{ mean: number, std: number, fck: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const addValue = () => setValues([...values, ""]);
  
  const removeValue = (index: number) => {
    if (values.length > 1) {
      setValues(values.filter((_, i) => i !== index));
    }
  };

  const updateValue = (index: number, val: string) => {
    const newValues = [...values];
    newValues[index] = val;
    setValues(newValues);
  };

  const calculate = () => {
    const nums = values.map(v => parseFloat(v)).filter(v => !isNaN(v));
    if (nums.length < 2) {
      setError("الرجاء إدخال نتيجتين على الأقل.");
      setResult(null);
      return;
    }
    setError(null);
    
    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    const variance = nums.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (nums.length - 1);
    const std = Math.sqrt(variance);
    const fck = mean - (1.64 * std);
    
    setResult({ mean, std, fck });
  };

  return (
    <Card className="hover-elevate">
      <CardHeader className="pb-3 border-b border-border/50 bg-slate-50/50 dark:bg-slate-900/20">
        <CardTitle className="text-lg">8. الانحراف المعياري والقوة المميزة</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <Label>نتائج الاختبار (MPa)</Label>
        <div className="space-y-2 max-h-48 overflow-y-auto p-1">
          {values.map((v, i) => (
            <div key={i} className="flex gap-2">
              <Input 
                type="number" 
                value={v} 
                onChange={(e) => updateValue(i, e.target.value)} 
                placeholder={`النتيجة ${i + 1}`} 
              />
              {values.length > 1 && (
                <Button variant="outline" size="icon" className="shrink-0" onClick={() => removeValue(i)}>
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              )}
            </div>
          ))}
        </div>
        <Button variant="outline" onClick={addValue} className="w-full flex gap-2">
          <Plus className="w-4 h-4" />
          إضافة نتيجة
        </Button>
        <Button onClick={calculate} className="w-full">احسب fck</Button>
        
        {error && (
          <div className="p-3 bg-red-50 text-red-900 border border-red-200 rounded-lg text-sm mt-4 text-center">
            {error}
          </div>
        )}
        {result !== null && (
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg space-y-2 mt-4 text-slate-900 dark:text-slate-100">
            <div className="flex justify-between">
              <span>المتوسط:</span>
              <span className="font-bold">{result.mean.toFixed(2)} MPa</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>الانحراف المعياري:</span>
              <span>{result.std.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t border-border pt-2 mt-2">
              <span className="font-bold text-primary">القوة المميزة (fck):</span>
              <span className="font-bold text-primary">{result.fck.toFixed(2)} MPa</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
