#!/usr/bin/env node

import playTheGame from '../src/index.js';

const isEven = (num) => num % 2 === 0;
const getRandomNum = (maxNum) => Math.floor(Math.random() * maxNum);
const maxRandomNum = 40;

function game() {
  const randomNum = getRandomNum(maxRandomNum);
  const parity = isEven(randomNum) ? 'yes' : 'no';
  return {
    question: randomNum,
    rightAnswer: parity,
  };
}
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

playTheGame(game, description);
