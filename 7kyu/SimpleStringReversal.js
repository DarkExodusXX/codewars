const solve = (str) => {
  const strArr = str.split('');
  const sr = str.replace(/ /g, '').split('').reverse();
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === ' ') {
      sr.splice(i, 0, ' ');
    }
  }
  return sr.join('');
};