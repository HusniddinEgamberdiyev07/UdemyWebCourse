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

// setTimeout(()=>{
//     document.body.style.backgroundColor = "red"

//     setTimeout(()=>{
//         document.body.style.backgroundColor = "blue"

//         setTimeout(()=>{
//             document.body.style.backgroundColor = "green"
//         }, 1500)

//     }, 1500)

// }, 1500)

function delayChangeColor(color, delay, next){
    setTimeout(()=>{
        document.body.style.backgroundColor = color;
        next && next();
    }, delay)
}

// delayChangeColor("red", 1500, ()=>{
//     delayChangeColor("blue", 1500, ()=>{
//         delayChangeColor("green", 1500);
//     })
// });


// Promises

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// fakeRequestPromise("somehwere.com")
//     .then(()=>{
//         console.log("Success 1");

//         fakeRequestPromise("somewhere.com/page1")
//             .then(()=>{
//                 console.log("success 2");
//             })
//             .catch(()=>{
//                 console.log("Failure 2");
//             })
//     })
//     .catch(()=>{
//         console.log("failure 1");
//     })


fakeRequestPromise("somehwere.com")
    .then((data)=>{
        console.log(data);
        console.log("Success 1");

        return fakeRequestPromise("somewhere.com/page1")
    })
    .then((data)=>{
        console.log(data);
        console.log("Success page1");
        
        return fakeRequestPromise("somewhere.com/page2")
    })
    .then((data)=>{
        console.log(data);
        console.log("Success page3");
    })
    .catch(()=>{
        console.log("Rejected");
    })


// Creating promise
// promise takes a callback func which has has two parameters.

const promise = new Promise((resolve, reject)=>{
    const ranNum = Math.floor(Math.random()*10);

    setTimeout(()=>{
        if(ranNum < 7) resolve("Your data");
        else reject("Error")
    }, 1000)
})
promise
    .then((data)=> console.log(data))
    .catch((err)=> console.log(err))


// better color changer

function delayChangeColorPromise(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

delayChangeColorPromise("red", 1000)
    .then(()=> delayChangeColorPromise("blue", 1000))
    .then(()=> delayChangeColorPromise("red", 1000))
    .then(()=> delayChangeColorPromise("green", 1000))
    .then(()=> delayChangeColorPromise("white", 1000))