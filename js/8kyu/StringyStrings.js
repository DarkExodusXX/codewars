const stringy = (size) => {
  if (size === 0) return '';
  if (size === 1) return '1';
  return size % 2 === 0 ? '10'.repeat(Math.floor(size / 2)) : '10'.repeat(Math.floor(size / 2)) + '1';
};
