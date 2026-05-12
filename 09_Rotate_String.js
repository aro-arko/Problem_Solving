function rotateString(str, k) {
  if (str.length === 0) return str;

  k = k % str.length;

  return str.slice(-k) + str.slice(0, -k);
}

console.log(rotateString("hello", 2));
