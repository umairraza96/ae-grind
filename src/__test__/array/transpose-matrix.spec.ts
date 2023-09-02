import { describe, it, expect } from "vitest";
import { transposeMatrix } from "../../array/transpose-matrix";

describe("Transpose Matrix", () => {
  it("Checks the truthy Value", () => {

    const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const result = [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

    expect(transposeMatrix(array)).toEqual(result)
  })
})
