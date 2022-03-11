# Tournament Winner

A tournament just ended and you need to find the winner. Each round has a pair of teams facing off and only one team wins. The winning team is awarded 3 points. Create a function called `tournamentWinner` that takes two arrays as input and return the winner of the tournament.

The first array, called `competitions`, consists of arrays of two team names that faced each other in the round and will be in the form `["homeTeam", "awayTeam"]`. The second argument is an array called `results` whose elements will be either a `1` or a `0`. The same index at both arrays shows the teams that faced off and which of the teams won for that round. For example, at index `i`, the teams at `competitions[i]` competed against each other and the team represented by `results[i]` is the winner from that pair. Note that `results[i]` will be either a `1` or a `0`, with `1` representing a win for the `homeTeam`, and a `0` representing a win for the `awayTeam`.

### Example

**sample input**

```javascript
competitions = [
  ["Mice", "Pandas"],
  ["Pandas", "Pythons"],
  ["Pythons", "Mice"],
];
results = [1, 0, 0];
```

**sample output**

```javascript
"Mice";
```

**explanation**

```javascript
// Mice beats Pandas, Pythons beat Pandas, Mice beat Pythons
/*
Mice - 6 points
Pandas - 0 points
Pythons - 3 points
*/
```
