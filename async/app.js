// Callstack

function add(a, b){
    return a+b;
}

function isEven(){
    return add(2,3) % 2 === 0 ? true : false
}

function show(){
    return `hello ${isEven()}`
}

show();

// show -> show isEven -> show isEven add
// show isEven 5
// show false
// hello false


// Callback

console.log("Hello")

setTimeout(function(){ // Js gives this to web browser. When 3 seconds pass web browser adds this to callstack nad js does it.
    console.log("3 seconds");
}, 3000);

console.log("Bye");

// Hello
// Bye
// 3 seconds


// Nesting setTimeouts

