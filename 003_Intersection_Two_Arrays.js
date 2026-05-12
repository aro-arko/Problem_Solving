function intersection(arr1, arr2) {
  let set1 = new Set(arr1);

  let result = [];

  for (let item of arr2) {
    if (set1.has(item)) {
      result.push(item);

      set1.delete(item);
    }
  }

  return result;
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
