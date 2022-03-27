#!/usr/bin/env node

import playTheGame from '../src/index.js';

const description = 'What number is missing in the progression?';
const maxNum = 30;
const getRandomNum = (max) => Math.floor(Math.random() * max);

function game() {
  const firstNum = getRandomNum(maxNum);
  const step = getRandomNum(8) + 1;
  const progression = [firstNum];
  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  const missingIndex = getRandomNum(10);
  const missingNum = progression[missingIndex];
  progression[missingIndex] = '..';
  return {
    question: `${progression.join(' ')}`,
    rightAnswer: missingNum.toString(),
  };
}

playTheGame(game, description);
