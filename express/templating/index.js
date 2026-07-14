const express = require("express");
const path = require("path");
const app = express();

const data = require("./data.json");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res)=>{
    res.render("home");
});

app.get("/r/:subreddit", (req, res)=>{
    const {subreddit} = req.params;

    if(data[subreddit]){
        res.render("subreddit", {...data[subreddit]});
    }else{
        res.render("notfound", {subreddit})
    }
})

app.get("/rand", (req, res)=>{
    let num = Math.floor( Math.random()*10 ) + 1;
    res.render("rand", {rand:num})
})

app.get("/spacemarines", (req, res)=>{
    const marines = ["Black Templars", "Blood Angels", "Dark Angels", "Deathwatch", "Space Wolves"];
    res.render("spacemarines", {marines})
})

app.listen(3000, ()=>console.log("Listening on port 3000!"));
