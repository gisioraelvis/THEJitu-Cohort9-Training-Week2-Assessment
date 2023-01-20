/**
 * Question:
 * A palindrome is a word, number, phrase, or other sequence of characters
 * which reads the same backward as forward.
 * Write a program that checks whether a word is a palindrome or not.
 * Examples of a palindromes: madam, level, noon
 */

function palindromeChecker(word) {
  // trim the word to remove any trailing spaces and
  // convert to lowercase to avoid case sensitivity
  word = word.trim().toLowerCase();

  // reverse the word
  const reversedWord = word.split("").reverse().join("");

  // check if the word is a palindrome
  if (word === reversedWord) {
    console.log(
      `"${word}" is a palindrome because reversed: "${reversedWord}" is the same word`
    );
    return true;
  }

  console.log(
    `"${word}" is not a palindrome because reversed: "${reversedWord}" is not the same word`
  );
  return false;
}

// test cases
palindromeChecker("madam"); // palindrome
palindromeChecker("level"); // palindrome
palindromeChecker("noon"); // palindrome
palindromeChecker("race"); // not a palindrome
