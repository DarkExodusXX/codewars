const firstNonConsecutive = (arr) => {
  let i = 1;
  while (arr[i] === arr[i-1] + 1 && i <= arr.length) {
    i++;
  }
  return i === arr.length ? null : arr[i];
};
