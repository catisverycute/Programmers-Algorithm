const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const baskets = Array(N + 1).fill(0).map((_, i) => i);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  [baskets[a], baskets[b]] = [baskets[b], baskets[a]];
}

console.log(baskets.slice(1).join(' '));