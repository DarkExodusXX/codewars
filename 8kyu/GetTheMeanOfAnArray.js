const getAverage = (marks) => {
  return Math.floor(marks.reduce((sum, el) => sum + el, 0) / marks.length);
};
