import { describe, expect, it } from "vitest";
import { threeNumberSum } from "../../array/three-number-sum";


describe("Three Number Sum", () => {
  it("checks the truthy value", () => {
    const array = [-8, -6, 1, 2, 3, 5, 6, 12]
    const target = 0
    const expected = [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
    expect(threeNumberSum(array, target)).toEqual(expected)
  })
})
