import readlineSync from 'readline-sync';

function introduction() {
    console.log('brain-games\nWelcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
}
export default introduction;