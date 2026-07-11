import { useState, useCallback } from "react";
import { quizQuestions, quizCategories, type QuizQuestion } from "@/data/quizData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Trophy, RotateCcw, Lightbulb, ChevronRight, BookOpen } from "lucide-react";

type AnswerState = "unanswered" | "correct" | "wrong";

interface QuestionResult {
  question: QuizQuestion;
  selected: number;
  correct: boolean;
}

function QuizCard({
  question,
  onAnswer,
  questionNumber,
  total,
}: {
  question: QuizQuestion;
  onAnswer: (idx: number) => void;
  questionNumber: number;
  total: number;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    onAnswer(idx);
  };

  return (
    <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-400">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span className="font-semibold text-primary text-xs px-2 py-0.5 bg-primary/10 rounded-full">
          {question.category}
        </span>
        <span>
          السؤال {questionNumber} من {total}
        </span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
        <div
          className="bg-primary h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${((questionNumber - 1) / total) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5 border border-border">
        <p className="font-bold text-base leading-relaxed">{question.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((opt, idx) => {
          let style =
            "w-full text-right px-4 py-3.5 rounded-xl border-2 text-sm leading-relaxed transition-all cursor-pointer ";
          if (!answered) {
            style += "border-border bg-white dark:bg-slate-950 hover:border-primary hover:bg-primary/5";
          } else if (idx === question.correct) {
            style += "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-semibold";
          } else if (idx === selected && idx !== question.correct) {
            style += "border-red-400 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300";
          } else {
            style += "border-border/50 bg-slate-50/50 dark:bg-slate-900/50 text-muted-foreground";
          }

          return (
            <button key={idx} className={style} onClick={() => handleSelect(idx)}>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {answered && idx === question.correct ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : answered && idx === selected ? (
                    <XCircle className="w-4 h-4 text-red-500" />
                  ) : (
                    String.fromCharCode(0x0041 + idx) // A, B, C, D
                  )}
                </span>
                <span>{opt}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {answered && (
        <div
          className={`p-4 rounded-xl border animate-in fade-in duration-300 ${
            selected === question.correct
              ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900"
              : "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900"
          }`}
        >
          <div className="flex items-start gap-2 mb-2">
            <Lightbulb
              className={`w-4 h-4 shrink-0 mt-0.5 ${
                selected === question.correct
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-amber-600 dark:text-amber-400"
              }`}
            />
            <p
              className={`font-bold text-sm ${
                selected === question.correct
                  ? "text-emerald-800 dark:text-emerald-300"
                  : "text-amber-800 dark:text-amber-300"
              }`}
            >
              {selected === question.correct ? "✓ إجابة صحيحة!" : "✗ إجابة خاطئة"}
            </p>
          </div>
          <p
            className={`text-sm leading-relaxed ${
              selected === question.correct
                ? "text-emerald-800 dark:text-emerald-200"
                : "text-amber-900 dark:text-amber-200"
            }`}
          >
            {question.explanation}
          </p>
          {question.tip && (
            <div className="mt-3 pt-3 border-t border-current/10 flex items-start gap-2">
              <BookOpen className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-500" />
              <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">{question.tip}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ScoreScreen({
  results,
  total,
  onRetry,
  onRetryWrong,
}: {
  results: QuestionResult[];
  total: number;
  onRetry: () => void;
  onRetryWrong: () => void;
}) {
  const score = results.filter((r) => r.correct).length;
  const pct = Math.round((score / total) * 100);
  const wrongCount = total - score;

  const grade =
    pct === 100
      ? { label: "ممتاز جداً!", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/30" }
      : pct >= 80
      ? { label: "جيد جداً", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-950/30" }
      : pct >= 60
      ? { label: "جيد — راجع الأخطاء", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/30" }
      : { label: "تحتاج مراجعة أكثر", color: "text-red-600 dark:text-red-400", bg: "bg-red-50 dark:bg-red-950/30" };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Score card */}
      <div className={`${grade.bg} rounded-2xl p-8 text-center border`}>
        <Trophy className={`w-12 h-12 mx-auto mb-4 ${grade.color}`} />
        <div className={`text-6xl font-bold mb-2 ${grade.color}`}>{score}/{total}</div>
        <div className={`text-lg font-semibold mb-1 ${grade.color}`}>{grade.label}</div>
        <div className="text-sm text-muted-foreground">نسبة النجاح: {pct}%</div>
      </div>

      {/* Breakdown */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-xl p-4 text-center border border-emerald-200 dark:border-emerald-900">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
          <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{score}</div>
          <div className="text-xs text-emerald-600 dark:text-emerald-400">إجابات صحيحة</div>
        </div>
        <div className="bg-red-50 dark:bg-red-950/30 rounded-xl p-4 text-center border border-red-200 dark:border-red-900">
          <XCircle className="w-6 h-6 text-red-500 mx-auto mb-1" />
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">{wrongCount}</div>
          <div className="text-xs text-red-500 dark:text-red-400">إجابات خاطئة</div>
        </div>
      </div>

      {/* Wrong answers review */}
      {results.filter((r) => !r.correct).length > 0 && (
        <div className="space-y-3">
          <h3 className="font-bold text-base flex items-center gap-2">
            <XCircle className="w-5 h-5 text-red-500" />
            مراجعة الإجابات الخاطئة
          </h3>
          {results
            .filter((r) => !r.correct)
            .map((r, i) => (
              <Card key={i} className="border-red-200 dark:border-red-900">
                <CardContent className="pt-4 pb-4">
                  <p className="font-semibold text-sm mb-2">{r.question.question}</p>
                  <div className="flex items-start gap-2 text-sm text-red-700 dark:text-red-400 mb-2">
                    <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>إجابتك: {r.question.options[r.selected]}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-emerald-700 dark:text-emerald-400 mb-3">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>الصحيح: {r.question.options[r.question.correct]}</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg text-xs text-muted-foreground leading-relaxed">
                    {r.question.explanation}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={onRetry} variant="outline" className="flex-1 gap-2">
          <RotateCcw className="w-4 h-4" />
          ابدأ من جديد (كل الأسئلة)
        </Button>
        {wrongCount > 0 && (
          <Button onClick={onRetryWrong} className="flex-1 gap-2">
            <RotateCcw className="w-4 h-4" />
            أعد الإجابة على الخاطئة فقط ({wrongCount})
          </Button>
        )}
      </div>
    </div>
  );
}

export default function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [phase, setPhase] = useState<"start" | "quiz" | "done">("start");
  const [pendingAnswer, setPendingAnswer] = useState<number | null>(null);
  const [canAdvance, setCanAdvance] = useState(false);

  const filtered =
    selectedCategory === "الكل"
      ? quizQuestions
      : quizQuestions.filter((q) => q.category === selectedCategory);

  const startQuiz = useCallback(
    (questions: QuizQuestion[]) => {
      const shuffled = [...questions].sort(() => Math.random() - 0.5);
      setActiveQuestions(shuffled);
      setCurrentIdx(0);
      setResults([]);
      setPendingAnswer(null);
      setCanAdvance(false);
      setPhase("quiz");
    },
    []
  );

  const handleAnswer = useCallback(
    (idx: number) => {
      setPendingAnswer(idx);
      setCanAdvance(true);
    },
    []
  );

  const handleNext = useCallback(() => {
    if (pendingAnswer === null) return;
    const q = activeQuestions[currentIdx];
    const newResult: QuestionResult = {
      question: q,
      selected: pendingAnswer,
      correct: pendingAnswer === q.correct,
    };
    const newResults = [...results, newResult];
    setResults(newResults);

    if (currentIdx + 1 < activeQuestions.length) {
      setCurrentIdx((i) => i + 1);
      setPendingAnswer(null);
      setCanAdvance(false);
    } else {
      setPhase("done");
    }
  }, [pendingAnswer, activeQuestions, currentIdx, results]);

  const retryWrong = useCallback(() => {
    const wrong = results.filter((r) => !r.correct).map((r) => r.question);
    startQuiz(wrong);
  }, [results, startQuiz]);

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-2">
          <Trophy className="text-primary w-8 h-8" />
          اختبر نفسك
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          أسئلة متعددة الاختيارات — اختر الجواب واعرف فوراً إذا كان صح أو خطأ ولماذا.
        </p>
      </div>

      {/* Start screen */}
      {phase === "start" && (
        <div className="space-y-5">
          {/* Category picker */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">اختر المجال</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["الكل", "الهطول والقوام", "رتب الخرسانة", "المضافات والمميع", "المكعبات والمعالجة", "التوثيق والإجراءات", "الحسابات"].map(
                  (cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === cat
                          ? "bg-primary text-primary-foreground"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      {cat}
                    </button>
                  )
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                {filtered.length} سؤال متاح في هذا المجال
              </p>
            </CardContent>
          </Card>

          {/* Info cards */}
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: "أسئلة متاحة", value: filtered.length, color: "text-primary" },
              { label: "مجالات", value: 6, color: "text-emerald-600 dark:text-emerald-400" },
              { label: "شرح لكل سؤال", value: "✓", color: "text-amber-600 dark:text-amber-400" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 text-center border">
                <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          <Button size="lg" className="w-full gap-2 py-6 text-base" onClick={() => startQuiz(filtered)}>
            ابدأ الاختبار
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Sample question preview */}
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 p-4 rounded-xl">
            <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">كيف يعمل الاختبار</p>
            <ul className="text-sm text-amber-800 dark:text-amber-300 space-y-1 leading-relaxed">
              <li>• اقرأ السؤال واختر الجواب الصحيح</li>
              <li>• يظهر لك فوراً إذا كنت صح أو خطأ ولماذا</li>
              <li>• اضغط "التالي" للانتقال للسؤال القادم</li>
              <li>• في النهاية تُعرض عليك الأسئلة الخاطئة مع شرحها</li>
            </ul>
          </div>
        </div>
      )}

      {/* Quiz screen */}
      {phase === "quiz" && activeQuestions.length > 0 && (
        <div className="space-y-4">
          <QuizCard
            key={activeQuestions[currentIdx].id + "-" + currentIdx}
            question={activeQuestions[currentIdx]}
            onAnswer={handleAnswer}
            questionNumber={currentIdx + 1}
            total={activeQuestions.length}
          />
          {canAdvance && (
            <Button className="w-full gap-2 animate-in fade-in duration-300" onClick={handleNext}>
              {currentIdx + 1 < activeQuestions.length ? (
                <>
                  السؤال التالي
                  <ChevronRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  عرض النتيجة النهائية
                  <Trophy className="w-4 h-4" />
                </>
              )}
            </Button>
          )}
        </div>
      )}

      {/* Score screen */}
      {phase === "done" && (
        <ScoreScreen
          results={results}
          total={activeQuestions.length}
          onRetry={() => startQuiz(filtered)}
          onRetryWrong={retryWrong}
        />
      )}
    </div>
  );
}
