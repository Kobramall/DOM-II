import './less/index.less'
const copyRight = document.querySelector("footer p");

function onMouseOver(event){
  document.body.style.color = "orange";
} 


copyRight.addEventListener('mouseover', onMouseOver);