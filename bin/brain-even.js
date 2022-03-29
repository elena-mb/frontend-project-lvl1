#!/usr/bin/env node

import playTheGame from '../src/index.js';
import { getRandomNum, isEven } from './myMath.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxNum = 40;
const minNum = 1;

function game() {
  const randomNum = getRandomNum(minNum, maxNum);
  const parity = isEven(randomNum) ? 'yes' : 'no';
  return {
    question: randomNum,
    rightAnswer: parity,
  };
}

playTheGame(game, description);
