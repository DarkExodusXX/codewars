const correctPolishLetters = (string) => {
  const dict = {
    'ą': 'a',
    'ć': 'c',
    'ę': 'e',
    'ł': 'l',
    'ń': 'n',
    'ó': 'o',
    'ś': 's',
    'ź': 'z',
    'ż': 'z'
  };
  return string.split('').map((el) => dict[el] || el).join('');
};
