// Arrays - orrdered list of items

let feauteredPosts = [
    "check out my new Github status",   //0
    "search me in Linkedin",            //1
    "I've Just re-launched my portfolio"//2
]

console.log(feauteredPosts[0]);
console.log(feauteredPosts[1]);
console.log(feauteredPosts[2]);

//different data types in an array
let array = ["You're going to jannah", 45, true];

//pushing data into an array
let numbers = [2, 4, 6];
numbers.push(10);

console.log(numbers);

let message = "You're going to jannah";
feauteredPosts.push(message);
// console.log(feauteredPosts.length);
console.log(feauteredPosts);

// feauteredPosts.pop(message);
feauteredPosts.pop(); //removes last element
console.log(feauteredPosts);

