// var generateBtn = document.querySelector("#generate");
// const generate = ""
// const ranNum = "0123456789"
// // //we use the a define variable of generateBtn
// // // to create a query selecctor on the generate button.
// // //The generate button is selected by the ID.

// let ranNum = "0123456789"

// const ranNum = Math.floor(Math.random() * 10) + 1
// // This is a random number of 1-10
// console.log(ranNum)

// for ( let i = 0; i < 10 -1; i++){
//     generate = generate + ranNum
// }

// //Here is what I learned today, that could be logged into the console.
// var studentName = "Samson" //This is a string
// var pets = 1 //This is a integer
// var funActivity = "I love cars"
// var sexyMan = true //This is a boolean

// var studentID = studentName + pets + funActivity + sexyMan

// //we console logged the studentname, number of pets, and a fun activity

// console.log(studentID)

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

// let colors = ["Red", "Green", "Purple"]

// colors.splice(1,0, "Grey")
// console.log(colors)

// // Here we use the splice method to splice into an array and add another objects

// let peopleStudents = [
//     ["Sam", "Bam", "Pam"],
//     ["Tam", "Clam","Sham"],
//     ["Sippy", "Pippy","Nippy"]
// ]

// // here we have an array of peopleStudents. We will input another variable in the
// // array. We inserted "Ham", into index array of 1 at position 3. All index's start
// // with 0.

// peopleStudents [1][3] = "Ham"

// console.log(peopleStudents)

// var store = {Name: "Walmart",
//             Price: "$1.99",
//             Item: ["Fruits", "Vegitables", "Meats"]

// }

// console.log(store)
// console.log(store.Name)
// console.log(store.Price)
// console.log(store.Item)
// const newStore = `${store.Name}, ${store.Price}, ${store.Item[1]}`
// // Here we are able to call objects out in a new const variable.
// console.log(newStore)

// Here we are able to give an variable an object literal that contains objects and
// arrays

// for (let i = 0; i <=10; i++) {
//     console.log(i)
// }

// here we wrote a for loop. a loop that continues to loop untill it reaches 10.

// for ( let i = 0; i < 6; i++){
//     console.log("Da ba dee da ba daa")
// }

// for (let i = 100; i > 0; i -= 10) {
//     console.log(i)
// }

// This for loop counts down by 10, starting with 100.

// const animals = [ `lions`, `tigers`, `bears`];

// // for (let i = 1; i < animals.length; I++) {
// //     console.log(i, animals[i].toUpperCase());
// // }
// // This for loop loops and prints through the array of animals.
// // (.toUpperCase()); Will make all objects in an array capitalized.

// for (let i = 0; i < animals.length; i++){
//     console.log(`I love: ${animals}`)
// }
// here we console.log

// const students = [
//     ["Jasmine", "Tiny", "John", "Skippy"],
//     ["Halo", "Kimberly", "Ashley", "Laura"],
//     ["Jessica","Samantha","Dana","Edna"]
// ]

// for( let row of students){
//     for(let stu of row){
//         console.log(stu)
//     }

// }

// const cars = [
//     ["Audi", "Volkswagen", "Bugatti"],
//     ["Honda", "Toyota", "Lexus"],
//     ["Ford", "Chevy", "Dodge"]
// ]

// for (let row of cars){
//     for(let make of row){
//         console.log(make)
//     }
// }

// Here we iterate over objects.
// We use Object.values(const) to get the values of each objects.
// We then could use this to get the average, by console loggin total divided
// by the new "Powers" created by using Object.values(carPower)
// const carPower = {
//     Honda:80,
//     Toyota:75,
//     Volkswagen:90,
//     Audi:95,
//     Mercedes:75
// }

// // for (let car in carPower) {
// //     console.log(`${car} horsepower ${carPower[car]}`)
// // }
// let total = 0;
// let powers = Object.values(carPower)
// for(let power of powers) {
//     total += power;
// }
// console.log(total / powers.length)

// for(let i = 0; i < students.length; i++){
//     const row = students[i];
//     console.log(`row #${i + 1}`)
//     for (let j = 0; j < row.length; j++){
//         console.log(row[j])
//     }
// }

// Here we have 3 arrays with 4 objects. We wanted to print out all of the names.
// So we make a for loop to loop through the array, then make another const for each rows in the array, then print out the new variable of J.
// We added a console log for each row by using template literal and calling the object of i, then incrementing + 1

// const SECRET = "Baby Llamas"

// let guess = prompt("Guess the secret code")
// while(guess != SECRET){
//     guess = prompt("Guess the secret code")
// }
// console.log("YAYYY!")

// Here we create a secret code of Baby Llamas. Then we let the guess come with a prompt.
// We then use a "WHILE" loop, that if the guess is not equal to the secret, the prompt will continue to come up.
// If the code "IS" typed in correctly into the prompt, then it will console log "YAYYY!"

let input = prompt("What would you like to do?");
const todos = [`Dishes`, `Laundery`];
while (input !== `quit` && input !== `q`) {
  if (input == `list`) {
    console.log(`999999999999999999`)
    for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
    }
            console.log(`999999999999999`)
     } else if (input === `new`) {
            const newToDo = prompt(`Ok, what is the new to do?`)
            todos.push(newToDo);
            console.log(`${newToDo} added to the list`)
        }
        input = prompt("What would you like to do?");
    }
console.log("Ok quit the app!");
