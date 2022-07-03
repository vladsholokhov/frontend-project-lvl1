import getRandomInt from '../utils.js';
import startGameEngine from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"!';

const isEven = (num) => num % 2 === 0;

const generateGameQuestionAndAnswer = () => {
  const randomNumber = getRandomInt();
  const gameQuestion = String(randomNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [gameQuestion, correctAnswer];
};

const runBrainEvenGame = () => {
  startGameEngine(gameDescription, generateGameQuestionAndAnswer);
};

export default runBrainEvenGame;
