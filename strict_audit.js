const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const publicDir = path.join(__dirname, 'public');

function getFiles(dir, ext) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(f => {
        const fPath = path.join(dir, f);
        if (fs.statSync(fPath).isDirectory()) {
            results = results.concat(getFiles(fPath, ext));
        } else if (!ext || fPath.endsWith(ext)) {
            results.push(fPath);
        }
    });
    return results;
}

// Build a dictionary of ALL files in public directory with exact case paths relative to public
const exactPublicFiles = new Set();
function populateExactPublicPaths(dir, relativePath = '') {
    const list = fs.readdirSync(dir);
    list.forEach(f => {
        const fPath = path.join(dir, f);
        const rel = relativePath + '/' + f;
        if (fs.statSync(fPath).isDirectory()) {
            populateExactPublicPaths(fPath, rel);
        } else {
            exactPublicFiles.add(rel);
        }
    });
}
populateExactPublicPaths(publicDir);

const jsxFiles = getFiles(srcDir, '.jsx').concat(getFiles(srcDir, '.js'));

let errors = 0;

console.log("=== STRICT CASE-SENSITIVE AUDIT ===");

jsxFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    // Match src="/..." or src={'/...'}
    const srcRegex = /src=["'](\/[^"']+)["']/g;
    let match;
    while ((match = srcRegex.exec(content)) !== null) {
        let assetPath = match[1];
        
        // Next.js serves URL-encoded paths properly, but we must decode it to check the filesystem
        let decodedPath = assetPath;
        try {
            decodedPath = decodeURIComponent(assetPath);
        } catch (e) {
            // Ignore decoding errors
        }

        // Remove query strings if any
        decodedPath = decodedPath.split('?')[0];

        // Is it exactly in our set?
        if (!exactPublicFiles.has(decodedPath)) {
            // It might be a network URL
            if (decodedPath.startsWith('http')) continue;
            
            // Let's see if it exists case-insensitively to prove it's a case issue
            const absolutePath = path.join(publicDir, decodedPath);
            const existsCaseInsensitive = fs.existsSync(absolutePath);
            
            if (existsCaseInsensitive) {
                console.log(`[CASE ERROR] ${path.relative(__dirname, file)}:`);
                console.log(`  Requested: ${decodedPath}`);
                // Find actual exact name
                const dir = path.dirname(absolutePath);
                const base = path.basename(absolutePath);
                if (fs.existsSync(dir)) {
                    const actualFiles = fs.readdirSync(dir);
                    const actualName = actualFiles.find(f => f.toLowerCase() === base.toLowerCase());
                    console.log(`  Actual:    ${path.dirname(decodedPath)}/${actualName}`);
                }
            } else {
                console.log(`[404 ERROR] ${path.relative(__dirname, file)}:`);
                console.log(`  Requested: ${decodedPath}`);
            }
            errors++;
        }
    }
});

if (errors === 0) {
    console.log("All asset paths match exactly! No case-sensitivity issues.");
} else {
    console.log(`Found ${errors} issues.`);
}
