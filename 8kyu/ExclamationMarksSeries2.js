const remove = (s) => {
  let i = s.length - 1;
  const arr = s.split('');
  while (arr[i] === '!') {
    arr.pop();
    --i;
  }
  return arr.join('');
};
