import { describe, it, expect } from "vitest";
import { tournamentWinner } from "../../array/tournament-winner";

describe("tournament-winner", () => {
  it("should return the winner", () => {
    const competitions = [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ];
    const results = [0, 0, 1];
    expect(tournamentWinner(competitions, results)).toBe("Python");
  });
});
