import readlineSync, { question } from 'readline-sync';

const MAX_ROUNDS = 3;

const startGameEngine = (gameDescription, gameQuestionAndAnswer) => {
  console.log('Welcome to Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const [gameQuestion, correctAnswer] = gameQuestionAndAnswer();
    console.log(`Question: ${gameQuestion}`);
    const answer = question('Your answer: ');

    if (answer !== correctAnswer.toString()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGameEngine;
