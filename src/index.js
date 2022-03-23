import readlineSync from 'readline-sync';
import introduction from './cli.js';

// game is a function that returns { question, rightAnswer }
// description is info on how to play the game
function playTheGame(game, description) {
  const userName = introduction();
  console.log(description);
  const roundsInTheGame = 3;
  for (let round = 1; round <= roundsInTheGame; round += 1) {
    const { question, rightAnswer } = game();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export default playTheGame;
