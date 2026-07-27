const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/shopApp")
    .then(res=>{
        console.log("connected");
    })
    .catch(err=>{
        console.log("Something went wrong");
        console.log(err);
    });


const person = new mongoose.Schema({
    first:String,
    last:String
});

person.virtual("full").get(function(){ return `${this.first} ${this.last}` })

// middleware

person.pre("save", async function(){
    this.first = "You're"
    this.last = "A Gay"
    console.log("About to save");
})
person.post("save", async function(){
    console.log("Just saved");
})

const Person = mongoose.model("Person", person);

const p1 = new Person({
    first:"Someone",
    last:"Something"
})

p1.save().then(res=>console.log(res)).catch(err=>console.log(err))

// async function find(){
//     const p1 = await Person.findById('6a66fac533715fc6bbcf600a');
//     console.log(p1.full);
// }

// find();

// Person.deleteMany({__v:0}).then(res=>console.log(res)).catch(err=>console.log(err))