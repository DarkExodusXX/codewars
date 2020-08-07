const pointsPer48 = (ppg, mpg) => {
  return Math.floor(ppg / mpg * 48 * 10) / 10 || 0;
};
