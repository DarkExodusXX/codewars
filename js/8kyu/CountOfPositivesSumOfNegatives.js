const countPositivesSumNegatives = (input) => {
  if (input == null || input.length === 0) return [];
  const arr = [];
  arr.push(input.filter((el) => el > 0).length);
  arr.push(input.reduce((sum, el) => el < 0 ? sum + el : sum, 0));
  return arr;
};
