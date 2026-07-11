import { equipment } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench } from "lucide-react";

export default function Equipment() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-2">
          <Wrench className="text-primary w-8 h-8" />
          دليل المعدات
        </h1>
        <p className="text-muted-foreground">
          دليل بصري ووصفي لأهم أدوات المختبر المستخدمة في اختبارات الخرسانة.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {equipment.map((item, i) => (
          <Card key={i} className="overflow-hidden hover-elevate">
            {item.image ? (
              <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-border relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ) : (
              <div className="aspect-video w-full bg-slate-100 dark:bg-slate-900 border-b border-border flex items-center justify-center">
                <Wrench className="w-12 h-12 text-slate-300" />
              </div>
            )}
            <CardContent className="p-5">
              <h3 className="font-bold text-lg mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 h-10 line-clamp-2">
                {item.usage}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">المعيار:</span>
                <Badge variant="secondary" className="text-xs">{item.standard}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
