// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// The const should be defined before the console.log as the computer runs code line by line
// Therefore it can't output using cityOfBirth as it only 'finds' out the variable after console.log
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
