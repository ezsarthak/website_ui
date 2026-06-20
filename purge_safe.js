const { PurgeCSS } = require('purgecss');
const fs = require('fs');
const path = require('path');

async function optimizeCSS() {
    console.log("Running Safe PurgeCSS...");
    
    const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
    
    // Safety check: ensure font-display is swap
    let rawCss = fs.readFileSync(cssPath, 'utf8');
    if (!rawCss.includes('font-display:swap')) {
        rawCss = rawCss.replace(/@font-face\s*\{/g, '@font-face{font-display:swap;');
        fs.writeFileSync(cssPath, rawCss, 'utf8');
    }
    
    const originalSize = fs.statSync(cssPath).size;

    const purgeCSSResult = await new PurgeCSS().purge({
        content: ['src/**/*.jsx', 'src/**/*.js', 'src/components/**/*.jsx', 'src/app/**/*.js'],
        css: ['src/app/globals.css'],
        safelist: [
            'fade-in', 
            'is-visible', 
            /^w-/, 
            /^rt-/, 
            'html', 'body'
        ],
        fontFace: true,
        keyframes: true,
        variables: true
    });

    if (purgeCSSResult && purgeCSSResult.length > 0 && purgeCSSResult[0].css) {
        let optimizedCss = purgeCSSResult[0].css;
        
        // Re-inject the native animation CSS at the end because PurgeCSS might strip it if it wasn't statically matched
        if (!optimizedCss.includes('[data-w-id]')) {
            optimizedCss += `\n[data-w-id] { opacity: 0; transform: translateY(20px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; will-change: opacity, transform; }\n[data-w-id].is-visible { opacity: 1; transform: translateY(0); }\n`;
        }

        fs.writeFileSync(cssPath, optimizedCss, 'utf8');
        const newSize = fs.statSync(cssPath).size;
        
        console.log(`Original CSS Size: ${(originalSize / 1024).toFixed(2)} KB`);
        console.log(`Optimized CSS Size: ${(newSize / 1024).toFixed(2)} KB`);
        console.log(`Savings: ${((originalSize - newSize) / 1024).toFixed(2)} KB`);
    } else {
        console.error("PurgeCSS failed to return CSS. Output was:", purgeCSSResult);
    }
}

optimizeCSS().catch(console.error);
