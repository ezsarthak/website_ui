import fs from 'fs';

let layoutContent = fs.readFileSync('./src/app/layout.js', 'utf8');

// Replace standard script tags with Next.js Script tags
layoutContent = layoutContent.replace(/<script src="\/js\/(.*?)".*?><\/script>/g, '<Script src="/js/$1" strategy="afterInteractive" />');

// Add import for Script if it's not there
if (!layoutContent.includes('import Script from "next/script"')) {
    layoutContent = 'import Script from "next/script";\n' + layoutContent;
}

fs.writeFileSync('./src/app/layout.js', layoutContent);
console.log("Updated layout.js to use next/script");
