function tournamentWinner(competitions, results) {
  let tournamentIdx = 0;
  let leaderboard = {};
  let highScore = 0;
  let champ;

  while (tournamentIdx < results.length) {
    const [home, away] = competitions[tournamentIdx];
    const winner = results[tournamentIdx];
    if (winner === 0 && leaderboard[away]) {
      leaderboard[away] += 3;
    } else if (winner === 0) {
      leaderboard[away] = 3;
    }
    if (winner === 1 && leaderboard[home]) {
      leaderboard[home] += 3;
    } else if (winner === 1) {
      leaderboard[home] = 3;
    }
    tournamentIdx++;
  }
  for (let key in leaderboard) {
    if (leaderboard[key] > highScore) {
      highScore = leaderboard[key];
      champ = key;
    }
  }
  return champ;
}

module.exports = tournamentWinner;
