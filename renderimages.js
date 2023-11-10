const images=[
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
]

const cotainer = document.getElementById("container");

function renderImage(){
    let imsDOM = "";
    for(let i=0; i<images.length; i++){
        imgsDOM += `<img alt="Employee" class="team-img" src="${images[i]}">`
    }

    container.innerHTML = imsDOM;
}

renderImage();