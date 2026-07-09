// adding new method to string prototype.
// every new string will have it

String.prototype.kindWords = function(){
    return `Your string is ${this}. Sucks`
}

const txt = "Hello World!";
console.log(txt.kindWords());

const sentence = "I hate this world!";
console.log(sentence.kindWords());


// factory function

function createRobot(name){
    return {
        name,
        talk(){
            console.log("Hello World. I am ", name);
        }
    }
}
const robo1 = createRobot("B");
robo1.talk();

// When factory function creates an object, it will recreate methods.

// function constructor

// new keyword creates a new blank object, sets this to that object. It returns this at the end.

function CreateRobo(name){
    this.name = name
}

CreateRobo.prototype.talk = function(){
    console.log("Hello World. I am ", this.name);
}

const robo2 = new CreateRobo("W");
robo2.talk();