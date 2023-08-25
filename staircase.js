const n = 6;

function staircase(n) {
  let array = [];

  for (let i = n; i > 0; i--) {
    for (let j = n; j > 0; j--) {
      if (j >= n) {
        array[j] = "#";
      } else {
        array[j] = " ";
      }
    }

    console.log(array.join(""));
    n = n - 1;
  }
}

staircase(2);
