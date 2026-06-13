import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import HTMLtoJSX from 'htmltojsx';

const routes = [
  '/about',
  '/service',
  '/service-detail/healthcare',
  '/appointment-schedule',
  '/specialists',
  '/specialist/larkin-jomes',
  '/style-guide',
  '/changelog',
  '/license',
  '/blog-one',
  '/blog-two',
  '/blog-three',
  '/blog-post/mind-body-and-wellness-advice-for-everyday-living',
  '/contact',
  '/pricing'
];

const converter = new HTMLtoJSX({ createClass: false });

const updatePaths = (node) => {
  if (node.tagName === 'IMG' && node.getAttribute('src')) {
    let src = node.getAttribute('src');
    // For external CDNs, we can just leave the URL. 
    // If it's relative, we would need to download it, but Webflow mostly uses absolute CDNs.
    if (!src.startsWith('http') && !src.startsWith('/')) {
      node.setAttribute('src', '/' + src);
    }
    if (node.getAttribute('srcset')) {
      node.removeAttribute('srcset');
    }
    // Remove bare alt attributes to fix React warning
    if (node.hasAttribute('alt') && node.getAttribute('alt') === '') {
        node.setAttribute('alt', 'image');
    }
  }
  for (const child of node.children) {
    updatePaths(child);
  }
};

const writeComponent = (name, node) => {
  if (!node) return;
  const jsx = converter.convert(node.outerHTML);
  // Basic cleanup for bare alt={true} just in case
  const cleanJsx = jsx.replace(/\balt=\{true\}/g, 'alt=""').replace(/\balt\b(?!\s*=)/g, 'alt=""');
  const code = `import React from 'react';\n\nexport default function ${name}() {\n  return (\n${cleanJsx}\n  );\n}\n`;
  fs.writeFileSync(`./src/components/${name}.jsx`, code);
};

async function processRoute(route) {
  console.log(`Fetching ${route}...`);
  try {
    const res = await fetch(`https://heltro.webflow.io${route}`);
    const html = await res.text();
    
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // Extract page id
    const pageId = document.documentElement.getAttribute('data-wf-page');
    
    // Extract style block
    const styleBlock = document.querySelector('style') ? document.querySelector('style').innerHTML : '';
    
    // Process main content
    const main = document.querySelector('main');
    if (!main) {
      console.warn(`No <main> tag found for ${route}`);
      return;
    }
    
    updatePaths(main);
    
    // Safe route name for component prefix
    const routePrefix = route.split('/').filter(Boolean).map(s => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, '')).join('');
    
    let sections = [];
    Array.from(main.children).forEach((child, i) => {
      let name = `${routePrefix}Section${i + 1}`;
      writeComponent(name, child);
      sections.push(name);
    });
    
    // Generate page.js
    const pageDir = path.join('./src/app', route);
    fs.mkdirSync(pageDir, { recursive: true });
    
    const pageCode = `
import React from 'react';
import WebflowPageId from '@/components/WebflowPageId';
${sections.map(s => `import ${s} from '@/components/${s}';`).join('\n')}

export default function ${routePrefix}Page() {
  return (
    <>
      <WebflowPageId pageId="${pageId}" />
      <style dangerouslySetInnerHTML={{ __html: \`${styleBlock.replace(/`/g, '\\`')}\` }} suppressHydrationWarning />
      <main>
        ${sections.map(s => `<${s} />`).join('\n        ')}
      </main>
    </>
  );
}
`;
    fs.writeFileSync(path.join(pageDir, 'page.js'), pageCode);
    console.log(`Successfully generated ${route}`);
    
  } catch (err) {
    console.error(`Failed to process ${route}:`, err);
  }
}

async function run() {
  for (const route of routes) {
    await processRoute(route);
  }
  console.log('All pages extracted successfully.');
}

run();
