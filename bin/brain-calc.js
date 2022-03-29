#!/usr/bin/env node

import playTheGame from '../src/index.js';
import { getRandomNum } from './myMath.js';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const maxNum = 30;
const minNum = 0;

function game() {
  const operation = operations[getRandomNum(minNum, operations.length)];
  const num1 = getRandomNum(minNum, maxNum);
  const num2 = getRandomNum(minNum, num1);
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

playTheGame(game, description);
