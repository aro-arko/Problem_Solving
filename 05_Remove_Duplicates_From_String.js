function removeDuplicates(str) {
  let seen = new Set();
  let result = "";

  for (let char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }

  return result;
}

console.log(removeDuplicates("programming"));
