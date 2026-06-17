console.log("Start") // this runs 1st
setTimeout(()=>{
    console.log("Hi") // this runs 3rd
}, 3000) // 3000 miliseconds = 3seconds
console.log("GoodBye") // this runs 2nd

// set Interval returns id and we can store it on a variable.
const s1Id = setInterval(()=>{
    console.log("Hi");
}, 3000) // every 3s function will be executed.

setTimeout(()=>{
    clearInterval(s1Id)
}, 9000)

// const nums = [1,2,3,4,5,6,7, 8, 9, 10, 11];
// const evens = nums.filter((num)=>num%2===0);

// sum all values from an array
// accumulator is final result

const nums = [4, 10, 13, 20];
let sum = nums.reduce((accumulator, currentValue)=>accumulator+currentValue, 100)
console.log(sum);

// call, accumulator, currentValue, retrun value
//  1       4              10           14
//  2       14             13           27
//  3       27             20           27

let user = {
    name:"Husniddin",
    hi:()=>{
        console.log(this) // window
    },
    bye:function(){
        console.log(this) // user
        let func = ()=>{
            console.log(this) // user
        }
        func()
    }
}
user.hi()
user.bye()