/**
 * Renders the social card to public/og.png. Run with `npm run og` whenever the
 * name or tagline changes — the output is committed, so builds stay dependency-free.
 */
import { Resvg } from '@resvg/resvg-js';
import { writeFileSync, readFileSync } from 'node:fs';

const W = 1200;
const H = 630;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const name = 'Amrullah Amiri';
const tagline = 'I build things that have to work on Monday morning.';
const foot = 'Computer science · Concord, California';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#FBFAF7"/>
  <rect x="40" y="40" width="${W - 80}" height="${H - 80}" fill="none" stroke="#E3DFD5" stroke-width="1"/>
  <text x="88" y="150" font-family="Fraunces" font-size="19" fill="#6B675C" letter-spacing="4.6">PORTFOLIO</text>
  <text x="84" y="330" font-family="Fraunces" font-size="112" fill="#16150F">${esc(name)}</text>
  <rect x="88" y="386" width="64" height="2" fill="#B4432B"/>
  <text x="88" y="452" font-family="Newsreader" font-style="italic" font-size="34" fill="#3A382F">${esc(tagline)}</text>
  <text x="88" y="546" font-family="Fraunces" font-size="22" fill="#6B675C">${esc(foot)}</text>
</svg>`;

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: W },
  font: {
    fontFiles: ['./assets/fonts/fraunces.ttf', './assets/fonts/newsreader-italic.ttf'],
    loadSystemFonts: false,
    defaultFontFamily: 'Fraunces',
  },
});

writeFileSync('./public/og.png', resvg.render().asPng());
const bytes = readFileSync('./public/og.png').length;
console.log(`public/og.png — ${W}x${H}, ${(bytes / 1024).toFixed(0)}KB`);
