
import fs from 'fs';
const content = fs.readFileSync('src/data/craftsData.ts', 'utf8');
let openBrackets = 0;
let closeBrackets = 0;
let openBraces = 0;
let closeBraces = 0;

for (let i = 0; i < content.length; i++) {
  if (content[i] === '[') openBrackets++;
  if (content[i] === ']') closeBrackets++;
  if (content[i] === '{') openBraces++;
  if (content[i] === '}') closeBraces++;
}

console.log(`Square Brackets: [=${openBrackets}, ]=${closeBrackets}, diff=${openBrackets - closeBrackets}`);
console.log(`Curly Braces: {=${openBraces}, }=${closeBraces}, diff=${openBraces - closeBraces}`);
