import { troubleshooting } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, AlertCircle } from "lucide-react";

export default function Troubleshooting() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-2">
          <AlertTriangle className="text-primary w-8 h-8" />
          العيوب واستكشاف الأخطاء
        </h1>
        <p className="text-muted-foreground">
          أبرز المشاكل التي تواجه فني المختبر وأسبابها المحتملة.
        </p>
      </div>

      <div className="grid gap-4 mt-8">
        {troubleshooting.map((item, i) => (
          <Card key={i} className="border-l-4 border-l-destructive">
            <CardHeader className="py-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-destructive" />
                {item.issue}
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="text-foreground">السبب المحتمل: </strong>
                {item.cause}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-slate-900 text-white p-6 rounded-xl mt-8">
        <h3 className="font-bold text-lg mb-2">قاعدة ذهبية</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          عند الشك في نتيجة اختبار قوة ضغط، لا تعتمد على مكعب واحد. تحقق من العينات الأخرى في نفس العمر، وراجع سجلات الخلطة والهطول، وتأكد من محورية المكبس قبل إصدار الحكم. إذا لزم الأمر، يمكن اللجوء لتقييم القوة في الموقع (BS EN 13791).
        </p>
      </div>
    </div>
  );
}
