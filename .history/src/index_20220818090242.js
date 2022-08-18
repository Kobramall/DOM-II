import './less/index.less'
const copyRight = document.querySelector("footer");

function onMouseOver(event){
  document.footer.style.color = "orange";
} 


copyRight.addEventListener('mouseover', onMouseOver);