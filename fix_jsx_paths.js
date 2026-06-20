const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

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

const jsxFiles = getFiles(srcDir, '.jsx').concat(getFiles(srcDir, '.js'));

let totalFixed = 0;

jsxFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Search for any src containing image/font extensions
    const assetRegex = /src=["']([^"']+\.(svg|png|jpg|jpeg|webp|avif))["']/gi;
    
    content = content.replace(assetRegex, (match, srcPath) => {
        let newPath = srcPath;
        if (newPath.includes('%20') || newPath.includes('%28') || newPath.includes('%29') || newPath.includes(' ') || newPath.includes('(') || newPath.includes(')')) {
            newPath = newPath
                .replace(/%20/g, '_')
                .replace(/%28/g, '')
                .replace(/%29/g, '')
                .replace(/ /g, '_')
                .replace(/\(/g, '')
                .replace(/\)/g, '');
            
            console.log(`Updated path in ${path.basename(file)}: ${newPath}`);
            totalFixed++;
            return `src="${newPath}"`;
        }
        return match;
    });

    if (totalFixed > 0 && content !== fs.readFileSync(file, 'utf8')) {
        fs.writeFileSync(file, content, 'utf8');
    }
});

console.log(`Fixed ${totalFixed} ALL asset references.`);
