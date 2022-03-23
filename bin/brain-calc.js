#!/usr/bin/env node

import playTheGame from '../src/index.js';

const operations = ['+', '-', '*'];
const maxNum = 30;
const getRandomNum = (max) => Math.floor(Math.random() * max);

function game() {
  const operation = operations[getRandomNum(operations.length)];
  const num1 = getRandomNum(maxNum);
  const num2 = getRandomNum(num1);
  const calcResult = () => {
    if (operation === '+') return num1 + num2;
    if (operation === '-') return num1 - num2;
    return num1 * num2;
  };
  return {
    question: `${num1} ${operation} ${num2}`,
    rightAnswer: calcResult().toString(),
  };
}
const description = 'What is the result of the expression?';

playTheGame(game, description);
