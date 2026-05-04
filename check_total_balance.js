
import fs from 'fs';
const content = fs.readFileSync('src/data/craftsData.ts', 'utf8');
const lines = content.split('\n');
let sBalance = 0;
let cBalance = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let char of line) {
    if (char === '[') sBalance++;
    if (char === ']') sBalance--;
    if (char === '{') cBalance++;
    if (char === '}') cBalance--;
  }
}
console.log(`Final Balance: sBalance=${sBalance}, cBalance=${cBalance}`);
