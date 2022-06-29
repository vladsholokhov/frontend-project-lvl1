import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const MAX_NUMBER = 3000;

const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const primeGameLogic = () => {
  const randomNumber = getRandomInt(1, MAX_NUMBER);

  const gameQuestion = `${randomNumber}`;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return [gameQuestion, correctAnswer];
};

const brainPrimeGame = () => {
  gameEngine(gameDescription, primeGameLogic);
};

export default brainPrimeGame;
