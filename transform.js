const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Fondo Principal
content = content.replace(/from-sm?\[\#0a0b0e\]|to-sm?\[\#0a0b0e\]|bg-gradient-to-b from-\[\#0a0b0e\] to-\[var\(--bg\)\]/g, 'bg-[#1a1a1a]');
content = content.replace(/bg-gradient-to-b from-\[var\(--bg\)\] to-\[\#0a0b0e\]/g, 'bg-[#1a1a1a]');

// Text Colors
content = content.replace(/text-white/g, 'text-[#f3f4f6]');
content = content.replace(/text-\[var\(--fg-muted\)\]/g, 'text-gray-400');

// Card/Modal/Form Backgrounds
content = content.replace(/card /g, 'bg-[#262626] border border-gray-700 backdrop-blur-sm ');
content = content.replace(/input-dark /g, 'bg-[#262626] border border-gray-700 text-[#f3f4f6] focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] ');

// Accent Color (Buttons)
content = content.replace(/btn-gold /g, 'bg-[#CCFF00] text-black font-extrabold hover:bg-[#b3e600] transition-colors ');

// Accent Color (Key Words / Links)
content = content.replace(/gold-text-gradient/g, 'text-[#CCFF00]');
content = content.replace(/text-gold/g, 'text-[#CCFF00]');
content = content.replace(/bg-\[var\(--gold\)\]\/60/g, 'bg-[#CCFF00]/60');
content = content.replace(/bg-gold/g, 'bg-[#CCFF00]');
content = content.replace(/border-2 border-\[var\(--gold\)\]/g, 'border-2 border-[#CCFF00]');
content = content.replace(/text-red-400/g, 'text-red-400'); // Keep errors

fs.writeFileSync('src/App.tsx', content);
