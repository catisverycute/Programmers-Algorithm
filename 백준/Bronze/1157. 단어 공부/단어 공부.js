let fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('');
let alphaArray = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  alphaArray[input[i].toUpperCase().charCodeAt() - 65] += 1;
}
let point = 0;
let maxNumber = Math.max.apply(null, alphaArray);
let length = 0;
for (let i = 0; i < 26; i++) {
  if (alphaArray[i] == maxNumber) {
    length += 1;
    point = i;
  }
}
if (length > 1) {
  console.log('?');
} else {
  console.log(String.fromCharCode(point + 65));
}
