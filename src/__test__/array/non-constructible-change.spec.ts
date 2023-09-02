import { describe, it, expect } from "vitest";
import { nonConstructibleChange } from "../../array/non-constructible-change";

describe("Non Constructible Change", () => {
  it("Non Constructible Change", () => {
    const changes = [5, 7, 1, 1, 2, 3, 22];
    const result = 20;

    expect(nonConstructibleChange(changes)).toBe(result);
  });
});
