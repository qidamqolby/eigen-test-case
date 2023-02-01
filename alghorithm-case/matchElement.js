function matchElement(a, b) {
  let output = [];
  output.length = b.length

  for (let i = 0; i < b.length; i++) {
    output[i] = 0;
    for (let j = 0; j < a.length; j++) {
        if (b[i] === a[j]) {
           output[i] += 1
        }
    }
    
  }
  let textOutput = []
  for (let i = 0; i < output.length; i++) {
    if (output[i] === 0) {
    textOutput.push(` kata '${b[i]}' tidak ada pada INPUT`)
    } else {
    textOutput.push(` kata '${b[i]}' terdapat ${output[i]} pada INPUT`)
    }
  }
  return `INPUT = [${a}] \nQUERY = [${b}] \nOUTPUT = [${output}] karena${textOutput}.`;
}

let INPUT = ['xc', 'dz', 'bbb', 'dz']  
let QUERY = ['bbb', 'ac', 'dz']  
console.log(matchElement(INPUT, QUERY));