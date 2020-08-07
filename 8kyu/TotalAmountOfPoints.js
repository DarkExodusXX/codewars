const points = (games) => {
  return games.reduce((points, game) => {
    let team1 = +game[0];
    let team2 = +game[2];
    if (team1 > team2) {
      return points + 3;
    } else if (team1 === team2) {
      return points + 1;
    } else {
      return points;
    }
  }, 0);
};
