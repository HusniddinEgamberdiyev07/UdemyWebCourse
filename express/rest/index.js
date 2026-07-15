const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({extended:true}));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/spacemarines", (req, res)=>{
    res.render("spacemarineForm");
})

app.post("/spacemarines", (req, res)=>{
    console.log(req.body);
    res.send("Response from post");
})

app.listen(3000, ()=>{
    console.log("Listening on port: 3000");
})

// Rest is a guideline how client + server communicate and perform crud.

// GET /something -> gets all
// GET /something/{id} -> gets one
// POST /something -> makes new
// PATCH /soemthing/{id} -> updates one
// DELETE /something/{id} -> deletes one