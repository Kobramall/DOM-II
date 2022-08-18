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

