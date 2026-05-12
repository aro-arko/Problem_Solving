function findMajorityElement(nums) {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  count = 0;

  for (let num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  return count > nums.length / 2 ? candidate : null;
}

console.log(findMajorityElement([2, 2, 1, 1, 1, 2, 2]));
