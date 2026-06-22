// Write a function that will calculate the area of a rectangle
//   given it's width and height

//let width = 3; // This is just a variable
//let height = 4; // This is also a variable

function calculateArea(width, height) { // This is a function to calculate the area
  return width * height; // return value when function is called
}

let area = calculateArea(3, 4) //set function output to be put inside variable

console.log(area); //This displays the value 

// The code comes up with an error because the variable 
// is within the function so it does not exist in the global scope

