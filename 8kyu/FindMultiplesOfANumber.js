const findMultiples = (integer, limit) => {
  const result = [];
  let current = integer;
  while (current <= limit) {
    result.push(current);
    current += integer;
  }
  return result;
};
