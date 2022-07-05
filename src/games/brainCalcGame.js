import startGameEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (operator, num1, num2) => {
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

const generateGameQuestionAndAnswer = () => {
  const randomNumber1 = getRandomInt();
  const randomNumber2 = getRandomInt();
  const operator = operators[getRandomInt(0, operators.length - 1)];

  const gameQuestion = `${randomNumber1} ${operator} ${randomNumber2}`;
  const correctAnswer = calculate(operator, randomNumber1, randomNumber2);

  return [gameQuestion, correctAnswer];
};

const runBrainCalcGame = () => {
  startGameEngine(gameDescription, generateGameQuestionAndAnswer);
};

export default runBrainCalcGame;
