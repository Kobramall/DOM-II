import './less/index.less'
const copyRight = document.querySelector("footer");

function onMouseOver(event){
  document.footer.style.color = "orange";
} 


copyRight.addEventListener('mouseover', onMouseOver);

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
