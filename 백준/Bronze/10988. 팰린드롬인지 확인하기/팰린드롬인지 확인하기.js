const input = require("fs").readFileSync(0, "utf-8").trim();
const len = input.length;
let result = [];

for (let i = 0; i < len / 2; i++) {
  input[i] === input[len - 1 - i] ? result.push(1) : result.push(0);
}

result.some((item) => item === 0) ? console.log(0) : console.log(1);