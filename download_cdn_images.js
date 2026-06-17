const fs = require('fs');
const path = require('path');
const https = require('https');

const SRC_DIR = path.join(__dirname, 'src');
const PUBLIC_IMG_DIR = path.join(__dirname, 'public', 'cdn-images');

// Ensure directory exists
if (!fs.existsSync(PUBLIC_IMG_DIR)) {
  fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });
}

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
const urlRegex = /https:\/\/cdn\.prod\.website-files\.com\/[^\s"'<]+/g;

let downloadQueue = [];

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  const matches = content.match(urlRegex);
  
  if (matches) {
    let newContent = content;
    matches.forEach(url => {
      // Create a safe filename
      // e.g. https://cdn.prod.website-files.com/696f/698d_about%20card.avif
      let decodedUrl = decodeURIComponent(url);
      let urlObj = new URL(decodedUrl);
      let safeFilename = urlObj.pathname.replace(/^\//, '').replace(/\//g, '_').replace(/[^a-zA-Z0-9_\.-]/g, '_');
      
      downloadQueue.push({ url, safeFilename, localPath: path.join(PUBLIC_IMG_DIR, safeFilename) });
      
      newContent = newContent.split(url).join(`/cdn-images/${safeFilename}`);
    });
    fs.writeFileSync(file, newContent, 'utf-8');
  }
});

// Remove duplicates from download queue
const uniqueDownloads = [];
const seenUrls = new Set();
downloadQueue.forEach(item => {
  if (!seenUrls.has(item.url)) {
    seenUrls.add(item.url);
    uniqueDownloads.push(item);
  }
});

console.log(`Found ${uniqueDownloads.length} unique images to download and replaced their URLs in source files.`);

let downloadedCount = 0;
let failedCount = 0;

function downloadNext() {
  if (uniqueDownloads.length === 0) {
    console.log(`Done! Downloaded ${downloadedCount}, Failed ${failedCount}`);
    return;
  }

  const item = uniqueDownloads.pop();
  
  if (fs.existsSync(item.localPath)) {
    // console.log(`Already exists: ${item.safeFilename}`);
    downloadedCount++;
    downloadNext();
    return;
  }

  const file = fs.createWriteStream(item.localPath);
  https.get(item.url, response => {
    if (response.statusCode === 200) {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        downloadedCount++;
        downloadNext();
      });
    } else {
      console.log(`Failed to download ${item.url}: ${response.statusCode}`);
      file.close();
      fs.unlinkSync(item.localPath);
      failedCount++;
      downloadNext();
    }
  }).on('error', err => {
    console.log(`Error downloading ${item.url}: ${err.message}`);
    file.close();
    fs.unlinkSync(item.localPath);
    failedCount++;
    downloadNext();
  });
}

// Start 5 concurrent downloads
for (let i = 0; i < 5; i++) {
  downloadNext();
}
