# JavaScript

## Basics

### Primitive Types.

1. Number -> Positive numbers, negative numbers, whole numbers, decimal numbers

    We can do math operations such as addition ( + ), subtraction ( - ), multiplication ( * ), devision ( / ), modulo ( % ), power ( ** )
    We have order of operations PEMDAS (Parentheses, Exponents)

    NaN -> Not a Number. Represents something is not a number. 0/0 === NaN. typeof NaN === Number.

2. String -> Represent texts. Wrapped in quotes.

3. Boolean -> true or false

4. NUll

5. Undefined

6. Symbol

7. BigInt

### Variables & let

Giving a name to a value and storing it to access it later and use it.

Variable value type can be changed.

**Naming rules:**

1. Names can contain letters, numbers, underscore, digits

2. No spaces.

3. We cannot start with number

4. Case-sensitive

**Common practise to name variables:**

1. snake_case

2. camelCase ( best one )

3. isLoggedIn -> something like this for booleans.

4. Avoid one letter variable names.

**Syntax:**

```js 
let someName = value;
```

**Updating**

```js
someName = value;
```

```js 
someName = someName + 5;
someNAme += 5;
```

**Decrement**

```js
let num = 10;
num-- // 10
num // 9
--num // 8
```

**Increment**

```js
let num = 10;
num++ // 10
num // 11
++num // 12
```

### Const

const variable cannot be changed.

**Syntax:**

```js 
const someName = value;
```

### Var

Var is old shit and don't use it

**Syntax:**

```js 
var someName = value;
```

### String Basics

We can use ", ' to create Strings.

### String indices & length

Strings are indexed. Every character has its own number and we can access it using that number.
It starts from 0.

chicken<br>
0123456

```js
let something = "There is something";
something[4]; // e
something.length; // 18. how many characters in the string. Length is a property of string.

let hello = " hello";

something + hello; // + will combine two strings. There is something hello

1 + "string"; // "1string"
```


### String methods

Every string comes with built in methods.
We can chain methods. 

**Syntax:**

something.method();

something.method().method();

```js 
helloWorld.toUpperCase().trim();
```

**1. toUpperCase()** -> Non-destructive method (It does not change original)

**2. toLowerCase()** -> Non-destructive method

**3. trim()** -> Removes white spaces from start and end. Non-destructive method


Many methods requires arguments. Arguments are inputs which accept a value.

something.method(arg);

**4. indexOf(match)** -> gives us first index of first matched element. -1 not found.

```js
let a = "this is my text and this is yours";
a.indexOf("is"); // 2
```

**5. slice(indexStart, indexEnd)** -> Extracts section of string. Non-destructive method. We can omit ending index and if we do that our ending point will be till the end of string. indexEnd + 1.

```js
a.slice(5, 10); // 'is my'
a.slice(11); // from 11 till the end. 'text and this is yours'
```

**6. replace(search, replace)** -> Replace only first match. Non-destructive method. replaceAll can replace all of them but some browsers do not suppport it.

```js
a.replace("my", "die"); // 'this is die text and this is yours'
```

**7. repeat(count)** -> Repeats text as many times as count.

```js
a.repeat(2) // 'this is my text and this is yoursthis is my text and this is yours'
```

### String template literals

```js
let price = 10;
let product = "something";

let msg = `You bought ${product} for ${price}$`;
```

### Random numbers & math object

**Math** is an built in object which has methods and properties.

**Math methods:**

**1. floor()** -> rounds down. 21.90 = 21

**2. ceil()** -> rounds up. 21.3 = 22

**3. round()** -> rounds. 21.5 = 22

**Random**

Getting number from 1 to 9

```js
let rNum = Math.floor(Math.random()*10)+1;
```

Getting random number from 20 to 24

```js
let rNum = Math.floor(Math.random()*5)+20;
```

### Undefined & null

**Undefined** -> No value assigned yet (automatic).

**Null** -> Intentionally empty value (manual assignment).

### Comparison operators

**1. >** -> greater than

**2. <** -> less than

**3. >=** -> greater than or equal to

**4. >=** -> less than or equal to

**5. ==** -> equal to, not strict (checks values and does not care about types)

**6. ===** -> equal to, strict (checks both values and types)

**7. !=** -> not equal to, not strict

**8. !==** -> not e qual to, strict

### Conditionals

```js
if(condition1){
    code // code will be executed if condition1 is true
}else if(condition2){
    code // code will be executed if condition2 is true and condition1 is false
}else if(condition3){
    code // code will be executed if condition2 is true and condition1, condition2 are false
}else{
    code // code will be executed if all conditions are false
}
```

```js
if(condition1){
    if(condition2){ // if will be executed if condition1 is true
        code // code will be executed if condition2 is true
    }
}
```


we can nest conditionals.

### Truth-y and False-y values

**Falsy values:** -> false, 0, "", null, undefined, NaN. Everything else is **Truthy values**.

### And
**&&** -> True && True === True. Everything else is False.
If left is false js will not look at the right side. It called short circuit.

### Or 
**||** -> False && False === False. Everything else is True.

### Not

**!** -> True === False, False === True.

### Switch

```js
switch (key) {
    case value:
        code
        break;

    case value2:
    case value3:
        code
        break;

    default:
        code
        break;
}
```

### Array Basics

Array id data structure. Data structure is a collection of data. Arrays are ordered collection of values.

Syntax for creating arrays

```js

let arr1 = []; // empty array.
let arr2 = [1,2,3]; // array of numbers.
let arr3 = ["hello", 1, true, null]; // array of mixed types.
arr3.length; // shows how many elements which array has.
```

Arrays are indexed.You can access array elemnets using indexes. It starts with 0. If element does not exists we will get undefined.

```js
let arr1 = ["apple", "banana", "orange"];
arr1[2]; // "banana"
arr1[10]; // undefined
arr1[2][0] // "b"
```
We can update array element using index.

```js
let nums = [1,2,3];
nums[1] = 100; // nums === [1. 100, 3]
```

We can add new element using index.

```js
let nums = [1,2,3];
nums[3] = 100; // nums === [1. 2, 3, 100]
```

### Array methods

**1. Push(arg)** -> add to end, it changes original array.

```js 
let arr = [1,2,3];
arr.push(4); // [1,2,3,4]
arr.push(5,6); // [1,2,3,4,5,6]
```

**2. Pop()** -> remove from end

```js 
let arr = [1,2,3];
arr.pop(); // [1,2]
```

**3. Shift()** -> remove from start

```js
let arr = [1,2,3];
arr.shift(); // [2,3]
```

**4. Unshift(arg)** -> add to start

```js 
let arr = [1,2,3];
arr.unshift(0); // [0,1,2,3]
```

**5. Slice(start[, end])** -> Copies portion on an array.

```js
let arr = [1,2,3,4,5,6];
console.log(arr.slice(2, 5)); // [3, 4, 5]
console.log(arr.slice(2)); // [3, 4, 5, 6]
```

**6. Splice(start[, deleteCount[, item1[, item2]]])** -> Removes/replaces elements. Changes original.

Adding:

```js
let arr = [1,2,5,6,7,8];
arr.splice(2, 0, 3, 4);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]
```
Replacing:

```js
arr.splice(4, 4, 50,60,70,80)
console.log(arr); // [1, 2, 3, 4, 50, 60, 70, 80]
```

**7. Concat(arg)** -> Merge arrays. Returns new array but does not change original one.

```js
let arr = [1,2,3];
let arr2 = [4,5];
let arr3 = [6,7];
let arr4 = arr.concat(arr2, arr3); // [1, 2, 3, 4, 5, 6, 7]
```

**8. Includes(arg)** -> Look for a value. Returns true or false.

```js 
let arr = [1,2,3];
console.log(arr.includes(2)); // true
```

**9. IndexOf(arg)** -> Find index of the first match. Not found -1.

```js 
let arr = [1,2,3,2];
console.log(arr.indexOf(2)); // 1
```

**10. Join()** -> Creates a string from an array.

**11. Reverse()** -> It reverses an array. It changes an original array.

```js
let arr = [1,2,3];
arr.reverse() // [3, 2, 1]
```

**12. Sort()** -> It sorts and changes original.

### Refrences types and equality tests

```js
[1] === [1] // false
[1] == [1] // false
```

Arrays store refrences and == or === checks refrences with arrays

```js
let nums = [1,2];
let numsCopy = nums; // copying refrence
nums === numsCopy; // true
nums == numsCopy; // true
```

If I do anything to nums, numsCopy will change too.

```js
nums.push(4);
console.log(numsCopy); // [1,2,4]
```

### Arrays & const

If anything stores refrence we can use const to declare them.

### Multi-dimensional Arrays

We can store arrays inside other array.

```js 
let arr = [
    [1,2],
    [3,4]
]
arr[1][0]; // 3
```

### Objects basics.

Objects are data structure. Objects stores data in key and value pairs which is property. We access values using keys.

**Creating object literals**

```js
{ key:"value", key2:"value2" }
```

**Accessing value**

```js
let key = "age"
const person = {userName:"Husniddin", [key]:19};
person["userName"]; // "Husniddin"
person.userName; // "Husniddin"
person[key];
```

**Adding new property**

```js
let person = {};
person.name = "Husniddin"
person["age"] = 19;
```

**Modifying property**

```js 
let person = {name:"Husniddin", age:19};
person.name = "Someone"
person["age"] = 20;
```

All keys are converted to strings.

### For loops

**Syntax**

for(    
    [initialExpression];
    [condition];
    [incrementExpression]
){
    code which repeats
}

if condition is true loop will continue running. If your condition is always true it causes infinte loops.

```js
//  start at 1 | end at 10 | add 1 each time
for(let i = 1; i<=10; i++){
    console.log(i);
}
```

### Nested loops

```js
for(let i=1; i<=3; i++){
    console.log(`Outer ${i}`)
    for(let j=1; j<=3; j++){
        console.log(`   Inner ${j}`)
    }
}
```

### For of loop

**Syntax**

for(variable of iterable){
    code
}

```js 
let arr = [1,2,3,4];

for(let i of arr){
    console.log(i);
}
```

### While loops

**Syntax**

while(condition){
    code which repeats
}

```js
let i = 1;
while(i < 10){
    i++
    console.log(i);
    if(i===5){
        break;
    }
}
```

**break** stops the loop.


### Iterating arrays

1. Using for loops.

```js
let arr = [1,2,3,4];

for(let i = 0; i<arr.length; i++){
    console.log(i, arr[i]);
}
```

### Iterating objects

```js 
let obj = {username:"Husniddin", age:19}

for(let i in obj){
    console.log("key " + i);
    console.log("value " + obj[i]);
}
```

Object.keys(obj) -> gives us all keys in an array

Object.values(obj) -> gives us all values in an array

Object.entries(obj) -> gives us nested array of all key & valu pairs

```js 
let obj = {username:"Husniddin", age:19};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
```

## Functions

### Function basics

Functions are reusable chunk of code. Which helps us to not duplicate our code. It makes code easier to read. They can take a input and give an output.

### Creating and using functions

Defining function.

```js
    function name(){
        // code
    }
```

Using it.

```js
    name();
```

We can call the function before defining it.

```js
    name();
    name();

    function name(){
        // code
    }
```

### Arguments & Parameters

Arguments === values
Parameters === placeholder

Arguments & Parameters === input

```js
function name(parameter1, parameter2, ...){
    console.log(parameter1)
}

name(argument1, argument2);
```

If we do not give an argument to a parameter, it is value will be **undefined**.

Order matters.
Parameters takes values by order. First param takes first arg. Second param takes second second arg and so on.


### Outputs / return

**Returns** returns a value which we can store it somewhere else. Retrun **ends** function. Return can only return single value.

```js
function add(num1, num2){
    return num1 + num2; // function ended. And it returned sum of num1 and num2
    console.log(num1, num2); // does not work
}

let sum = add(1, 2);
console.log(sum)
```

## Advanced Functions

### Scope - variable visibility

- **Function Scope** - variables defined inside a function. We cannot access it outside of that function. Functions access variables from inside to outside. If I have a variable name both outside of function and inside it. My function will use inside one. If I have a variable name outside of function and nothing inside it will use outside one.

```js
let name = "husniddin";

function sayName(){
    console.log(name); // husniddin
}
```

```js
let name = "husniddin";

function sayName(){
    let name = "someone";
    console.log(name); // someone
}
```

- **Block Scope** - if, for, while. Variables defined inside {}.

```js
for(let i =0; i<10; i++>){
    let msg = "something";
    console.log(msg)
}

if(10<20){
    let num = 0;
}
```

- **var** - has no block scope. Only function scope.

```js
if(true){
    var num = 0;
}
console.log(num) // 0
```

- **Lexical scope** - Inner function has access to parent function.

```js
function getNum(){
    let num = 0;
    function showNum(){
        console.log(num);
    }
    showNum(); // 0
}
```

### Function expression

- **Function Declaration**

```js
function sayHi(){
    consoloe.log("Hi");
}
```

- **Function Expression**

```js
const sayHi = function(){
    console.log("Hi");
}
```

### Higher order functions

Functions accept other functions as an argument or return a function.

Functions can be a value and we can store it to a variable. We can send it as an argument too.

```js
function callTwice(func){
    func();
    func();
}

function sayHi(){
    console.log("Hello There");
}

callTwice(sayHi)
```

### Returning functions

```js
function between(min, max){
    return function(num){
        return num >= min && num <= max;
    }
}

const from100To200 = between(100, 200);

console.log(from100To200(1));
console.log(from100To200(101));
```

### Methods

Methods is a function which is placed as a property on an object.

```js
let obj = {
    method: function(param1, param2){
        code
        return value;
    }
}
```

Shorthand

```js
let obj={
    method(param1, param2){
        code
        return value
    }
}
```

### Keyword this

If I have an object **unit** and **this** inside it. That this will refer to unit object. We can access unit's properties with this.

```js
let unit = {
    type:"footman",
    weapon:"common sword",
    move(){
        console.log(`${this.type} is moving.`); // this.type = "footman"
        console.log(this)
    }
}
```

This depends on how we call the function.
this refers to an object which is left side of the dot.

```js
let moveFunc = unit.move;
moveFunc(); // this refers to window. undefined is moving.
// window.moveFunc();
```

When I can function it will be a property of the window object

```js
function sayHi(){
    console.log("Hi");
}
window.sayHi();
```

### Try/catch statements.

We wrap a block of code which might cause an error.
Catch is a block of code which runs when error occurs.

```js
hello.toUpperCase(); // ReferenceError
```

```js
try{
    hello.toUpperCase(); 
}catch(e){
    console.log(`Error: ${e}`)
}
```

### For each

Accepts a callback function.
Calls the function once per element in the array.

```js
const nums = [1,2,3];
nums.forEach(function(num){
    console.log(num+1);
})
```

### Map

Map is the same as for each but it creates a new array using a return value.

```js
const words = ["apple", "orange", "something"];
const upperWords = words.map(function(word){
    return word.toUpperCase();
})
```

### Arrow functions

It is alternative for function expression.

Syntax:

```js
const sayMsg = () => {
    console.log("Hi");
}

const add = (a,b) => {
    retrun a+b;
}

const square = a =>{
    return a**2;
}
```

Implicit return. Remove return keyword. Only one statement.

```js
const add = (a,b) => (
    a+b;
)

const add = (a,b) => a+b;
```

**this** - Arrow functions do not define their own this context. Instead, they inherit this from the surrounding lexical scope at the time of their creation.

```js
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
```

### Filter

Creates an array with all elements that the test which was implemented by callback function. Callback has to retunr true or false.

```js
// even num filter
const nums = [1,2,3,4,5,6,7, 8, 9, 10, 11];
const evens = nums.filter((num)=>num%2===0);
```

### Some & every

Every checks all elements passes the test. It returns true if all passes otherwise false.
Some checks all elements passes the test. It returns if any of them passes true otherwise false.

### Reduce

Reduce takes a reducer function and reduces to a single value. That functions takes two parameters.

```js
// sum all values from an array
// accumulator is final result

const nums = [1,2,3, 4];
let sum = nums.reduce((accumulator, currentValue)=>accumulator+currentValue)
console.log(sum);

// call, accumulator, currentValue, retrun value
//  1       4              10           14
//  2       14             13           27
//  3       27             20           27
```

Adding starting point.

```js
let sum = nums.reduce((accumulator, currentValue)=>accumulator+currentValue, 100)
```

### SetTimeout & SetInterval

```js
console.log("Start") // this runs 1st
setTimeout(()=>{
    console.log("Hi") // this runs 3rd
}, 3000) // 3000 miliseconds = 3seconds
console.log("GoodBye") // this runs 2nd
```

SetInterval call a function every x miliseconds.

```js
setInterval(()=>{
    console.log("Hi");
}, 3000) // every 3s function will be executed.
```

Removing setInterval.

```js
// set Interval returns id and we can store it on a variable.
const s1Id = setInterval(()=>{
    console.log("Hi");
}, 3000) // every 3s function will be executed.

setTimeout(()=>{
    clearInterval(s1Id)
}, 9000)
```

### Default params

Old way

```js
function greet(name){
    if(name === undefined){
        name = "someone";
    }
    return name + " Hello";
}
```

New and better way

```js
function greetShorter(name="someone"){
    return name + " Hello";
}
```

Order matter because of that you should put your default params at the end.

```js
function showMsg(person, msg="Nothing here"){
    return `${msg} ${person}`
}
```

Or use their names when you call a function.

```js
showMsg(msg="msg", person="me")
```

### Spread in function calls

```js
const nums = [1,2,3,4];
console.log(...nums); // 1,2,3,4
console.log(..."hello world"); // h e l l o   w o r l d
```

### Spread with arrays

```js
const rtsGames = ["Dawn of war 1", "C&C Generals", "Starcraft 2", "Warcraft 3"];
const rpgGames = ["Elden Ring", "Warhammer space marine 2", "Zenless zone zero"];

const copyRpgGames = [...rpgGames];
const allGamesCombineCopy = [...rtsGames, ...rpgGames];

console.log(copyRpgGames);
console.log(allGamesCombineCopy)
```

### Spread with objects

copy one object properties to another one or combine objects

```js
const user = {username:"husniddin", password:"ThisIsPass"}

const posts = {
    title:"Something",
    content:"There is something",
    ...user // copy user properties
}

console.log(posts);
```

```js
const fruit = {
    type:"apple",
    price:90
}

const category={
    cat:"food"
}

const product = {...fruit, ...category} // combine

console.log(product);
```

```js
const user = {
    name : "Husniddin"
}

const pet = {
    name:"DogPet",
    type:"dog"
}

console.log({...user, ...pet}); // When there are two the same keys last one will win
// {name: 'DogPet', type: 'dog'}
```

### Rest params

Rest collects all remaining arguments into an actual array

```js
function sum(...nums){
    return nums.reduce((sum, el)=>sum+el)
}

function showMsgs(sender, ...msgs){
    console.log(sender);
    for(let msg of msgs){
        console.log(msg);
    }
}
```

### Destructuring

**Arrays**

```js
const favGames = ["Warcraft 3", "Wild rift", "Zenless Zone Zero", "C&C Generals", "Starcraft 2"];

const [first, second, third, ...rest] = favGames;
console.log(first);
console.log(second);
console.log(third);
console.log(rest);

// Warcraft 3
// Wild rift
// Zenless Zone Zero
// ['C&C Generals', 'Starcraft 2']
```

**Objects**

```js
const user = {
    name:"Someone",
    email:"Somewhere@at.com",
    password:"pass"
}

// const name = user.name;
// password:pin / const pin = user.password;
const {name, password:pin, canFly=false} = user
console.log(name, pin);
```