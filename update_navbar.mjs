import fs from 'fs';

let content = fs.readFileSync('./src/components/Navbar.jsx', 'utf8');

// Replace "Schedule appointment" with "Book a Demo"
content = content.replace(/>Schedule appointment</g, '>Book a Demo<');
// Replace "Appointment" with "Book Demo"
content = content.replace(/>Appointment</g, '>Book a Demo<');
// Replace brand logo alt
content = content.replace(/alt="Brand Logo"/g, 'alt="MONAVI"');

// Fix the phone number text
content = content.replace(/>\(888\)456 -7890</g, '>+91 800 123 4567<');
content = content.replace(/>Call me</g, '>Contact Sales<');

fs.writeFileSync('./src/components/Navbar.jsx', content);
console.log('Navbar updated');
