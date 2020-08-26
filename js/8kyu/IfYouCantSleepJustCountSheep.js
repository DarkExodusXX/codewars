const countSheep = (num) => {
  const result = [];
  for (let i = 1; i <= num; i++) {
    result.push(`${i} sheep...`);
  }
  return result.join('');
};
