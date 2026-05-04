const fs = require('fs');
const content = fs.readFileSync('src/data/craftsData.ts', 'utf8');

let sBalance = 0; // []
let cBalance = 0; // {}

const lines = content.split('\n');
const checkPoints = [990, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1883];

for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const line = lines[i];

    if (checkPoints.includes(lineNum)) {
        console.log(`CP Line ${lineNum}: s=${sBalance}, c=${cBalance}`);
    }

    for (const char of line) {
        if (char === '[') sBalance++;
        if (char === ']') sBalance--;
        if (char === '{') cBalance++;
        if (char === '}') cBalance--;
    }
}
console.log(`Final Balance: sBalance=${sBalance}, cBalance=${cBalance}`);
