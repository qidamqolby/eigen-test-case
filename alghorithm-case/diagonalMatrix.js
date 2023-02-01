function diagonalMatrix(array) {
  n = array.length;
  let firstDiagonal = [];
  let secondDiagonal = [];

  for (let i = 0; i < array.length; i++) {
    firstDiagonal.push(array[i][i]);
    secondDiagonal.push(array[i][n - i - 1]);
  }

  let calculate = firstDiagonal.reduce((a, b) => a + b) - secondDiagonal.reduce((a, b) => a + b)
  let firstText = `diagonal pertama = ${firstDiagonal.join(" + ")} = ${firstDiagonal.reduce((a, b) => a + b)}`
  let secondText = `diagonal kedua = ${secondDiagonal.join(" + ")} = ${secondDiagonal.reduce((a, b) => a + b)}`
  let resultText = `maka hasilnya adalah ${firstDiagonal.reduce((a, b) => a + b)} - ${secondDiagonal.reduce((a, b) => a + b)} = ${calculate}`

  return `Matrix = ${array} \n${firstText} \n${secondText} \n${resultText}`;
}

let array = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(diagonalMatrix(array));
