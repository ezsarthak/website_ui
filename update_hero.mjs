import fs from 'fs';

let content = fs.readFileSync('./src/components/HeroSection_0.jsx', 'utf8');

// Replace Hero Heading
content = content.replace(/>Smarter intelligence for better patient care</g, '>Bring Patients Back. Reduce Clinic Chaos.<');

// Replace Subheading
content = content.replace(/>Streamlined clinical workflows boost efficiency, cut wait times, and enable faster, patient-centered care experiences</g, '>MONAVI is the smart clinic flow and patient return system that helps clinics manage appointments, track follow-ups, and improve patient retention.<');

// Replace Buttons
content = content.replace(/>Explore more</g, '>Book a Demo<');

// Replace bottom tags
content = content.replace(/>Accurate diagnosis</g, '>Appointment Management<');
content = content.replace(/>Modern medical care</g, '>Queue Tracking<');
content = content.replace(/>Expert care</g, '>Digital Prescriptions<');
content = content.replace(/>Advanced technology</g, '>Follow-up Reminders<');

// Replace right side stats
content = content.replace(/>1k\+ Satisfied patients</g, '>100+ Clinics Onboarded<');
content = content.replace(/>Reduced patient wait times</g, '>Increase in Patient Return Rate<');
content = content.replace(/>Improved care efficiency</g, '>Reduction in Missed Follow-ups<');

fs.writeFileSync('./src/components/HeroSection_0.jsx', content);
console.log('Hero updated');
