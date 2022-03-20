#!/usr/bin/env node
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import readlineSync from 'readline-sync';
import introduction from '../src/cli.js';

const isEven = (num) => num % 2 === 0;
const getRandomNum = (maxNum) => Math.floor(Math.random() * maxNum);
const maxRandomNum = 40;

function getQandA() {
  const randomNum = getRandomNum(maxRandomNum);
  const parity = isEven(randomNum) ? 'yes' : 'no';
  return {
    question: randomNum,
    rightAnswer: parity,
  };
}

function guessParity() {
  const userName = introduction();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const roundsInTheGame = 3;
  for (let round = 1; round <= roundsInTheGame; round += 1) {
    const { question: randomNumber, rightAnswer } = getQandA();
    const usersAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
    if (usersAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`); // change user to userName
}
guessParity();
export default guessParity;
