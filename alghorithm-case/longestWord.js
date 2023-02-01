function longestWord(input) {
  let output = input.split(" ").reduce((a, b) => (a.length > b.length ? a : b));
  return `${output} : ${output.length} karakter`;
}

console.log(longestWord("Saya sangat senang mengerjakan soal algoritma"));
