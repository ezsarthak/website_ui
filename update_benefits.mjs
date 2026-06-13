import fs from 'fs';

let content = fs.readFileSync('./src/components/Section4_3.jsx', 'utf8');

content = content.replace(/>Why choose us</g, '>The Benefits<');
content = content.replace(/>Advanced medical solutions for managing chronic conditions and improving patient outcomes</g, '>Designed for busy clinics that want to grow without the chaos<');

// Benefit 1
content = content.replace(/>Medical excellence</g, '>Zero Patient Drop-off<');
content = content.replace(/>Quality-driven medical excellence</g, '>Keep patients returning for their follow-ups<');

// Benefit 2
content = content.replace(/>Successfully treated</g, '>Smarter Workflows<');
content = content.replace(/>Effective patient treatment results</g, '>No more missed appointments or manual tracking<');

// Benefit 3
content = content.replace(/>Clients satisfaction</g, '>Happy Receptionists<');
content = content.replace(/>High patient satisfaction guaranteed</g, '>Save hours on endless phone calls<');

// Benefit 4
content = content.replace(/>Medical specialties /g, '>Higher Revenue<'); // Note trailing space in original text
content = content.replace(/>Comprehensive medical specialty care</g, '>Maximize clinic profitability with better retention<');

fs.writeFileSync('./src/components/Section4_3.jsx', content);
console.log('Benefits updated');
