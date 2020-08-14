const dirReduc = (arr) => {
  const opposite = {
    'NORTH': 'SOUTH',
    'SOUTH': 'NORTH',
    'EAST': 'WEST',
    'WEST': 'EAST'
  }
  let j = 0;
  arr.forEach((el, i) => {
    if (arr[i+1] === opposite[el]) {
      arr.splice(i, 2);
      j++;
    }
  });
  return j === 0 ? arr : dirReduc(arr);
};
