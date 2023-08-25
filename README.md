![leonardo.correia.title](./assets/leonardo.correia.title.jpg)

# HackerRank Challenges with JS

Repositório com o objetivo de disponibilizar as **soluções** realizadas em **JavaScript** para os desafios do HackerRank.

## Índice

- <a href="#desafios-realizados">Desafios realizados<a>
- <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a>
- <a href="#códigos">Códigos</a>
- <a href="#dados-do-autor">Dados do autor</a>

## Desafios Realizados

- [x] Solve Me First
- [x] Simple Array Sum
- [x] Compare the Triplets
- [x] A Very Big Sum
- [x] Diagonal Difference
- [x] <a href="#plus-minus">Plus Minus</a>
- [x] Staircase
- [x] Mini Max Sum
- [x] <a href="#birthday-cake-candles">Birthday Cake Candles</a>
- [x] <a href="#time-converter">Time Converter</a>

## Tecnologias utilizadas

- [x] <a href="https://developer.mozilla.org/en-US/docs/Web/javascript">JavaScript</a>

## Códigos

### Diagonal Difference

```javascript
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
```

### Mini Max Sum

```javascript
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
```

### Staircase

```javascript
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
```

### Birthday Cake Candles

```javascript
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
```

### Plus Minus

```javascript
const arr = [-4, 3, -9, 0, 4, 1];

function checkPositiveOrNegative(numberTocheck) {
  return numberTocheck > 0 ? "Positive" : "Negative";
}

function calculateRatius(arrRatiusLength, arrFullLength) {
  console.log(arrRatiusLength);
  console.log(arrFullLength);

  let ratius = Number(arrRatiusLength / arrFullLength).toFixed(6);

  console.log(ratius);
}

function plusMinus(arr) {
  let signal;
  let result = [];
  let positiveArray = [];
  let negativeArray = [];
  let zeroArray = [];

  for (let value of arr) {
    console.log(value);
    if (value === 0) {
      signal = "Zero";
      zeroArray.push(value);
    } else {
      signal = checkPositiveOrNegative(value);
      switch (signal) {
        case "Positive":
          positiveArray.push(value);
          break;
        case "Negative":
          negativeArray.push(value);
          break;
        default:
          break;
      }
    }
    console.log(result);
  }
  console.log(`Array Positivo: ${positiveArray}`);
  console.log(`Array Negativo: ${negativeArray}`);
  console.log(`Array de Zeros: ${zeroArray}`);

  console.log(`ratius positive: ${positiveArray.length}/ ${arr.length}`);

  calculateRatius(positiveArray.length, arr.length);
  calculateRatius(negativeArray.length, arr.length);
  calculateRatius(zeroArray.length, arr.length);
}

plusMinus(arr);
```

### Time Converter

```javascript
function timeConversion(s) {
  let stringArray = s.split(":");

  let hour = stringArray[0];
  let minute = stringArray[1];
  let second = String(stringArray[2]).replace("AM", "").replace("PM", "");

  if (parseInt(hour) < 12 && s.includes("PM")) {
    return `${(hour = parseInt(hour) + 12)}:${minute}:${second}`;
  } else if (parseInt(hour) >= 12 && s.includes("AM")) {
    return `0${parseInt(hour) - 12}:${minute}:${second}`;
  }
  return s.replace("AM", "").replace("PM", "");
}

console.log(timeConversion("13:10:54AM"));
```

## Dados do Autor

### Nome

Leonardo Correia Pimenta

### Contato

📧 leonardo.pimenta.it@gmail.com

### Redes Sociais

[Linkedin](https://www.linkedin.com/in/leonardo-pimenta-a2268bb9/)
