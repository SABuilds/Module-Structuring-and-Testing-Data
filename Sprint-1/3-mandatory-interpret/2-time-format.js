const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const movieRuntime = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(movieRuntime);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// There are 6 

// b) How many function calls are there?

// There is 1

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// The % is a remainder operator. In this instance it divides the variable totalMinutes by 60 and outputs the remainder

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// The movielength subtracted by the remaining seconds which is then divided by 60
// The output of the brackets makes the length of the movie a number divisible by 60 in order to find out how many whole
// minutes the movie is. 

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// It represents the length in hours then the remaining minutes followed by the seconds.
// It transforms the total length in seconds to an hour:minute:second format.
// I would call the variable movieRuntime. 

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
