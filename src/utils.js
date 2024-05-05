// Your code here
function reverseString(string) {
    return string.split("").reverse().join("");
  }
  
  export function isPalindrome(word) {
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error("Input must contain only alphabetic characters");
    }
    const lowerCaseWord = word.toLowerCase();
    return lowerCaseWord === reverseString(lowerCaseWord);
  }
  