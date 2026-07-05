const btn = document.querySelector("#v2");

btn.onclick = function(){
    console.log("You clicked me")
}

function mouseEnetered(){
    console.log("Mouse entered");
}

btn.onmouseenter = mouseEnetered;