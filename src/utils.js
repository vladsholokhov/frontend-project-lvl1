const getRandomInt = (minNumber = 1, maxNumber = 100) => (
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
);

export default getRandomInt;
