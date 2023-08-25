const arr = [1, 2, 3, 4, 5];
let tempArray = [];

let max;
let min;
let sum = 0;

for (let value of arr) {
  currentIndex = arr.indexOf(value);
  for (i = 0; i < arr.length; i++) {
    if (i === currentIndex) {
      continue;
    } else {
      sum = sum + arr[i];
    }
  }
  console.log(sum);

  if (sum > max || currentIndex == 0) {
    max = sum;
  }
  if (sum < min || currentIndex == 0) {
    min = sum;
  }

  sum = 0;
}

console.log(min + " " + max);

