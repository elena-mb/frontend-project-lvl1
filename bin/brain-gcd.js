#!/usr/bin/env node

import playTheGame from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';
const maxNum = 40;
const getRandomNum = (max) => Math.floor(Math.random() * max);

function game() {
  const num1 = getRandomNum(maxNum) + 3;
  const num2 = getRandomNum(num1) + 2;
  const findGcd = (a, b) => {
    if (a === b) return a;
    if (a > b) {
      return findGcd(a - b, b);
    }
    return findGcd(a, b - a);
  };
  return {
    question: `${num1} ${num2}`,
    rightAnswer: findGcd(num1, num2).toString(),
  };
}

playTheGame(game, description);
