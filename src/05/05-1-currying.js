function multiply(a, b) {
  return a * b;
}

function multiplyTwo(a) {
  return multiply(a, 2);
}

function multiplyX(x) {
  return function (a) {
    return multiply(a, x);
  };
}
// arrow func
// const multiplyX = (x) => (a) => multiply(a, x);

const multiplyThree = multiplyX(3);
const multiplyFour = multiply(4);

const result1 = multiplyThree(3); // 3 * 3 = 9;
const result2 = multiplyFour(3); // 4 * 3 = 12

const result11 = multiplyX(3)(3);
const result22 = multiplyX(4)(3);

// => ((x * a) * b) + c
// a = 2, b = 3, c = 4
const equation = (a, b, c) => (x) => x * a * b + c; //currying func
const formula = equation(2, 3, 4);
const x = 10;
const result = formula(x);
