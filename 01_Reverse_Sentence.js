const word = "Hello World";

function reverseWord(word) {
  const wordList = word.split(" ");
  let reversedSentence = "";
  reversedSentence = wordList.reverse().join(" ");
  return reversedSentence;
}

console.log(reverseWord(word));
