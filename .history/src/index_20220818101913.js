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

const copyRight =document.querySelector("footer p");

document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('textChange');
})

const p1 = document.querySelector(".text-content p");

function gotcha(){
    p1.textContent = "Gotcha!";
}

p1.addEventListener("dblclick", gotcha)

const p2 = p1.nextElementSibling;

function niceTry(){
    p1.textContent = "Nice Try!";
}

p1.addEventListener("dblclick", gotcha)

