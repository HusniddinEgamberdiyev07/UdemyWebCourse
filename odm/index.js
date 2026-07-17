const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/animeIsLife")
    .then(()=>{
        console.log("Connected");
    })
    .catch( err =>{
        console.log("We have a problem!!!!");
        console.log(err);
    })


const animeSchema = new mongoose.Schema({
    title:String,
    plot:String,
    year:Number,
    score:Number
});

const Anime = mongoose.model("Anime", animeSchema);

// const blackClover = new Anime({
//     title:"Black clover",
//     plot:"The series focuses on Asta, a young orphan who is left to be raised in an orphanage in a rural village alongside his fellow orphan, Yuno. While everyone is born with the ability to utilize mana in the form of magical power, Asta, was born without mana and thus has no way to use magic, instead he focuses on physical strength. Conversely, Yuno was born as a prodigy with immense magical power and the talent to control wind magic. Motivated by a desire to become the next Wizard King, an authority figure second to the king of Clover Kingdom, the two youths developed a friendly rivalry. Yuno obtains a legendary four-leaf grimoire held by the kingdom's first Wizard King. The four-leaf grimoire is a rare grimoire, only given to the most immense mages. Asta, despite his lack of magic, obtained an enigmatic five-leaf grimoire that contains mysterious elf swords and a bodiless member of the Devil race who utilizes rare anti-magic. Afterwards, Asta and Yuno each join a Magic Knight squad as the first step to fulfill their ambitions.",
//     year:2017,
//     score:9.5,
// })

// Anime.insertMany([{
//     title:"Black clover",
//     plot:"The series focuses on Asta, a young orphan who is left to be raised in an orphanage in a rural village alongside his fellow orphan, Yuno. While everyone is born with the ability to utilize mana in the form of magical power, Asta, was born without mana and thus has no way to use magic, instead he focuses on physical strength. Conversely, Yuno was born as a prodigy with immense magical power and the talent to control wind magic. Motivated by a desire to become the next Wizard King, an authority figure second to the king of Clover Kingdom, the two youths developed a friendly rivalry. Yuno obtains a legendary four-leaf grimoire held by the kingdom's first Wizard King. The four-leaf grimoire is a rare grimoire, only given to the most immense mages. Asta, despite his lack of magic, obtained an enigmatic five-leaf grimoire that contains mysterious elf swords and a bodiless member of the Devil race who utilizes rare anti-magic. Afterwards, Asta and Yuno each join a Magic Knight squad as the first step to fulfill their ambitions.",
//     year:2017,
//     score:9.9,
// },{
//     title:"Black clover",
//     plot:"It follows a youth with pyrokinetic abilities who joins a special force of firefighters developed to counter pyrokinetic monsters threatening Tokyo, which is the sole remaining city in a world ravaged by a global fire. The series acts as a prequel to Ohkubo's previous manga series, Soul Eater.",
//     year:2015,
//     score:9.9,
// }])
//     .then(data=>{
//         console.log("It worked");
//         console.log(data);
//     })
//     .catch(err=>{
//         console.log("Something went wrong");
//         console.log(err);
//     })


// Anime.deleteMany({__v:0})
// .then(()=>{
//     console.log("deleted");
// })
// .catch(err=>{
//     console.log(err);
// })

// Anime.findByIdAndUpdate('6a59ddd7b24631882c207183', {title:"Fire force"}, {returnDocument:"after"}).then(m=>console.log(m));

// Anime.updateMany({title:{$in : ["Black clover", "Fire force"]}}, {score:10.00}).then(data=>console.log(data))

// Anime.deleteOne({title:"Black clover"}).then(msg=>console.log(msg));

// Anime.findOneAndDelete({title:"Fire force"}).then(msg=>console.log(msg))