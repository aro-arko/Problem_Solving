// const array = [1, 2, 3, 2, 1];

// const array = [7, 8, 8, 7];

// const array = [1, 2, 3, 4];

// const array = [5, 6, 7, 6];

// const array = [6];

// const array = [];

// const array = [1, 2, 2, 1];

// const array = [4, 5, 4];

// const array = [-1, -2, -1];

// const array = [-1, 2, -1, 3];

// const array = ["a", "b", "b", "a"];

// const array = ["x", "y", "z"];

function isPalindrom(array) {
  for (let i = 0; i < array.length / 2; i++) {
    if (array[i] !== array[array.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrom(array));
