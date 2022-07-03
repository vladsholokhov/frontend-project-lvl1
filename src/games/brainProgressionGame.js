import getRandomInt from '../utils.js';
import startGameEngine from '../index.js';

const PROGRESSION_MAX_START_NUMBER = 30;
const PROGRESSION_MAX_STEP = 10;
const PROGRESSION_MAX_LENGTH = 10;

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (progressionStartNumber, progressionStep, progressionMaxLength) => {
  const progression = [];
  progression[0] = progressionStartNumber;

  for (let i = 1; i <= progressionMaxLength; i += 1) {
    progression.push(progression[i - 1] + progressionStep);
  }

  return progression;
};

const generateProgressionAndHideNumber = () => {
  const progressionStartNumber = getRandomInt(0, PROGRESSION_MAX_START_NUMBER);
  const progressionStep = getRandomInt(1, PROGRESSION_MAX_STEP);
  const progression = generateProgression(
    progressionStartNumber,
    progressionStep,
    PROGRESSION_MAX_LENGTH,
  );
  const hiddenNumIndex = getRandomInt(0, progression.length - 1);
  const hiddenNumber = progression[hiddenNumIndex];
  progression[hiddenNumIndex] = '..';

  return [progression.join(' '), hiddenNumber];
};

const generateGameQuestionAndAnswer = () => {
  const [progression, hiddenNumber] = generateProgressionAndHideNumber();

  return [progression, hiddenNumber];
};

const runProgressionGame = () => {
  startGameEngine(gameDescription, generateGameQuestionAndAnswer);
};

export default runProgressionGame;
