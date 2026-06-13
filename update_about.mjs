import fs from 'fs';

let content = fs.readFileSync('./src/components/AboutSection_1.jsx', 'utf8');

content = content.replace(/>About us</g, '>The Clinic Problem<');
content = content.replace(/>Reliable medical services focused on patient safety, comfort, and better outcomes, delivering quality care with compassion and precision</g, '>Most clinics struggle with missed follow-ups, manual tracking, and endless reception calls. Patients drop off, and doctors lose continuity.<');
content = content.replace(/>Explore more</g, '>See the Solution<');

content = content.replace(/>Reliable medical care</g, '>Missed follow-up patients<');
content = content.replace(/>Patient-focused treatment</g, '>Reception overload & calls<');
content = content.replace(/>Expert medical guidance</g, '>Manual queue confusion<');
content = content.replace(/>Long-term health outcomes</g, '>Disconnected communication<');

content = content.replace(/>Expert medical care combining innovation, compassion, and clinical excellence</g, '>Stop losing patients after their first visit. Build a sustainable clinic.<');

fs.writeFileSync('./src/components/AboutSection_1.jsx', content);
console.log('About section updated');
