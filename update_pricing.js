const fs = require('fs');
let content = fs.readFileSync('src/components/PricingSection2.jsx', 'utf8');

// Use replace but specifically target blocks by their index or string matching.
// Block 1:
content = content.replace('https://cdn.prod.website-files.com/696f017270bc35c55e784979/69830bdd12f70215a6c121a9_95062409818862f2fac5295f5126fec3_pulseon-package-image.webp', '/images/monavi/hero_dashboard_mockup_1781317936748.png');
content = content.replace('Consultation &amp; care services', 'Starter Plan');
content = content.replace('Personalized medical services focused on accurate diagnosis,\n                  effective treatment, and ongoing patient care.', 'Essential queue tracking and patient follow-up tools designed specifically for small clinics starting their digital journey.');
content = content.replace('General physician consultation', 'Queue Management Dashboard');
content = content.replace('$800', '$29/mo');
content = content.replace('Specialist consultation', 'Basic Patient Database');
content = content.replace('$1200', 'Included');
content = content.replace('Preventive health check-up', 'WhatsApp Reminders (500/mo)');
content = content.replace('$2,500', '$10/mo');
content = content.replace('Diagnostic screening package', 'Receptionist App Access');
content = content.replace('$1,800', 'Included');
content = content.replace('Follow-up consultation', 'Email Support');
content = content.replace('$700', 'Free');

// Block 2:
content = content.replace('https://cdn.prod.website-files.com/696f017270bc35c55e784979/69831980c32479c4e6df9120_Physical%20Therapy%20Session%201.webp', '/images/monavi/receptionist_using_software_1781317951601.png');
content = content.replace('Clinical care packages', 'Professional Plan');
content = content.replace('Comprehensive healthcare services designed to support your\n                  health at every stage.', 'Advanced workflows, retention tracking, and digital prescriptions for growing clinics handling higher patient volume.');
content = content.replace('Primary care consultation', 'Advanced Workflow Tracking');
content = content.replace('$100', '$79/mo');
content = content.replace('Advanced specialist care', 'Digital Prescription App');
content = content.replace('$250', 'Included');
content = content.replace('Complete health assessment', 'Automated Retention Campaigns');
content = content.replace('$200', '$20/mo');
content = content.replace('Diagnostic evaluation package', 'Patient Mobile App Access');
content = content.replace('$350', '$15/mo');
content = content.replace('Ongoing care follow-up', 'Priority Chat Support');
// The second "$700" replacement since the first one was already replaced.
content = content.replace('$700', 'Included');

// Block 3:
content = content.replace('https://cdn.prod.website-files.com/696f017270bc35c55e784979/69831a684b3503e9576296ff_doctors-looking-x-ray-hallway.webp', '/images/monavi/doctor_digital_prescription_1781317963970.png');
content = content.replace('General consultation', 'Enterprise Clinics');
content = content.replace('Our consultations focus on accurate diagnosis, personalized\n                  treatment plans, and compassionate patient care.', 'Complete patient lifecycle management, branch analytics, and custom integrations tailored for multi-location healthcare providers.');
content = content.replace('General physician consultation', 'Multi-branch Management'); // This is the 2nd occurrence in file now!
content = content.replace('$160', '$199/mo');
content = content.replace('Follow-up consultation', 'Custom EMR Integration'); // This is the 2nd occurrence in file now!
content = content.replace('$190', '$50/mo');
content = content.replace('Preventive health consultation', 'Unlimited SMS/WhatsApp');
content = content.replace('$150', '$40/mo');
content = content.replace('Chronic care consultation', 'Custom Role Permissions');
content = content.replace('$170', 'Included');
content = content.replace('Personalized treatment guidance', 'Dedicated Account Manager');
content = content.replace('$180', 'Included');

// Block 4:
content = content.replace('https://cdn.prod.website-files.com/696f017270bc35c55e784979/69831bdfb849c3d1f625d419_people-woman-sitting-technology.webp', '/images/monavi/patient_mobile_app_1781317975329.png');
content = content.replace('Speciality consultation', 'Add-on Modules');
content = content.replace('Specialized doctor consultations offering advanced medical\n                  expertise, precise evaluations, and tailored treatment for\n                  optimal outcomes.', 'Additional modules you can plug into your existing Monavi workspace for enhanced clinic capability.');
content = content.replace('Specialist doctor consultation', 'API Access Token');
content = content.replace('$326', '$30/mo');
content = content.replace('Condition-specific evaluation', 'Legacy Data Migration');
content = content.replace('$163', '$100 (One-time)');
content = content.replace('Treatment planning &amp; guidance', 'Custom Analytics Dashboard');
content = content.replace('$489', '$50/mo');
content = content.replace('Follow-up care support', 'White-labeled Patient App');
content = content.replace('$245', '$150/mo');
content = content.replace('Patient education &amp; counseling', 'On-Premise Deployment');
content = content.replace('$407', 'Custom Pricing');

fs.writeFileSync('src/components/PricingSection2.jsx', content);
console.log('Replaced pricing texts.');
