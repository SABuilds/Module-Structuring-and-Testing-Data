const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
); // Removes p from the string 

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); 

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 3. Removes p from the string 
// 8. Defines length of padded string to be 3 and pads it with 0 but since 399 is 3 characters,
// it will be not added.
// 9. Pound gets defined as the first character in the string of paddedPenceNumberString.
// This is because 100p is £1. 
// 10. The padded number string then has its string called beginning at index 0 which means the first character
// and ending at the length of the string subtracted by 2 which in other words is 3 - 2 = 1.
// Therefore the const pound is declared as the first character which is 3
// 14. Pence becomes defined as the paddedPenceNumberString (399) substring total length (3) subtracted by 2. 
// it is then given a total length of 2 and padded with 0. As the result of the substring being 1, the string begins at the 2nd character which is 9. 
// The string becomes 99. As the length is 2, 0 is dropped off. 
// 18. console.log outputs the value of pounds after the £ character followed by a . then the value of the pence variable
// We get a value of £3.99
