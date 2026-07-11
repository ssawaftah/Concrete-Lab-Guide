import { dictionary } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Languages, Search } from "lucide-react";
import { useState } from "react";

export default function Dictionary() {
  const [search, setSearch] = useState("");

  const filtered = dictionary.filter(
    (term) =>
      term.ar.includes(search) ||
      term.en.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Languages className="text-primary w-8 h-8" />
            قاموس المصطلحات
          </h1>
          <p className="text-muted-foreground mt-2">
            المصطلحات التقنية الأساسية (عربي - إنجليزي).
          </p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="بحث بالعربي أو الإنجليزي..."
            className="pl-4 pr-9 bg-card"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="divide-y divide-border border rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 bg-slate-50 dark:bg-slate-900 p-4 font-bold text-slate-700 dark:text-slate-300 text-sm">
              <div>المصطلح العربي</div>
              <div className="dir-ltr text-left">English Term</div>
            </div>
            {filtered.map((term, i) => (
              <div key={i} className="grid grid-cols-2 p-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors items-center text-sm">
                <div className="font-semibold text-foreground">{term.ar}</div>
                <div className="font-mono dir-ltr text-left text-muted-foreground">{term.en}</div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="p-8 text-center text-muted-foreground">
                لم يتم العثور على نتائج.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
