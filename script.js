let button=document.getElementById('clicker')
let counter=0;
clicker.onclick=()=>{
    counter++
    button.innerHTML=`<h2>${counter}</h2`
}
let clear=document.getElementById("reset")
const reset=()=>{
    counter=0
    
}

clear.onclick=()=>{
    button.innerHTML=reset()
    button.innerText=`start`
}