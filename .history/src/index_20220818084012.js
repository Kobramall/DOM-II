import { body } from 'msw/lib/types/context'
import './less/index.less'

const Body =document.querySelector("body");
document.body.style.backgroundColor = "orange";


function kKey(event){
    if(event.key === "k"){
        body.classList.add("orange")
    }
}
