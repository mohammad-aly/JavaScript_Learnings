let player = {
    name : "Riyaz",
    chips : 124
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
// console.log(cards);

playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    let random = Math.floor(Math.random()*13)+1;

    if(random === 1){
        return 11;
    }
    else if(random > 10){
        return 10;
    }

    return random;
}

function startGame() {
    isAlive = true;
    let first = getRandomCard();
    let second = getRandomCard();
    cards = [first, second];
    sum = first + second;

    renderGame();
}

function renderGame() {

    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: " + sum;

    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += (cards[i] + " ");
    }

    if(sum <= 20){
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21){
        message = "wohoo! you've got Blackjack! ";
        hasBlackJack = true;
    }
    else{
        message = "You're out of the game! ";
        isAlive = false;
    }

    // console.log(message);
    
    messageEl.textContent = message;
}

function newCard() {
    if(hasBlackJack === false && isAlive === true){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}