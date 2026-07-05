for(let i =0; i<=10; i++){
    let btn = document.createElement("button");
    btn.append("Click me");
    btn.classList.add("btn");
    document.body.append(btn)

    btn.addEventListener("click", changeColor)
}

function randColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}

function changeColor(){
    let color = randColor();
    this.style.backgroundColor = color;
    this.innerText = color
}

window.addEventListener("keydown", (e)=>{
    console.log(e.code);
    console.log(e.key);
})

const form = document.querySelector("#form");
const tasks = document.querySelector("#tasks")
const task = document.querySelector("#task")

form.addEventListener("submit", function(e){
    e.preventDefault();

    const li = document.createElement("li");
    li.innerText = task.value;
    tasks.append(li)

    task.value = "";
})