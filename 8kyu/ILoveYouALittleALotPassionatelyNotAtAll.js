const howMuchILoveYou = (nbPetals) => {
  const data = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  return data[(nbPetals - 1) % 6];
};
