import { standards } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, BookOpen } from "lucide-react";
import { useState } from "react";

export default function Standards() {
  const [search, setSearch] = useState("");

  const filtered = standards.filter(
    (s) =>
      s.title.includes(search) ||
      s.code.toLowerCase().includes(search.toLowerCase()) ||
      s.description.includes(search)
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <BookOpen className="text-primary w-8 h-8" />
            بنك المعايير البريطانية
          </h1>
          <p className="text-muted-foreground mt-2">
            مرجع سريع لمعايير BS EN الخاصة بالخرسانة والمواد المرتبطة بها.
          </p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="بحث عن معيار..."
            className="pl-4 pr-9 bg-card"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((standard) => (
          <Card key={standard.id} className="hover-elevate h-full">
            <CardHeader className="pb-2 flex flex-row justify-between items-start">
              <div>
                <Badge variant="secondary" className="mb-2 font-mono text-sm tracking-wider">
                  {standard.code}
                </Badge>
                <CardTitle className="text-lg leading-tight">{standard.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {standard.description}
              </p>
            </CardContent>
          </Card>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-12 text-muted-foreground bg-muted/30 rounded-xl border border-dashed">
            لا توجد معايير مطابقة لبحثك
          </div>
        )}
      </div>
    </div>
  );
}
