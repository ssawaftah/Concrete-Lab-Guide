import { safetyInfo } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldAlert, CheckCircle2 } from "lucide-react";

export default function Safety() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-2">
          <ShieldAlert className="text-primary w-8 h-8" />
          السلامة المهنية
        </h1>
        <p className="text-muted-foreground">
          إرشادات السلامة الأساسية للعمل في مختبر الخرسانة الجاهزة.
        </p>
      </div>

      <Card className="mt-8 border-primary/20 bg-primary/5">
        <CardContent className="pt-6">
          <ul className="space-y-4">
            {safetyInfo.map((info, i) => (
              <li key={i} className="flex items-start gap-3 bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-border">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium text-slate-700 dark:text-slate-300">{info}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <div className="mt-8 p-6 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-xl text-red-900 dark:text-red-400 text-center">
        <ShieldAlert className="w-12 h-12 mx-auto mb-3 opacity-50" />
        <h3 className="font-bold text-lg mb-2">سلامتك أولاً</h3>
        <p className="text-sm">
          الأسمنت مادة قلوية قوية تسبب حروقاً كيميائية للجلد والعينين. استخدم دائماً نظارات الحماية والقفازات المناسبة عند التعامل مع الخرسانة الطرية.
        </p>
      </div>
    </div>
  );
}
