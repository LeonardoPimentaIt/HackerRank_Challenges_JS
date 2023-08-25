# HackerRank Challenges with JS

![leonardo.correia.title](./assets/leonardo.correia.title.jpg)

Repositório com o objetivo de disponibilizar as soluções realizadas em JavaScript para os desafios do HackerRank.

## Índice

- <a href="#-desafios-realizados">Desafios realizados<a>
- <a>Tecnologias utilizadas</a>
- <a>Autor</a>

## Desafios Realizados

- [x] Plus Minus<br>
- [x] Time Converter<br>
- [x] Star Case<br>
- [x] Min Max Sum<br>
- [x] Candle<br>
- [x] Diagonal Calculate<br>

## Tecnologias utilizadas

[x] JavaScript

## Autor

Leonardo Correia Pimenta<br>
Email: leonardo.pimenta.it@gmail.com<br>

[Linkedin](https://www.linkedin.com/in/leonardo-pimenta-a2268bb9/)

## Desafios

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
