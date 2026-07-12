const express = require("express");
const app = express();

// run whenever any kinds of request we get
// whenever we get request express automatically creates two objects request and response.

// app.use((req, res)=>{
//     console.log("We have a request");
//     // res.send("We got your request. This is a reponse!");
//     // res.send("<h1>Hello World!<h1>");
//     res.send({color:"blue"});
// });

app.get("/", (req, res)=>{
    res.send("Base");
})

app.get("/rifelmen", (req, res)=>{
    res.send("Riflemen shoot");
})

app.get("/mages", (req, res)=>{
    res.send("Mages use spells");
})

app.get("/mages/:magetype/", (req, res)=>{
    const {magetype} = req.params;
    res.send(`${magetype} mage uses spell`);
})

app.get("/mages/:magetype/:spell", (req, res)=>{
    const {magetype, spell} = req.params;
    res.send(`${magetype} mage uses ${spell} spell`);
})

app.get("/scout", (req, res)=>{
    const {q} = req.query;
    if(!q) res.send("You scouted nothing!")
    else res.send(`You scouted ${q}`)
})

app.get("/{*path}", (req, res)=>{
    res.send("Hell!");
})

// app.listen(prot, callback)
app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});