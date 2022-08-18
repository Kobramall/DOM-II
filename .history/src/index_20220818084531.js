
import './less/index.less'

const Body = document.querySelector("body")
body.orange.style.backgroundColor = "orange"

function kKey(event){
    if(event.key === "k"){
       Body.classList.toggle("orange")
    }
}
