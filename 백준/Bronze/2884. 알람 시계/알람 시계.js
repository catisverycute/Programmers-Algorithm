let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let hour = Number(input[0].split(" ")[0]);
let min = Number(input[0].split(" ")[1]);

if ( min < 45) {
    hour -= 1;
    min += 15;
    if (hour < 0) hour = 23;
} else {
    min -= 45;
}
console.log(hour+" "+min);