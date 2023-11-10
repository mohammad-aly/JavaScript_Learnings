// localStorage.setItem("myData", "wwww.example.com");
// let name = localStorage.getItem("myData");
// console.log(name);
// localStorage.clear();


// let myStores = ["www.example.com"];

// myStores = JSON.stringify(myStores);
// myStores = JSON.parse(myStores);
// myStores.push("wwww.example.com");

// console.log(myStores);

let myStores = `["www.example.com"]`;

// console.log(typeof myStores);

//1)turn the myLeads string into array
myStores = JSON.parse(myStores);

//2) insert another example into an array
myStores.push('www.example2.com');

//3) turn the myLeads array into string 
myStores = JSON.stringify(myStores);

//4) log out which type using typeof
console.log(typeof myStores);


