const closeCompare = (a, b, margin = 0) => {
  return a - b > margin ? 1 : b - a > margin ? -1 : 0;
};
