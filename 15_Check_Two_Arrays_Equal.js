function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freq = {};

  for (let item of arr1) {
    freq[item] = (freq[item] || 0) + 1;
  }

  for (let item of arr2) {
    if (!freq[item]) {
      return false;
    }

    freq[item]--;
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));
