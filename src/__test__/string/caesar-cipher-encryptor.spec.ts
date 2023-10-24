import { describe, it, expect } from "vitest";
import {
  caesarCipherEncryptor,
  caesarCipherWithArray,
} from "../../string/caesar-cipher-encryptor";

describe("Caesar Cipher Encryptor Check", () => {
  it("Checks the truthy value", () => {
    expect(caesarCipherEncryptor("xyz", 54)).toContain("zab");
    expect(caesarCipherEncryptor("ABC", 54)).toContain("CDE");
  });

  it("Checks falsy values", () => {
    expect(caesarCipherEncryptor("xyz", 2)).not.toBe("asd");
  });
});

describe("Caesar Cipher Encryptor Check With Array", () => {
  it("Checks the truthy value", () => {
    expect(caesarCipherWithArray("xyz", 54)).toContain("zab");
  });

  it("Checks falsy values", () => {
    expect(caesarCipherWithArray("xyz", 2)).not.toBe("asd");
  });
});
