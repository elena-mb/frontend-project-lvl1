#!/usr/bin/env node

import playTheGame from '../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxNum = 15;
const getRandomNum = (max) => Math.floor(Math.random() * max) + 1;

function game() {
  const num = getRandomNum(maxNum);

  const isPrime = (a) => {
    if (a < 2 || a % 2 === 0) return false;
    if (a === 2) return true;
    for (let i = 3; i < Math.sqrt(a); i += 2) {
      if (a % i === 0) {
        return false;
      }
    }
    return true;
  };
  const answer = isPrime(num) ? 'yes' : 'no';
  return {
    question: `${num}`,
    rightAnswer: answer,
  };
}

playTheGame(game, description);
