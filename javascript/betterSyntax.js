function greet(name){
    if(name === undefined){
        name = "someone";
    }
    return name + " Hello";
}

function greetShorter(name="someone"){
    return name + " Hello";
}

function showMsg(person, msg="Nothing here"){
    return `${msg} ${person}`
}

const nums = [1,2,3,4];
console.log(...nums);
console.log(..."hello world"); // h e l l o   w o r l d

const rtsGames = ["Dawn of war 1", "C&C Generals", "Starcraft 2", "Warcraft 3"];
const rpgGames = ["Elden Ring", "Warhammer space marine 2", "Zenless zone zero"];

const copyRpgGames = [...rpgGames];
const allGamesCombineCopy = [...rtsGames, ...rpgGames];

console.log(copyRpgGames);
console.log(allGamesCombineCopy);

// const user = {username:"husniddin", password:"ThisIsPass"}

// const posts = {
//     title:"Something",
//     content:"There is something",
//     ...user // copy user properties
// }

// console.log(posts);

const fruit = {
    type:"apple",
    price:90
}

const category={
    cat:"food"
}

const product = {...fruit, ...category} // combine

console.log(product);

// const user = {
//     name : "Husniddin"
// }

// const pet = {
//     name:"DogPet",
//     type:"dog"
// }

// console.log({...user, ...pet}); // When there are two the same keys last one will win
// {name: 'DogPet', type: 'dog'}

function sum(...nums){
    return nums.reduce((sum, el)=>sum+el)
}

function showMsgs(sender, ...msgs){
    console.log(sender);
    for(let msg of msgs){
        console.log(msg);
    }
}

const favGames = ["Warcraft 3", "Wild rift", "Zenless Zone Zero", "C&C Generals", "Starcraft 2"];

const [first, second, third, ...rest] = favGames;
console.log(first);
console.log(second);
console.log(third);
console.log(rest);


const user = {
    name:"Someone",
    email:"Somewhere@at.com",
    password:"pass"
}

// const name = user.name;
// password:pin / const pin = user.password;
const {name, password:pin, canFly=false} = user
console.log(canFly);
