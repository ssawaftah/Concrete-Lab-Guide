const fs = require('fs');
const file = 'artifacts/concrete-lab-guide/src/pages/Calculations.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/const \[result, setResult\] = useState<number \| null>\(null\);/g, 'const [result, setResult] = useState<number | null>(null);\n  const [error, setError] = useState<string | null>(null);');
content = content.replace(/const \[result, setResult\] = useState<\{ mean: number, std: number, fck: number \} \| null>\(null\);/, 'const [result, setResult] = useState<{ mean: number, std: number, fck: number } | null>(null);\n  const [error, setError] = useState<string | null>(null);');

content = content.replace(/if \(l > 0 && d > 0\) \{([\s\S]*?)\} else \{\n\s*setResult\(null\);\n\s*\}/, 
`if (isNaN(l) || isNaN(d) || l <= 0 || d <= 0) {
      setError("الرجاء إدخال قيم موجبة صالحة.");
      setResult(null);
    } else {
      setError(null);
$1}`);

content = content.replace(/if \(w >= 0 && c > 0\) setResult\(w \/ c\);\n\s*else setResult\(null\);/, 
`if (isNaN(w) || isNaN(c) || w < 0 || c <= 0) {
      setError("الرجاء إدخال قيم صالحة (الأسمنت أكبر من صفر).");
      setResult(null);
    } else {
      setError(null);
      setResult(w / c);
    }`);

content = content.replace(/if \(m >= 0 && v > 0\) setResult\(m \/ v\);\n\s*else setResult\(null\);/, 
`if (isNaN(m) || isNaN(v) || m < 0 || v <= 0) {
      setError("الرجاء إدخال قيم صالحة (الحجم أكبر من صفر).");
      setResult(null);
    } else {
      setError(null);
      setResult(m / v);
    }`);

content = content.replace(/if \(s > 0 && d > 0 && s >= d\) setResult\(\(\(s - d\) \/ d\) \* 100\);\n\s*else setResult\(null\);/, 
`if (isNaN(s) || isNaN(d) || s <= 0 || d <= 0) {
      setError("الرجاء إدخال قيم موجبة صالحة.");
      setResult(null);
    } else if (d > s) {
      setError("وزن SSD يجب أن يكون أكبر من أو يساوي الوزن الجاف.");
      setResult(null);
    } else {
      setError(null);
      setResult(((s - d) / d) * 100);
    }`);

content = content.replace(/if \(b > 0 && a > 0 && b >= a\) setResult\(\(\(b - a\) \/ b\) \* 100\);\n\s*else setResult\(null\);/, 
`if (isNaN(b) || isNaN(a) || b <= 0 || a <= 0) {
      setError("الرجاء إدخال قيم موجبة صالحة.");
      setResult(null);
    } else if (a > b) {
      setError("الوزن قبل الغسيل يجب أن يكون أكبر من أو يساوي الوزن بعد الغسيل.");
      setResult(null);
    } else {
      setError(null);
      setResult(((b - a) / b) * 100);
    }`);

content = content.replace(/if \(v1 > 0 && v2 >= 0 && v1 >= v2\) setResult\(\(v2 \/ v1\) \* 100\);\n\s*else setResult\(null\);/, 
`if (isNaN(v1) || isNaN(v2) || v1 <= 0 || v2 < 0) {
      setError("الرجاء إدخال قيم صالحة (h1 أكبر من صفر).");
      setResult(null);
    } else if (v2 > v1) {
      setError("مستوى الرمل (h2) لا يمكن أن يكون أكبر من مستوى العوالق (h1).");
      setResult(null);
    } else {
      setError(null);
      setResult((v2 / v1) * 100);
    }`);

content = content.replace(/if \(nums\.length < 2\) \{\n\s*setResult\(null\);\n\s*return;\n\s*\}/, 
`if (nums.length < 2) {
      setError("الرجاء إدخال نتيجتين على الأقل.");
      setResult(null);
      return;
    }
    setError(null);`);

// Add Error displaying to JSX
content = content.replace(/\{result !== null && \(/g, '{error && (\n          <div className="p-3 bg-red-50 text-red-900 border border-red-200 rounded-lg text-sm mt-4 text-center">\n            {error}\n          </div>\n        )}\n        {result !== null && (');

fs.writeFileSync(file, content, 'utf8');
console.log('updated calculations');
