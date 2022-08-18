import './less/index.less'


const heading = document.querySelector("h1");

function changeH1(){
    heading.textContent = "Hello world";
}

heading.addEventListener("click", changeH1);

const subHeading = document.querySelector("h2");

function changeH2(){
    subHeading.textContent = "Enjoy you're ride";
}

subHeading.addEventListener("click", changeH2);

const lastHeading = document.querySelector(".content-destination h2");

function changeH3(){
    lastHeading.textContent = "Any where in the world";
}

lastHeading.addEventListener("click", changeH3);


document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('textChange');
})

const p1 = document.querySelector(".text-content p");

function gotcha(){
    p1.textContent = "Gotcha!";
}

p1.addEventListener("dblclick", gotcha)

const p2 = p1.nextElementSibling

function niceTry(){
    p2.textContent = "Nice Try!";
}

p2.addEventListener("dblclick", niceTry);

const p3 = document.querySelector(".text-content:nth-of-type(2) p")

function youThought(){
    p3.textContent = "You thought!";
}

p3.addEventListener("dblclick", youThought);

function kKey(event){
    if(event.key === "k"){
        document.classList.toggle("backgroundChange1");
    }
}

document.addEventListener("keydown", kKey);

