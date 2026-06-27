const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?

// num is a variable that uses math.floor() that rounds down the output of the following
// output. the (maximum - minimum + 1) can be rewritten as (100 - 1 + 1) which is 100
// In other words, (Math.round() * 100) + 1. Math.round outputs a value between 0 and 1 but not 1 that is then multiplied by 100.
// Then it has 1 added to the output

// Try breaking down the expression and using documentation to explain what it means

// Math.floor() static method always rounds down and returns the largest interger 
// less than or equal to a given number. In other words, it always rounds down. 
// Math.round() is a function that pulls a random number between 0 and less than 1. 
// If a max is provided, then that becomes the new cap.

// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// The function outputs a random decimal number that is multiplied by 100 after which 1 is added to the output. 