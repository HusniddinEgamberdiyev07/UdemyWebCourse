const btn = document.querySelector("#v2");
const btn2 = document.querySelector("#v3");


btn.onclick = function(){
    console.log("You clicked me")
}

function mouseEnetered(){
    console.log("Mouse entered");
}

btn.onmouseenter = mouseEnetered;

btn2.addEventListener("click", ()=>console.log("v3 clicked"))
btn2.addEventListener("click", ()=>console.log("v3 clicked once"), {once:true})