const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/components');

const replacements = {
    "Mind, body, and wellness advice for everyday living": "Strategies to reduce reception chaos and improve flow",
    "Expert insights for lasting health and well-being": "Expert insights for maximizing patient retention",
    "Your trusted source for health and wellness insights": "Your trusted source for clinic automation insights",
    "Balance your life, boost your well-being": "Optimize your clinic, boost your revenue",
    "Inspiring your journey toward holistic healthy living": "Inspiring your journey toward automated clinic growth",
    "Wellness tips for a stronger body and peaceful mind": "Software tips for a stronger clinic and peaceful team",
    "Quality medical care focused on long-term patient wellness": "Quality software focused on long-term clinic growth",
    "Compassionate healthcare focused on lasting patient wellness": "Smart automation focused on lasting patient retention",
    "Reliable healthcare dedicated to patient wellness and care": "Reliable systems dedicated to clinic efficiency and flow",
    "Trusted expertise in quality healthcare": "Trusted expertise in clinic management",
    "advancements shaping the future of healthcare and patient": "advancements shaping the future of clinic flow and patient",
    "Discover the latest improvements in medical care enhancing": "Discover the latest improvements in automation enhancing",
    "patient awareness, safety, and better healthcare decisions": "patient awareness, retention, and better clinic decisions",
    "Explore innovations transforming modern medical care,": "Explore innovations transforming modern clinic management,",
    "healthcare outcomes worldwide.": "clinic efficiency worldwide.",
    "Your compassionate partner in quality healthcare": "Your smart partner in clinic efficiency",
    "At our healthcare center, we are committed to delivering": "At MONAVI, we are committed to delivering",
    "advanced medical care that places your health comfortable.": "advanced software that makes your clinic run perfectly.",
    "Modern medical care focused on achieving better patient health": "Modern software focused on achieving better clinic flow",
    "Combining advanced technology with compassionate care for": "Combining advanced technology with smart workflows for",
    "improved patient recovery and long-term wellness.": "improved patient retention and long-term growth.",
    "Trusted health articles": "Trusted clinic management articles",
    "Medical news": "Clinic news",
    "How our clinic culture enhances patient care": "How our software enhances clinic flow",
    "that quality healthcare begins with a patient-first mindset": "that clinic success begins with a workflow-first mindset",
    "diagnosis, personalized treatment plans, and seamless care": "queue tracking, personalized follow-ups, and seamless flow",
    "experiences. By combining medical expertise with empathy, we": "experiences. By combining software expertise with empathy, we",
    "create an environment where patients feel heard, respected,": "create an environment where patients feel valued, informed,",
    "and supported every step of the way.": "and supported every step of the way.",
    "Enhancing clinical workflows for better care": "Enhancing clinical workflows for better flow",
    "delivering timely, accurate, and patient-centered care. We focus": "delivering timely, accurate, and organized management. We focus",
    "improve coordination, and enhance overall patient experience.": "improve coordination, and enhance overall patient retention.",
    "and consistent healthcare outcomes across every service we": "and consistent growth outcomes across every service we",
    "By integrating modern medical systems and structured care": "By integrating modern software systems and structured workflows",
    "treatments more effectively. This allows healthcare": "clinics more effectively. This allows clinic",
    "professionals to spend more time with patients while maintaining": "teams to spend more time on care while maintaining",
    "administrative burden, and maintain high standards of medical": "administrative burden, and maintain high standards of clinic",
    "Healthcare solutions focused on efficiency and growth": "Software solutions focused on efficiency and growth",
    "Our clinic delivers thoughtfully designed healthcare solutions": "Our platform delivers thoughtfully designed software solutions",
    "growth. Every process is built to improve patient flow, reduce": "growth. Every feature is built to improve patient flow, reduce",
    "care.": "management.",
    "help healthcare teams work more effectively, ensure accurate": "help clinic teams work more effectively, ensure accurate",
    "care delivery, and create a seamless experience for": "tracking, and create a seamless experience for",
    "patients—today and as the clinic continues to grow.": "patients—today and as the clinic continues to scale.",
    "Reliable medical insights, expert guidance, and evidence-based": "Reliable SaaS insights, expert guidance, and evidence-based",
    "information to support informed decisions and better patient": "information to support informed decisions and better clinic",
    "health outcomes.": "revenue outcomes.",
    "Stay informed with timely medical discoveries and": "Stay informed with timely software updates and",
    "early detection, timely treatment, and better daily wellness": "early adoption, timely tracking, and better daily management",
    "treatment quality, patient safety, and long-term health": "queue quality, patient retention, and long-term revenue",
    "Understand changes in common health symptoms to support": "Understand changes in clinic workflows to support",
    "Trusted medical insights": "Trusted management insights"
};

const replaceInFile = (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    for (const [key, value] of Object.entries(replacements)) {
        // use regex with global flag to replace all occurrences
        const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        content = content.replace(regex, value);
    }
    
    // Also replace image sources
    content = content.replace(/src="https:\/\/cdn\.prod\.website-files\.com\/[^"]+"/g, 'src="/images/monavi/hero_dashboard_mockup_1781317936748.png"');
    // For local src images that we want to replace in blogs
    content = content.replace(/src="\/698[^"]+"/g, 'src="/images/monavi/patient_mobile_app_1781317975329.png"');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
};

const processDirectory = (dir) => {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            // only process target files
            const filename = path.basename(fullPath);
            if (filename.startsWith('Blog') || filename.startsWith('Section') || filename.startsWith('Changelog')) {
                replaceInFile(fullPath);
            }
        }
    });
};

processDirectory(directoryPath);
console.log('Done.');
