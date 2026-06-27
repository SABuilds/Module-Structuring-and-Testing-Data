const cardNumber = '4533787178994213';
const last4Digits = cardNumber.slice(-4);

console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work

// I predict the reason why it won't work is because the slice can not use a negative integer

// Then run the code and see what error it gives.

// The error I got was that cardNumber.slice is not a functions

// Consider: Why does it give this error? Is this what I predicted? If not, what's different?

// I still believe the reason why this error is given is that a negative number is within the function parameter 
// What is different is that the error given states that cardnumber.slice is not a function. Now that I think about it 
// it could be that its because it is not defined as a string of characters. Usually characters should

// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// I added '' to the string of numbers which then allowed the slice function to work as intended. 
