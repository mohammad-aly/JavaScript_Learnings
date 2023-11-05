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