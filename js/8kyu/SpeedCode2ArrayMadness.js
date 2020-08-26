const arrayMadness = (a, b) => {
  return a.reduce((sum, el) => sum + Math.pow(el, 2), 0) > b.reduce((sum, el) => sum + Math.pow(el, 3), 0);
};
