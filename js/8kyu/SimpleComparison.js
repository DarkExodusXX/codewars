const add = (a, b) => {
  a = typeof a === 'number' ? a : +a;
  b = typeof b === 'number' ? b : +b;
  return a === b;
};
