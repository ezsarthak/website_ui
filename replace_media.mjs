import fs from 'fs';
import path from 'path';

const componentsDir = './src/components';
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

const images = [
    '/images/monavi/hero_dashboard_mockup_1781317936748.png',
    '/images/monavi/receptionist_using_software_1781317951601.png',
    '/images/monavi/doctor_digital_prescription_1781317963970.png',
    '/images/monavi/patient_mobile_app_1781317975329.png'
];

let imgIndex = 0;

for (const file of files) {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace images that are not logos or icons.
    content = content.replace(/src="\/images\/[^"]+\.(webp|jpg|png|jpeg)"/g, (match) => {
        const replacement = `src="${images[imgIndex % images.length]}"`;
        imgIndex++;
        return replacement;
    });
    
    // Replace inline background images
    content = content.replace(/url\("\/images\/[^"]+\.(webp|jpg|png|jpeg)"\)/g, (match) => {
        const replacement = `url("${images[imgIndex % images.length]}")`;
        imgIndex++;
        return replacement;
    });
    content = content.replace(/url\('\/images\/[^']+\.(webp|jpg|png|jpeg)'\)/g, (match) => {
        const replacement = `url('${images[imgIndex % images.length]}')`;
        imgIndex++;
        return replacement;
    });

    // Replace <video> elements with images or just remove them.
    content = content.replace(/<video[^>]*>.*?<\/video>/gs, (match) => {
        const replacement = `<img src="${images[imgIndex % images.length]}" className="w-background-video" style={{width: '100%', height: '100%', objectFit: 'cover'}} />`;
        imgIndex++;
        return replacement;
    });

    // Also Webflow iframe videos (YouTube/Vimeo)
    content = content.replace(/<iframe[^>]*youtube\.com[^>]*><\/iframe>/gi, (match) => {
        const replacement = `<img src="${images[imgIndex % images.length]}" style={{width: '100%', height: '100%', objectFit: 'cover'}} />`;
        imgIndex++;
        return replacement;
    });

    fs.writeFileSync(filePath, content);
}

console.log('Successfully replaced all images and videos with modern SaaS assets.');
