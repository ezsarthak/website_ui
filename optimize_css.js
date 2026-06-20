const { PurgeCSS } = require('purgecss');
const fs = require('fs');
const path = require('path');

async function optimizeCSS() {
    console.log("Running PurgeCSS...");
    
    // First, let's inject font-display: swap into globals.css
    const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
    let rawCss = fs.readFileSync(cssPath, 'utf8');
    rawCss = rawCss.replace(/@font-face\s*\{/g, '@font-face{font-display:swap;');
    fs.writeFileSync(cssPath, rawCss, 'utf8');
    
    const originalSize = fs.statSync(cssPath).size;

    const purgeCSSResult = await new PurgeCSS().purge({
        content: ['src/**/*.jsx', 'src/**/*.js'],
        css: [cssPath],
        safelist: [
            // Safe list native animation classes we'll add
            'fade-in', 'is-visible', 
            // Webflow functional classes we can't delete
            /^w-/, /^rt-/
        ],
        fontFace: true,
        keyframes: true,
        variables: true
    });

    const optimizedCss = purgeCSSResult[0].css;
    fs.writeFileSync(cssPath, optimizedCss, 'utf8');
    
    const newSize = fs.statSync(cssPath).size;
    console.log(`Original CSS Size: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`Optimized CSS Size: ${(newSize / 1024).toFixed(2)} KB`);
    console.log(`Savings: ${((originalSize - newSize) / 1024).toFixed(2)} KB`);
}

optimizeCSS().catch(console.error);
