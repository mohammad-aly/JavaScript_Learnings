
//intialize the count as zero initially
//listen for the clicks on the increment button
//increment the count variable when clicking the button
//change the count-btn in the html to reflect the new count

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-ppl");
// console.log(countEl);

let count = 0;

function increment(){

    count += 1;
    // countEl.innerText = count;
    countEl.textContent = count;

}

function save(){

    let countStr = count + '-';
    // saveEl.innerText += countStr;
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;

}

