const validateCode = (code) => {
  let y = code.toString()[0];
  return ['1', '2', '3'].includes(y);
};
