/**
 * Question 3: Armstrong Number
 * An Armstrong Number is a number that is equal to the sum of,
 * the power of each digit by the total number of digits.
 * For example, numbers such as 0, 1, 153, 370, 371, 407, 1634, 8208, 9474 are Armstrong numbers.
 * Write a Program to show that a number is an Armstrong.
 */

function armstrongNumber(input) {
  // convert the input to a string
  const inputString = input.toString();

  // get the length of the input
  const inputLength = inputString.length;

  // split the input into an array of digits
  const inputDigits = inputString.split("");

  // calculate the sum of the power of each digit by the total number of digits
  const sum = inputDigits.reduce((acc, digit) => {
    return acc + Math.pow(digit, inputLength);
  }, 0);

  // check if the input is an Armstrong number
  if (sum === input) {
    console.log(
      `"${input}" is an Armstrong number, the sum of the power of each digit by the total number of digits is "${sum}"`
    );
    return true;
  }

  console.log(
    `"${input}" is not an Armstrong number, the sum of the power of each digit by the total number of digits is "${sum}"`
  );
  return false;
}

// test cases

// Armstrong numbers
armstrongNumber(0);
armstrongNumber(1);
armstrongNumber(153);
armstrongNumber(370);

// Not Armstrong numbers
armstrongNumber(12);
armstrongNumber(150);
armstrongNumber(280);
armstrongNumber(3071);