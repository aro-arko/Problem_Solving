function rotateArray(arr, k) {
  const n = arr.length;

  k = k % n;

  let result = new Array(n);

  for (let i = 0; i < n; i++) {
    let newIndex = (i + k) % n;
    result[newIndex] = arr[i];
  }

  return result;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
