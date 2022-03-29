const getRandomNum = (min, max) => Math.floor(Math.random() * max) + min;
const isEven = (num) => num % 2 === 0;
const findGcd = (a, b) => {
  if (a === b) return a;
  if (a > b) {
    return findGcd(a - b, b);
  }
  return findGcd(a, b - a);
};
const isPrime = (a) => {
  if (a === 2) return true;
  if (a < 2 || a % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(a); i += 2) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
};

export {
  getRandomNum,
  isEven,
  findGcd,
  isPrime,
};
