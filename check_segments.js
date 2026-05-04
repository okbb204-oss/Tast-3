
import fs from 'fs';
const content = fs.readFileSync('src/data/craftsData.ts', 'utf8');
const lines = content.split('\n');
const segmentMatches = [...content.matchAll(/^\s+['"]([a-z0-9_]+)['"]:\s+\[/gm)];

for (let i = 0; i < segmentMatches.length; i++) {
  const match = segmentMatches[i];
  const nextMatch = segmentMatches[i+1];
  const start = match.index;
  const end = nextMatch ? nextMatch.index : content.length;
  const segment = content.substring(start, end);
  
  let s = 0, c = 0;
  for (let char of segment) {
    if (char === '[') s++;
    if (char === ']') s--;
    if (char === '{') c++;
    if (char === '}') c--;
  }
  console.log(`Segment ${match[1]}: s=${s}, c=${c}`);
}
