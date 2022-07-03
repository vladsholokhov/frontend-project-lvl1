import getRandomInt from '../utils.js';
import startGameEngine from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return getGcd(num2, num1 % num2);
};

const generateGameQuestionAndAnswer = () => {
  const randomNumber1 = getRandomInt();
  const randomNumber2 = getRandomInt();
  const gameQuestion = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getGcd(randomNumber1, randomNumber2);

  return [gameQuestion, correctAnswer];
};

const runGcdGame = () => {
  startGameEngine(gameDescription, generateGameQuestionAndAnswer);
};

export default runGcdGame;
