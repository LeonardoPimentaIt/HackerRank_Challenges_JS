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
