const arrayPlusArray = (arr1, arr2) => {
  return [...arr1, ...arr2].reduce((sum, el) => sum + el, 0);
};
