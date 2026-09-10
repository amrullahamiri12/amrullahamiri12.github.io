/**
 * Renders /resume to public/amrullah-amiri-resume.pdf using the site's own print
 * stylesheet, so the file and the web page can never drift apart.
 *
 * Requires a preview server: `npm run build && npx astro preview --port 4323`.
 */
import { chromium } from 'playwright';

const URL = process.env.RESUME_URL ?? 'http://localhost:4323/resume';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(URL, { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'print' });
await page.waitForTimeout(1500);
await page.pdf({
  path: './public/amrullah-amiri-resume.pdf',
  format: 'Letter',
  margin: { top: '16mm', right: '15mm', bottom: '16mm', left: '15mm' },
});
await browser.close();
console.log('public/amrullah-amiri-resume.pdf');
