
import fs from 'fs';
const content = fs.readFileSync('src/data/craftsData.ts', 'utf8');
const lines = content.split('\n');
let sBalance = 0;
let cBalance = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const oldS = sBalance;
  for (let char of line) {
    if (char === '[') sBalance++;
    if (char === ']') sBalance--;
    if (char === '{') cBalance++;
    if (char === '}') cBalance--;
  }
  
  // After a key line e.g. 'key': [, sBalance should be 1 (if it was 0 before)
  // Inside levels, it will go up and down.
  // We want to see the balance at the END of each line.
  if (line.match(/^\s+['"]([a-z0-9_]+)['"]:\s+\[/)) {
     console.log(`Line ${i+1}: Start of segment. sBalance=${sBalance}`);
  }
  if (line.match(/^\s+\],/)) {
     console.log(`Line ${i+1}: End of segment? sBalance=${sBalance}`);
  }
}
console.log(`Final Balance: sBalance=${sBalance}, cBalance=${cBalance}`);
