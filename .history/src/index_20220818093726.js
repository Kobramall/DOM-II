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

lastHeading.addEventListener("mouseover", changeH3);
