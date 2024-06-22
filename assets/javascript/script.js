// var generateBtn = document.querySelector("#generate");
// //we use the a define variable of generateBtn
// // to create a query selecctor on the generate button.
// //The generate button is selected by the ID.


// //Here is what I learned today, that could be logged into the console.
// var studentName = "Samson" //This is a string
// var pets = 1 //This is a integer
// var funActivity = "I love cars"
// var sexyMan = true //This is a boolean

// var studentID = studentName + pets + funActivity + sexyMan

// //we console logged the studentname, number of pets, and a fun activity

// console.log(studentID)

// let ranNum = "0123456789"

// if (ranNum === "0,1,2,3,4,5,6,7,8,9,0,10")
//     {console.log (${ranNum})}

// // Math.floor(math.random())

// const number = prompt("Enter a number 1-4")

// if (number == 1){
//     console.log ("yes");
//     }
//     else if (number == 2) {
//         console.log("heck yes!");
//     }
//     else {(number === 4);
//         console.log("heckyyy")
//     }

// const randomNumber = prompt("Enter a random number")

// if (randomNumber == 1){
//     console.log("great job you created a random number")
// }
// else if( randomNumber == 2){
//     console.log("You picked a random number")
// }
// else ( randomNumber == 3);{
//     console.log("noice")
// }

// Here are some arrays that I have been messing around with

// const people = ["Sam","Josh", "Lippy", "Nippy", "Sippy"]

// if (people[0] === "Sam") {
//     console.log("This is Sam")
// }
// Here the people[0] is index of 0 which is Sam

// people[0] = "Kippy"

// if (people[0] === "Kippy") {
//     console.log("This is Kippy")
// }

// Here I used array to call and change the first name of Index of 0. Then I put
// it in a "IF" statement, then to console log "This is Kippy" if the statement is 
// true

// let randomPeople = [ "Samson", ""]

// let number = [1, 2, 3, 4];

// let multiply = [1, 2, 3, 4];

// let aNewArray = number.concat(multiply);

// console.log(aNewArray);

// Here we used concat to concat both array into a new variable


let colors = ["Red", "Green", "Purple"]

colors.splice(1,0, "Grey")
console.log(colors)

// Here we use the splice method to splice into an array and add another objects

let peopleStudents = [
    ["Sam", "Bam", "Pam"],
    ["Tam", "Clam","Sham"],
    ["Sippy", "Pippy","Nippy"]
]

// here we have an array of peopleStudents. We will input another variable in the
// array. We inserted "Ham", into index array of 1 at position 3. All index's start
// with 0.

peopleStudents [1][3] = "Ham"

console.log(peopleStudents)