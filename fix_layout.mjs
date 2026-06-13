import fs from 'fs';
import { JSDOM } from 'jsdom';

const html = fs.readFileSync('./heltro-clone/index.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

// 1. Extract style block
const styleBlock = document.querySelector('style') ? document.querySelector('style').innerHTML : '';

// 2. Extract HTML attributes
const htmlTag = document.documentElement;
const wfDomain = htmlTag.getAttribute('data-wf-domain');
const wfPage = htmlTag.getAttribute('data-wf-page');
const wfSite = htmlTag.getAttribute('data-wf-site');

// 3. Extract Scripts
const scripts = Array.from(document.querySelectorAll('script[src]'))
  .filter(s => s.getAttribute('src').startsWith('js/'))
  .map(s => {
      let src = s.getAttribute('src');
      return `<script src="/${src}" type="text/javascript" suppressHydrationWarning></script>`;
  }).join('\n        ');

// Construct layout.js
const layoutCode = `
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Heltro - Webflow HTML website template",
  description: "Cloned website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-wf-domain="${wfDomain}" data-wf-page="${wfPage}" data-wf-site="${wfSite}" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <script src="/js/webfont.js" type="text/javascript" suppressHydrationWarning></script>
        <style dangerouslySetInnerHTML={{ __html: \`${styleBlock}\` }} suppressHydrationWarning />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        ${scripts}
      </body>
    </html>
  );
}
`;

fs.writeFileSync('./src/app/layout.js', layoutCode);
console.log('Layout fixed successfully');
