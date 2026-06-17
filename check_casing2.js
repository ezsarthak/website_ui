const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, 'public');
const SRC_DIR = path.join(__dirname, 'src');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css')) {
        arrayOfFiles.push(path.join(dirPath, file));
      }
    }
  });
  return arrayOfFiles;
}

const allFiles = getAllFiles(SRC_DIR);

let missingFiles = [];
const regex = /(?:src|href|url)\s*=?\s*["'\(]?(\/[^"'\)\?\s#]+)/g;

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    let rawPath = match[1];
    if (rawPath.startsWith('//')) continue; 
    if (!rawPath.includes('.')) continue; 

    try {
      rawPath = decodeURIComponent(rawPath);
    } catch(e) {}

    let absoluteLocalPath = path.join(PUBLIC_DIR, rawPath);
    let dir = path.dirname(absoluteLocalPath);
    let base = path.basename(absoluteLocalPath);

    if (fs.existsSync(dir)) {
      let filesInDir = fs.readdirSync(dir);
      if (!filesInDir.includes(base)) {
        let caseMatch = filesInDir.find(f => f.toLowerCase() === base.toLowerCase());
        if (caseMatch) {
          missingFiles.push(`File ${file} references ${rawPath} but it's named ${caseMatch} on disk!`);
        } else {
          missingFiles.push(`File ${file} references ${rawPath} which doesn't exist!`);
        }
      }
    } else {
      missingFiles.push(`File ${file} references ${rawPath} but directory doesn't exist.`);
    }
  }
});

console.log(`Found ${missingFiles.length} missing/casing issues.`);
const uniqueMissing = [...new Set(missingFiles)];
uniqueMissing.forEach(m => console.log(m));
