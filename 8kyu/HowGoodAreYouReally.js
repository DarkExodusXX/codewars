const betterThanAverage = (classPoints, yourPoints) => {
  const average = classPoints.reduce((sum, el) => sum + el, 0) / classPoints.length;
  return yourPoints > average;
};
