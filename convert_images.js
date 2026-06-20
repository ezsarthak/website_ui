const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'monavi');
const srcDir = path.join(__dirname, 'src');

async function processDirectory() {
    const files = fs.readdirSync(imgDir);
    let savings = 0;
    
    console.log("Original Size | Optimized Size | Savings | File");
    console.log("-".repeat(70));

    for (const file of files) {
        if (file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
            const inputPath = path.join(imgDir, file);
            const parsed = path.parse(inputPath);
            const outputPath = path.join(imgDir, parsed.name + '.webp');
            
            const inStats = fs.statSync(inputPath);
            const inSize = inStats.size;

            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);
            
            const outStats = fs.statSync(outputPath);
            const outSize = outStats.size;
            
            const saved = inSize - outSize;
            savings += saved;
            
            console.log(`${(inSize/1024/1024).toFixed(2)} MB | ${(outSize/1024).toFixed(2)} KB | ${(saved/1024/1024).toFixed(2)} MB | ${file}`);
            
            // Delete original file
            fs.unlinkSync(inputPath);

            // Update references in src/
            updateReferences(file, parsed.name + '.webp');
        }
    }
    console.log(`\nTotal Space Saved: ${(savings / 1024 / 1024).toFixed(2)} MB`);
}

function updateReferences(oldName, newName) {
    function getFiles(dir, ext) {
        let results = [];
        const list = fs.readdirSync(dir);
        list.forEach(f => {
            const fPath = path.join(dir, f);
            if (fs.statSync(fPath).isDirectory()) {
                results = results.concat(getFiles(fPath, ext));
            } else if (fPath.endsWith(ext)) {
                results.push(fPath);
            }
        });
        return results;
    }

    const jsxFiles = getFiles(srcDir, '.jsx').concat(getFiles(srcDir, '.js'));
    jsxFiles.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        const searchRegex = new RegExp(oldName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
        const encodedSearchRegex = new RegExp(encodeURIComponent(oldName).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
        
        let changed = false;
        if (searchRegex.test(content) || encodedSearchRegex.test(content)) {
            let newContent = content.replace(searchRegex, newName);
            newContent = newContent.replace(encodedSearchRegex, encodeURIComponent(newName));
            fs.writeFileSync(file, newContent, 'utf8');
        }
    });
}

processDirectory().catch(console.error);
