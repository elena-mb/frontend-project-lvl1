#!/usr/bin/env node

import playTheGame from '../src/index.js';
import { getRandomNum, findGcd } from './myMath.js';

const description = 'Find the greatest common divisor of given numbers.';
const maxNum = 40;
const minNum = 3;

function game() {
  const num1 = getRandomNum(minNum, maxNum);
  const num2 = getRandomNum(minNum - 1, num1);
  return {
    question: `${num1} ${num2}`,
    rightAnswer: findGcd(num1, num2).toString(),
  };
}

playTheGame(game, description);
