import fs from 'fs';

let content = fs.readFileSync('./src/components/ServicesSection_2.jsx', 'utf8');

content = content.replace(/>Our services</g, '>The Solution<');
content = content.replace(/>Comprehensive medical services for you</g, '>The Smart Clinic Flow & Patient Return System<');

// Service 1
content = content.replace(/>Medical services</g, '>Reception Efficiency<');
content = content.replace(/>Complete healthcare solutions for every stage of life</g, '>Automate the chaos of front-desk management<');
content = content.replace(/>Primary medical care</g, '>Appointment Scheduling<');
// We need to be careful with "Specialist consultations" (used twice)
// Replace first one for Service 1 manually or just replace all because the new text is general enough?
// Actually, let's just do a simple mapping.

const map = {
  '>Medical services<': '>Reception Efficiency<',
  '>Complete healthcare solutions for every stage of life<': '>Automate the chaos of front-desk management<',
  '>Primary medical care<': '>Appointment Scheduling<',
  
  '>Healthcare services<': '>Follow-up Engine<',
  '>Personalized medical care with expert treatment<': '>Never let a patient slip through the cracks again<',
  '>General physician services<': '>Automated Reminders<',
  '>Advanced specialty care<': '>Follow-up Tracking<',
  
  '>Comprehensive medical care and specialized treatments<': '>Centralized workflow with zero administrative burden<',
  '>General medicine<': '>Consultation Records<',
};

for (const [key, val] of Object.entries(map)) {
  content = content.split(key).join(val);
}

// "Preventive healthcare" is used 3 times in bullets and 1 time in a subtitle.
// Let's replace the first subtitle "Preventive healthcare" with "Doctor Dashboard"
content = content.replace(/className="rt-sub-text rt-small-tag-gap rt-secondary-text-color">Preventive healthcare</g, 'className="rt-sub-text rt-small-tag-gap rt-secondary-text-color">Doctor Dashboard<');

// Now the bullets that are "Preventive healthcare" -> replace them.
content = content.replace(/<div className="rt-secondary-text-color">Preventive healthcare<\/div>/g, '<div className="rt-secondary-text-color">Patient Communication</div>');
content = content.replace(/<div className="rt-secondary-text-color">Preventive health services<\/div>/g, '<div className="rt-secondary-text-color">Queue Management</div>');

// Replace "Specialist consultations"
let parts = content.split('<div className="rt-secondary-text-color">Specialist consultations</div>');
if (parts.length === 7) {
  content = [
    parts[0],
    '<div className="rt-secondary-text-color">Patient Lookup</div>',
    parts[1],
    '<div className="rt-secondary-text-color">Medical History</div>',
    parts[2],
    '<div className="rt-secondary-text-color">Patient Lookup</div>',
    parts[3],
    '<div className="rt-secondary-text-color">Medical History</div>',
    parts[4],
    '<div className="rt-secondary-text-color">Patient Lookup</div>', // wait, slider has 3 items duplicated 2 times
    parts[5],
    '<div className="rt-secondary-text-color">Medical History</div>',
    parts[6]
  ].join('');
} else {
    // simpler replace
    content = content.replace(/<div className="rt-secondary-text-color">Specialist consultations<\/div>/g, '<div className="rt-secondary-text-color">Patient Records</div>');
}


fs.writeFileSync('./src/components/ServicesSection_2.jsx', content);
console.log('Services updated');
