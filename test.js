/*
let myPoints = 3;

function add3points(){
    myPoints += 3;
}

function remove1point(){
    myPoints -= 1;
}

add3points();
add3points();
add3points();

remove1point();
remove1point();
remove1point();


console.log(myPoints);
*/

//objects and functions

// let person = {
//     name: 'John',
//     age: 22,
//     country: "India"
// }

// function logData(){
//     let data = person.name + " is " + person.age + " years old and lives in "+ person.country;
//     console.log(data);
// }

// logData();

//loops and arrays

// let largeCountries = ["china", "india", "USA", "Indonesia", "Pakistan"];

// console.log("The 5 largest countries in the world: ")
// for(let i=0; i<largeCountries.length; i++){
//     console.log("-" + largeCountries[i]);
// }

let largeCountries = ["Tuvalu", "india", "USA", "Indonesia", "Monaco"];

largeCountries.pop();
largeCountries.push("Pakistan");

largeCountries.shift(); //deletes the first starting item
largeCountries.unshift("China") //adds the new item from satrating
console.log(largeCountries);