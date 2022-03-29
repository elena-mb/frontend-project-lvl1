#!/usr/bin/env node

import playTheGame from '../src/index.js';
import { getRandomNum, isPrime } from './myMath.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxNum = 15;
const minNum = 1;

function game() {
  const num = getRandomNum(minNum, maxNum);
  const answer = isPrime(num) ? 'yes' : 'no';
  return {
    question: `${num}`,
    rightAnswer: answer,
  };
}

playTheGame(game, description);
