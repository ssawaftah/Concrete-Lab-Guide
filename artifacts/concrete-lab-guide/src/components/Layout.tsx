import { 
  Home, 
  BookOpen, 
  TestTube, 
  Calculator, 
  Settings2, 
  Wrench, 
  Languages, 
  AlertTriangle, 
  ShieldAlert,
  Search,
  Menu
} from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from './ui/sheet';
import { Input } from './ui/input';

const navItems = [
  { href: "/", label: "الرئيسية", icon: Home },
  { href: "/standards", label: "المعايير (BS EN)", icon: BookOpen },
  { href: "/tests", label: "دليل الاختبارات", icon: TestTube },
  { href: "/calculations", label: "الحسابات والصيغ", icon: Calculator },
  { href: "/classes", label: "الرتب والقوام", icon: Settings2 },
  { href: "/equipment", label: "المعدات", icon: Wrench },
  { href: "/dictionary", label: "القاموس", icon: Languages },
  { href: "/troubleshooting", label: "العيوب والأخطاء", icon: AlertTriangle },
  { href: "/safety", label: "السلامة المهنية", icon: ShieldAlert },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row rtl">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-72 bg-card border-l border-border fixed h-full z-10">
        <div className="p-6 border-b border-border bg-slate-900 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary text-primary-foreground rounded-lg">
              <TestTube className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">مختبر الخرسانة</h1>
              <p className="text-xs text-slate-400">المرجع الميداني للفني</p>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-3">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors cursor-pointer ${
                  location === item.href 
                    ? 'bg-primary/10 text-primary font-bold' 
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-50 bg-slate-900 text-white border-b border-border p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary text-primary-foreground rounded-md">
            <TestTube className="w-5 h-5" />
          </div>
          <span className="font-bold">مختبر الخرسانة</span>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-slate-800">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] p-0 rtl">
            <SheetTitle className="sr-only">القائمة الرئيسية</SheetTitle>
            <div className="p-6 border-b border-border bg-slate-900 text-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary text-primary-foreground rounded-lg">
                  <TestTube className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-bold text-lg leading-tight">مختبر الخرسانة</h2>
                  <p className="text-xs text-slate-400">المرجع الميداني للفني</p>
                </div>
              </div>
            </div>
            <div className="overflow-y-auto p-4">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-3 rounded-md transition-colors cursor-pointer ${
                      location === item.href 
                        ? 'bg-primary/10 text-primary font-bold' 
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </header>

      {/* Main Content */}
      <main className="flex-1 md:mr-72 p-4 md:p-8 lg:p-12 pb-24 md:pb-12 max-w-5xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
