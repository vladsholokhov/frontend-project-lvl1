import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"!';

const isEven = (num) => num % 2 === 0;

const evenGameLogic = () => {
  const randomNumber = getRandomInt();
  const gameQuestion = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [gameQuestion, correctAnswer];
};

const brainEvenGame = () => {
  gameEngine(gameDescription, evenGameLogic);
};

export default brainEvenGame;
