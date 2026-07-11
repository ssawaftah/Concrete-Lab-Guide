const fs = require('fs');
const file = 'artifacts/concrete-lab-guide/src/data/content.ts';
let content = fs.readFileSync(file, 'utf8');

// Update Dictionary
if (!content.includes('فوليّة')) {
  content = content.replace(
    '{ ar: "التحليل بالمنخل / الغربلة", en: "Sieve Analysis" }',
    `{ ar: "التحليل بالمنخل / الغربلة", en: "Sieve Analysis" },
  { ar: "فوليّة", en: "Fuliyyeh" },
  { ar: "عدسية", en: "Adasiyyeh" },
  { ar: "سمسمية", en: "Simsimiyyeh" },
  { ar: "المكافئ الرملي", en: "Sand Equivalent" },
  { ar: "الامتصاص", en: "Water Absorption" },
  { ar: "الفيلر (الناعم)", en: "Filler (Fines)" }`
  );
}

// Add Jordan Aggregates
if (!content.includes('jordanAggregates')) {
  content += `

export const jordanAggregates = {
  title: "الركام المحلي في الأردن",
  description: "التصنيف الشائع في المحاجر الأردنية:",
  items: [
    { name: "فوليّة (Fuliyyeh)", desc: "ركام خشن كبير الحجم تقريباً 10-20mm." },
    { name: "عدسية (Adasiyyeh)", desc: "ركام متوسط الحجم تقريباً 5-10mm (شكل يشبه حبة العدس)." },
    { name: "سمسمية (Simsimiyyeh)", desc: "ركام ناعم/خشن صغير تقريباً 2.36-5mm (يشبه حبة السمسم)." }
  ],
  note: "هذه أسماء محلية شائعة في الأردن وتُختبر بنفس معايير BS EN لكن كل صنف يُفحص منفصلاً لأن خواصه (الفيلر والامتصاص) تختلف."
};
`;
}

fs.writeFileSync(file, content, 'utf8');
console.log('Updated content.ts');
