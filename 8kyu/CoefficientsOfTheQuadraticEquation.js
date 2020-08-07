const quadratic = (x1, x2) => {
  const arr = [];
  arr.push(1);
  arr.push(-x1 + -x2);
  arr.push(x1 * x2);
  return arr;
};