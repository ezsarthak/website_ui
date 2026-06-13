import fs from 'fs';

// --- Section 13 (CTA) ---
let ctaContent = fs.readFileSync('./src/components/Section13_12.jsx', 'utf8');

ctaContent = ctaContent.replace(/>Contact us for personalized health care</g, '>Ready to take control of your clinic?<');
ctaContent = ctaContent.replace(/>Providing trusted,medical care focused on your comfort</g, '>Join hundreds of clinics across India bringing patients back and reducing reception chaos.<');
ctaContent = ctaContent.replace(/>Appointment now</g, '>Book a Demo<');

fs.writeFileSync('./src/components/Section13_12.jsx', ctaContent);

// --- Footer ---
let footerContent = fs.readFileSync('./src/components/Footer.jsx', 'utf8');

footerContent = footerContent.replace(/>H<\/div>/g, '>M</div>');
footerContent = footerContent.replace(/>e<\/div>/g, '>O</div>');
footerContent = footerContent.replace(/>l<\/div>/g, '>N</div>');
footerContent = footerContent.replace(/>t<\/div>/g, '>A</div>');
footerContent = footerContent.replace(/>r<\/div>/g, '>V</div>');
footerContent = footerContent.replace(/>o<\/div>/g, '>I</div>');

footerContent = footerContent.replace(/>410 Sandtown, California 94001, USA</g, '>MonaviOne Technologies Pvt Ltd, India<');
footerContent = footerContent.replace(/info@example\.com/g, 'hello@monavi.in');

fs.writeFileSync('./src/components/Footer.jsx', footerContent);

console.log('CTA and Footer updated');
