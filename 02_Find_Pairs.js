// const numbers = [1, 2, 3, 4, 5];
// const target = 5;

// const numbers = [7, 2, 5, 3, 1];
// const target = 8;

// const numbers = [1, 1, 2, 3, 4];
// const target = 5;

// const numbers = [2, 2, 2, 2];
// const target = 4;

// const numbers = [-5, 0, 5, 10];
// const target = 5;

// const numbers = [-1, -2, -3, 4, 5];
// const target = 2;

// const numbers = [1, 2, 3];
// const target = 10;

// const numbers = [];
// const target = 5;

// const numbers = [1];
// const target = 1;

// const numbers = [0, 0, 0, 0];
// const target = 0;

const numbers = [10, -2, 4, 7, 5, -3, 1, 8];
const target = 5;

function findPairs(numbers, target) {
  const pairs = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) {
        if (
          !pairs.some(
            (pair) =>
              (pair[0] == numbers[i] && pair[1] == numbers[j]) ||
              (pair[0] == numbers[j] && pair[1] == numbers[i]),
          )
        ) {
          pairs.push([numbers[i], numbers[j]]);
        }
      }
    }
  }
  return pairs;
}

console.log(findPairs(numbers, target));
