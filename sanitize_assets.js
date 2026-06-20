const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
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

const allPublicFiles = getFiles(publicDir);
const renames = [];

// 1. Sanitize filenames
allPublicFiles.forEach(file => {
    const dir = path.dirname(file);
    const oldName = path.basename(file);
    
    // Replace spaces, parentheses, and % with underscores
    let newName = oldName
        .replace(/\s+/g, '_')
        .replace(/\(/g, '')
        .replace(/\)/g, '')
        .replace(/%/g, '_');
    
    if (oldName !== newName) {
        const newPath = path.join(dir, newName);
        fs.renameSync(file, newPath);
        renames.push({
            oldPath: file.replace(publicDir, '').replace(/\\/g, '/'),
            newPath: newPath.replace(publicDir, '').replace(/\\/g, '/')
        });
        console.log(`Renamed: ${oldName} -> ${newName}`);
    }
});

// 2. Update JSX files
const jsxFiles = getFiles(srcDir, '.jsx').concat(getFiles(srcDir, '.js'));

jsxFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    renames.forEach(({oldPath, newPath}) => {
        // Find literal string match
        if (content.includes(oldPath)) {
            content = content.split(oldPath).join(newPath);
            changed = true;
        }
        
        // Find encoded string match (e.g. spaces -> %20)
        // Webflow often exported things with %20 in JSX
        const encodedOldPath = oldPath.split('/').map(segment => encodeURIComponent(segment)).join('/');
        if (content.includes(encodedOldPath)) {
            content = content.split(encodedOldPath).join(newPath);
            changed = true;
        }

        // Sometimes it's mixed: /fonts/Foo%20Bar%20%281%29.svg
        // Let's create a very aggressive matcher
        const basename = path.basename(oldPath);
        const encodedBasename = encodeURIComponent(basename);
        if (content.includes(encodedBasename)) {
             content = content.split(encodedBasename).join(path.basename(newPath));
             changed = true;
        }
    });

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
    }
});

console.log(`Sanitized ${renames.length} assets.`);
