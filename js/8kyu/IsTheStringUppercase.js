String.prototype.isUpperCase = function() {
  let upperCase = true;
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== this[i].toUpperCase()) {
      upperCase = false;
      break;
    }
  }
  return upperCase;
};
