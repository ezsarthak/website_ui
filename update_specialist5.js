const fs = require('fs');
let content = fs.readFileSync('src/components/SpecialistLarkinjomesSection5.jsx', 'utf8');

const replacements = [
  ['The healthcare team explained every detail patiently and\n                    ensured i felt safe, supported, and confident throughout\n                    that made the entire treatment process comfortable', 'Monavi has completely transformed our clinic. We no longer have patients complaining about long wait times, and our doctors are much less stressed.'],
  ['The doctors provided compassionate, professional care,\n                    explained everything clearly, and ensured I felt safe\n                    confident throughout treatment process.', 'Since implementing Monavi, our patient retention has gone up by 40%. The automated WhatsApp reminders are an absolute game changer.'],
  ['The medical team was caring and professional, clearly\n                    explained every step, and made me feel comfortable and\n                    confident throughout my treatment.', 'I can finally see exactly what is happening at my clinic even when I am not there. The dashboard gives me all the insights I need to grow.'],
  ['I felt truly listened to and well cared for. The doctors\n                    explained my condition clearly and supported me throughout\n                    the treatment.', 'The best investment we made for our reception team. It removed the chaos and brought complete order to our patient flow.']
];

for (let [search, replace] of replacements) {
  content = content.replace(search, replace);
  content = content.replace(search, replace); // run twice for both occurrences
}

// there are also duplicates in the slider, wait, the slider text might be slightly different indentation
// let's just do a simpler replace using substring match if the exact one doesn't hit all.
// Actually, I can just replace smaller chunks.
content = content.replace(/The healthcare team explained every detail patiently and[\s\S]*?process comfortable/g, 'Monavi has completely transformed our clinic. We no longer have patients complaining about long wait times, and our doctors are much less stressed.');
content = content.replace(/The doctors provided compassionate, professional care,[\s\S]*?treatment process\./g, 'Since implementing Monavi, our patient retention has gone up by 40%. The automated WhatsApp reminders are an absolute game changer.');
content = content.replace(/The medical team was caring and professional, clearly[\s\S]*?throughout my treatment\./g, 'I can finally see exactly what is happening at my clinic even when I am not there. The dashboard gives me all the insights I need to grow.');
content = content.replace(/I felt truly listened to and well cared for. The doctors[\s\S]*?throughout[\s\S]*?the treatment\./g, 'The best investment we made for our reception team. It removed the chaos and brought complete order to our patient flow.');

fs.writeFileSync('src/components/SpecialistLarkinjomesSection5.jsx', content);
console.log('Updated SpecialistLarkinjomesSection5.');
