import { body } from 'msw/lib/types/context'
import './less/index.less'

const body =document.querySelector("body");
body.style.backgroundColor = "orange";


function kKey(event){
    if(event.key === "k"){
        body.classList.add("orange")
    }
}
