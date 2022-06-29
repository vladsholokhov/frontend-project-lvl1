import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getCorrectAnswer = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const calcGameLogic = () => {
  const randomNumber1 = getRandomInt();
  const randomNumber2 = getRandomInt();
  const operator = operators[getRandomInt(0, operators.length - 1)];

  const gameQuestion = `${randomNumber1} ${operator} ${randomNumber2}`;
  const correctAnswer = getCorrectAnswer(operator, randomNumber1, randomNumber2);

  return [gameQuestion, correctAnswer];
};

const brainCalcGame = () => {
  gameEngine(gameDescription, calcGameLogic);
};

export default brainCalcGame;
