import fs from 'fs';

let content = fs.readFileSync('./src/components/Section14_13.jsx', 'utf8');

// Section headers
content = content.replace(/>Patient experiences with our medical services</g, '>What Clinic Teams Are Saying<');
content = content.replace(/>Happy users says about our company</g, '>Join the Clinics Upgrading to MONAVI<');

// Testimonial 1
content = content.replace(/Excellent experience! appointment booking was smooth, staff were punctual and professional, and the care was outstanding. The clinic felt clean, organized, and truly patient-focused/g, "MONAVI completely transformed how we handle walk-ins. We used to lose 30% of our patients because of manual follow-ups. Now, it's fully automated and our revenue is up.");
content = content.replace(/Raquel Murillo/g, "Dr. Amit Sharma, Clinic Owner");

// Testimonial 2
content = content.replace(/Excellent cleaning service! they transformed my home and made everything shine. friendly team and great results Excellent cleaning service! they transformed my home and made everything shine. friendly team and great results/g, "I no longer spend 4 hours a day calling patients to remind them of their follow-ups. The system does it for me. I can finally focus on managing the clinic floor!");
content = content.replace(/Berlin\.Josep/g, "Priya Singh, Receptionist");

// Testimonial 3 (Has two slightly different capitalizations in the file)
content = content.replace(/Wonderful experience! Booking was simple, the cleaners were punctual, and the results were amazing. my entire home looked refreshed, sanitized, and perfectly tidy/gi, "Having all patient history and digital prescriptions in one unified dashboard saves me incredible amounts of time between consultations.");
content = content.replace(/Alisia Siyara/g, "Dr. Sneha Patel, Physician");

// Testimonial 4
content = content.replace(/Extremely satisfied with the deep cleaning. They covered every detail carefully, worked efficiently, and left my home looking beautifully clean and organized throughout/g, "The queue management feature alone is worth the price. Patients are happier because they know exactly when to walk in, reducing waiting room chaos.");
content = content.replace(/Alison Parker/g, "Rahul Verma, Clinic Manager");

// Testimonial 5 (Deniel Ramos)
// We already replaced the text since it's a case-insensitive match above, but let's just replace the name.
content = content.replace(/Deniel Ramos/g, "Dr. Arjun Reddy, Specialist");

// Testimonial 6 (Andress Markemo)
content = content.replace(/Wonderful experience! Booking was simple, the cleaners were punctual, and the results were amazing. My entire home looked refreshed, sanitized, and perfectly tidy./gi, "Our patient return rate increased by 40% in just two months. The automated reminders are a game-changer.");
content = content.replace(/Andress Markemo/g, "Dr. Meera Iyer, Pediatrician");

fs.writeFileSync('./src/components/Section14_13.jsx', content);
console.log('Testimonials updated');
