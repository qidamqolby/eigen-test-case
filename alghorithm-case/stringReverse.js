function stringReverse(input) {
  let regex = /[0-9]/g;
  let inputObject = {};
  let output

  for (let i = 0; i < input.length; i++) {
    if (input[i].match(regex)) {
      inputObject[i] = input[i];
    }
  }
  
  output = input.match(/[a-zA-Z]/g).reverse()
  
  for (const key in inputObject) {
    output.splice(parseInt(key), 0, inputObject[key]);
  }
  return output.join("");
}


console.log(stringReverse("NEGIE1"));

