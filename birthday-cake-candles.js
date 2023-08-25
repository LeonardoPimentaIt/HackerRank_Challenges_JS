arr = [3, 2, 1, 3];

let max = undefined;

for (let value of arr) {
  if (arr.indexOf(value) === 0) {
    max = value;
    continue;
  } else if (value > max) {
    max = value;
  }
}
let occurrency = 0;

for (let value of arr) {
  if (value == max) {
    occurrency += 1;
  }
}

console.log(occurrency);
