interface Scores {
  [key: string]: number;
}
/**
 * Tournament winner finder
 *
 * Time Complexity: O(n) where n is number of matches or results (same thing)
 *
 * Space Complexity: O(k) where k is number of teams
 */
export function tournamentWinner(array: string[][], results: number[]): string {
  let scores: Scores = { "": 0 }; // because our curr best team is "" in start
  let currBestTeam = "";
  for (let i = 0; i < array.length; ++i) {
    let winningTeam = "";
    const [homeTeam, awayTeam] = array[i];
    const result = results[i];

    if (result === 1) winningTeam = homeTeam;
    else winningTeam = awayTeam;

    if (!scores[winningTeam]) scores[winningTeam] = 0;

    scores[winningTeam] = scores[winningTeam] + 1;

    if (scores[winningTeam] > scores[currBestTeam]) currBestTeam = winningTeam;
  }
  return currBestTeam;
}
