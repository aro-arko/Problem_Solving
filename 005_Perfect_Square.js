function isPerfectSquare(num) {
  if (num < 0) return false;

  let left = 0;
  let right = num;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let square = mid * mid;

    if (square === num) {
      return true;
    }

    if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(20));
