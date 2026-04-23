const fs = require('fs');
const file = 'src/App.tsx';
let txt = fs.readFileSync(file, 'utf8');

txt = txt.replace(/btn-gold/g, 'bg-[#234855] text-white font-extrabold hover:bg-[#1b3942] transition-colors');
txt = txt.replace(/gold-text-gradient/g, 'text-[#234855]');
txt = txt.replace(/text-gold/g, 'text-[#234855]');
txt = txt.replace(/bg-gold/g, 'bg-[#234855]');
txt = txt.replace(/var\(--gold\)/g, '#234855');
txt = txt.replace(/gold-gradient/g, 'accent-gradient');
txt = txt.replace(/rgba\(212,175,55/g, 'rgba(35,72,85');

fs.writeFileSync(file, txt);
