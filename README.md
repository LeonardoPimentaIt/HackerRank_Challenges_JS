# HackerRank Challenges with JS

![leonardo.correia.title](./assets/leonardo.correia.title.jpg)

Repositório com o objetivo de disponibilizar as soluções realizadas em JavaScript para os desafios do HackerRank.

## Índice

- <a href="#desafios-realizados">Desafios Realizados<a>
- <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a>
- <a href="#códigos">Códigos</a>
- <a href="#autor">Autor</a>

## Desafios Realizados

- [x] <a href="#plus-minus">Plus Minus</a>
- [x] <a href="#time-converter">Time Converter</a>
- [x] Star Case
- [x] Min Max Sum
- [x] Candle
- [x] Diagonal Calculate

## Tecnologias utilizadas

- [x] JavaScript

## Códigos

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

## Autor

Leonardo Correia Pimenta<br>
📧 leonardo.pimenta.it@gmail.com<br>

[Linkedin](https://www.linkedin.com/in/leonardo-pimenta-a2268bb9/)
