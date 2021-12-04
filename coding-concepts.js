// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
console.log(cohort.length)

// a) Your answer:

// Will log to the console the length of "Echo 2021", which is 9

// b) Verify and explain:

// It is not counting the length of cohort, but what is in the container cohort, which is "Echo 2021"

// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer:

// It will log to console the character at the third index in the string contained by the variable greeting, l, and that is the second l because the index starts at 0.

// b) Verify and explain:

console.log(greeting.slice(3,5));
//This section returns the items at indexes 3 and 4, which shows that the l that is in the third index is the second one because it is followed by the 'o'

// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer:

// It will return the string "Ruby" because Ruby is at index 1.

// b) Verify and explain:

// Verified, the array is zero indexed and calling on the variable index in the indexing is a one, so it returns Ruby.

// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer:

// It should return an error, because weekendDays is an array and you can't turn an array into all uppercase.

// b) Verify and explain:

//It returned the error that weekendDays.toUpperCase is not a function. I think that if it were to call a specific item from the array then it may work.
console.log(weekendDays[1].toUpperCase());
//Looks like that did it.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer:

// It should return number, since dataTypes is an array, and using .length on an array will get back a number, so dataTypes.length is 3 and 3 is a number.

// b) Verify and explain:

//Verified and the computer agrees that 3 is a number.
//I see now that I explained in the a) part for a lot of it
