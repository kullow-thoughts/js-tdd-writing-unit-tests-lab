// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  const testCases = [
    { word: "racecar", expected: true },
    { word: "car", expected: false },
    { word: "RaCecar", expected: true },
    { word: "race car", expected: null, errorExpected: true },
    { word: "", expected: null, errorExpected: true }
  ];

  testCases.forEach(({ word, expected, errorExpected }) => {
    it(`returns ${expected} for "${word}"`, () => {
      if (errorExpected) {
        expect(() => isPalindrome(word)).toThrow();
      } else {
        const result = isPalindrome(word);
        expect(result).toBe(expected);
      }
    });
  });
});