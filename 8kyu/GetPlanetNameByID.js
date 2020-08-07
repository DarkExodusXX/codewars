const getPlanetName = (id) => {
  const data = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
  return data[id - 1];
};
