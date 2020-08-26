const checkExam = (array1, array2) => {
  const result = array2.reduce((sum, el, index) => {
    if (el === '') {
      return sum;
    } else {
      if (el === array1[index]) {
        return sum += 4;
      } else {
        return --sum;
      }
    }
  }, 0);
  return result > 0 ? result : 0;
};
