let myleads = ["www.java.com", "www.google.com", "www.facebook.com"];
const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("button-el");
const ulEl = document.getElementById("ul-el");

console.log(ulEl);

buttonEl.addEventListener("click", function(){
    // inputEl.textContent = "WWW.mohammadriyaz.com";
    myleads.push(inputEl.value);
    console.log(myleads);
});

for(let i = 0; i < myleads.length; i++) {
    ulEl.innerHTML += "<li>" + myleads[i] + "</li>";
}