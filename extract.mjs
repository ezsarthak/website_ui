import fs from 'fs';
import { JSDOM } from 'jsdom';
import HTMLtoJSX from 'htmltojsx';

const html = fs.readFileSync('./heltro-clone/index.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

// Ensure public paths are correct for images/fonts/etc
const updatePaths = (node) => {
  if (node.tagName === 'IMG' && node.getAttribute('src')) {
    let src = node.getAttribute('src');
    if (!src.startsWith('http') && !src.startsWith('/')) {
      node.setAttribute('src', '/' + src);
    }
    // Also remove srcset for simplicity, or fix paths
    if (node.getAttribute('srcset')) {
      node.removeAttribute('srcset');
    }
  }
  for (const child of node.children) {
    updatePaths(child);
  }
};
updatePaths(document.body);

const converter = new HTMLtoJSX({
  createClass: false,
});

const writeComponent = (name, node) => {
  if (!node) return;
  // Next.js uses <img ... /> self-closing handled by HTMLtoJSX
  // HTMLtoJSX handles class -> className and style string -> object
  const jsx = converter.convert(node.outerHTML);
  const code = `import React from 'react';\n\nexport default function ${name}() {\n  return (\n${jsx}\n  );\n}\n`;
  fs.writeFileSync(`./src/components/${name}.jsx`, code);
};

fs.mkdirSync('./src/components', { recursive: true });

const navbar = document.querySelector('.rt-navbar');
writeComponent('Navbar', navbar);

// Find footer, it might be an element or a class
const footer = document.querySelector('.rt-footer') || document.querySelector('footer');
writeComponent('Footer', footer);

const main = document.querySelector('main');
let sections = [];
if (main) {
  Array.from(main.children).forEach((child, i) => {
    // Determine section name if possible
    let name = `Section${i + 1}`;
    if (child.className && child.className.includes('rt-hero')) name = 'HeroSection';
    else if (child.id === 'about-us') name = 'AboutSection';
    else if (child.className && child.className.includes('rt-slider-section')) name = 'ServicesSection';
    // To avoid duplicates just suffix with index
    name = `${name}_${i}`;
    writeComponent(name, child);
    sections.push(name);
  });
}

// Generate page.js
const pageCode = `
import React from 'react';
${sections.map(s => `import ${s} from '@/components/${s}';`).join('\n')}

export default function Home() {
  return (
    <>
      <main>
        ${sections.map(s => `<${s} />`).join('\n        ')}
      </main>
    </>
  );
}
`;
fs.writeFileSync('./src/app/page.js', pageCode);

// Generate layout.js
let layoutCode = fs.readFileSync('./src/app/layout.js', 'utf8');
// remove the default Geist font stuff from layout to use Webflow's globals
layoutCode = `
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Heltro - Webflow HTML website template",
  description: "Cloned website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <script src="/js/webfont.js" type="text/javascript"></script>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <script type="text/javascript" src="/js/webflow-custom.js"></script>
      </body>
    </html>
  );
}
`;
fs.writeFileSync('./src/app/layout.js', layoutCode);

// Also need to fix globals.css paths
let css = fs.readFileSync('./src/app/globals.css', 'utf8');
css = css.replace(/url\(['"]?(fonts\/[^'"\)]+)['"]?\)/g, 'url("/$1")');
css = css.replace(/url\(['"]?(images\/[^'"\)]+)['"]?\)/g, 'url("/$1")');
fs.writeFileSync('./src/app/globals.css', css);

// We need to copy js folder if exists
if (fs.existsSync('./heltro-clone/js')) {
    fs.cpSync('./heltro-clone/js', './public/js', {recursive: true});
}

console.log('Extraction complete');
