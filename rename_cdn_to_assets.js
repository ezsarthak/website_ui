const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.js') || file.endsWith('.jsx')) {
        arrayOfFiles.push(path.join(dirPath, file));
      }
    }
  });
  return arrayOfFiles;
}

const allFiles = getAllFiles(SRC_DIR);
let count = 0;

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  if (content.includes('/cdn-images/')) {
    let newContent = content.split('/cdn-images/').join('/assets/');
    fs.writeFileSync(file, newContent, 'utf-8');
    count++;
  }
});

console.log(`Replaced in ${count} files.`);
