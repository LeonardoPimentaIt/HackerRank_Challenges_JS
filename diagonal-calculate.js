/* 
    Calcular a diferença entre a soma das diagonais.
    
    
*/

let arr = [
  [-1, 1, -7, -8],
  [-10, -8, -5, -2],
  [0, 9, 7, -1],
  [4, 4, -2, 1],
];

function sumPrimaryDiagonal(arr) {
  let result = 0;
  let limit = arr.length;
  let colun = 0;
  let arrayResult = [];

  for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
      if (colun == j) {
        result = result + arr[i][j];
        arrayResult.push(arr[i][j]);
        break;
      }
    }
    colun = colun + 1;
  }
  console.log(`Array Primary Diagonal: ${arrayResult}`);
  return result;
}

function sumSecondDiagonal(arr) {
  let result = 0;
  let limit = arr.length;
  let arrayResult = [];
  let colun = limit - 1;

  for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
      if (colun == j) {
        result = result + arr[i][j];
        arrayResult.push(arr[i][j]);
        break;
      }
    }
    colun = colun - 1;
  }
  console.log(`Array Second Diagonal: ${arrayResult}`);
  return result;
}

let primaryDiagnal = sumPrimaryDiagonal(arr);
let secondDiagonal = sumSecondDiagonal(arr);

console.log(Math.abs(primaryDiagnal - secondDiagonal));

// -1 1 -7 -8
// -10 -8 -5 -2
// 0 9 7 -1
// 4 4 -2 1
