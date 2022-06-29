import readlineSync, { question } from 'readline-sync';

const MAX_ROUNDS = 3;

const gameEngine = (gameDescription, gameLogic) => {
  console.log('Welcome to Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const [gameQuestion, correctAnswer] = gameLogic();
    console.log(`Question: ${gameQuestion}`);
    const answer = question('Your answer: ');

    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
