const sumArray = (array) => {
  if (array == null || array.length < 2) return 0;
  return array.reduce((sum, el) => sum + el, 0) - Math.max(...array) - Math.min(...array);
};
