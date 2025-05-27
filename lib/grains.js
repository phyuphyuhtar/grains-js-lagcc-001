'use strict';

function square(n) {
  if (n < 1 || n > 64) {
    throw new Error("square must be between 1 and 64");
  }
  return BigInt(2) ** BigInt(n - 1);
}

function total() {
  let totalGrains = BigInt(0);
  for (let i = 1; i <= 64; i++) {
    totalGrains += square(i);
  }
  return totalGrains;
}

module.exports = {
  square,
  total
};
