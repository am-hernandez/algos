// First Solution
/*
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
*/

// Second Solution
function tournamentWinner(competitions, results) {
  let champ = "";
  const leaderboard = { "": 0 };

  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    const [home, away] = competitions[i];
    const winner = result === 1 ? home : away;
    updateLeaderboard(winner, 3, leaderboard);

    if (leaderboard[winner] > leaderboard[champ]) {
      champ = winner;
    }
  }

  return champ;
}

function updateLeaderboard(team, points, leaderboard) {
  if (!leaderboard[team]) {
    leaderboard[team] = 3;
  } else {
    leaderboard[team] += 3;
  }
}

module.exports = tournamentWinner;
