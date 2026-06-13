const fs = require('fs');
let css = fs.readFileSync('./src/app/globals.css', 'utf8');
css = css.replace(/url\(['"]?\.\.\/([^'"\)]+)['"]?\)/g, 'url("/$1")');
fs.writeFileSync('./src/app/globals.css', css);
