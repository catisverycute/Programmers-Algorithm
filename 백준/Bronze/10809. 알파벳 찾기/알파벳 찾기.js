const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let result = '';

for (let i = 97; i <= 122; i++) {
  const char = String.fromCharCode(i);
  const index = input.indexOf(char);
  result += index + ' ';
}

console.log(result.trim());