import { classes } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Settings2 } from "lucide-react";

export default function Classes() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-2">
          <Settings2 className="text-primary w-8 h-8" />
          الرتب ودرجات القوام
        </h1>
        <p className="text-muted-foreground">
          جداول مرجعية لتصنيف الخرسانة حسب قوة الانضغاط وقابلية التشغيل.
        </p>
      </div>

      <Tabs defaultValue="strength" className="mt-8">
        <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
          <TabsTrigger value="strength">رتب الانضغاط</TabsTrigger>
          <TabsTrigger value="consistence">درجات القوام (الهطول)</TabsTrigger>
        </TabsList>
        
        <TabsContent value="strength" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>رتب قوة الانضغاط (Compressive Strength Classes)</CardTitle>
              <CardDescription>
                حسب معيار BS EN 206. الرقم الأول هو قوة الأسطوانة، والثاني قوة المكعب بالميجاباسكال (MPa) عند 28 يوماً.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {classes.compressiveStrength.map((c) => (
                  <div key={c} className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-lg font-mono font-bold text-lg text-center flex-1 min-w-[120px]">
                    {c}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="consistence" className="mt-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>درجات الهطول (Slump Classes)</CardTitle>
                <CardDescription>التصنيف القياسي للهطول للخرسانة العادية.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-right">الدرجة (Class)</TableHead>
                      <TableHead className="text-right">نطاق الهطول (mm)</TableHead>
                      <TableHead className="text-right">الوصف</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {classes.consistenceClasses.slump.map((row) => (
                      <TableRow key={row.class}>
                        <TableCell className="font-mono font-bold text-primary">{row.class}</TableCell>
                        <TableCell className="font-mono dir-ltr text-right">{row.range}</TableCell>
                        <TableCell>{row.desc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">درجات الانتشار (Flow Classes)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {classes.consistenceClasses.flow[0].desc}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">درجات Vebe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {classes.consistenceClasses.vebe[0].desc}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
