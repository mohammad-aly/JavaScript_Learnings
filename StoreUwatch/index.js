let myleads = [];
const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("button-el");
const ulEl = document.getElementById("ul-el");

buttonEl.addEventListener("click", function(){
    myleads.push(inputEl.value);
    inputEl.value = "";
    renderLeads();
});

function enterele(event) {

    if(event.key === 'Enter'){
        myleads.push(inputEl.value);
        inputEl.value = "";
        renderLeads();
    }
}

function renderLeads() {

    let listItems = "";
    for(let i = 0; i < myleads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myleads[i] +"'>" + myleads[i] + "</a></li>";
        listItems += `
        <li>
            <a target='_blank' href='${myleads[i]}'>
                ${myleads[i]}
            </a>
        </li>
        `;
    }
    ulEl.innerHTML = listItems;
}