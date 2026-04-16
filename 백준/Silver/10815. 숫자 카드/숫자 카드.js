const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const cards = new Set(input[1].split(' ').map(Number));
const m = parseInt(input[2]);
const targets = input[3].split(' ').map(Number);

const result = targets.map(target => (cards.has(target) ? 1 : 0));

console.log(result.join(' '));
