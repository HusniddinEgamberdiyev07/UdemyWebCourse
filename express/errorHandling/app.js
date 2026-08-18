const express = require("express");
const mongoose = require("mongoose");
const method_override = require("method-override");
const path = require("path");
const TaskModel = require("./models/tasks");
const AppError = require("./utilities/appError");
const wrapAsync = require("./utilities/wrapAsync");

mongoose.connect("mongodb://localhost:27017/your-tasks")
    .then(() => {
        console.log("Connected to the Database");
    }, err => {
        console.log(err);
    })

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended:true}));
app.use(method_override("_method"));

app.get("/", (req, res)=>{
    res.render("index");
})

app.get("/tasks", async (req, res)=>{
    const tasks = await TaskModel.find({});

    res.render("./tasks/tasks", {tasks})
})

app.get("/tasks/new", (req, res)=>{
    res.render("./tasks/new")
})

app.get("/tasks/:id", wrapAsync(
    async (req, res, next)=>{
        const task = await TaskModel.findById(req.params.id);
        if(!task) return next(new AppError("Task not found", 404));
        res.render("./tasks/show", {task})
    }
))

app.post("/tasks", async (req, res)=>{
    const task = new TaskModel(req.body);
    await task.save();

    res.redirect("/tasks");
})

app.get("/tasks/:id/edit", async (req, res)=>{
    const task = await TaskModel.findById(req.params.id);

    res.render("./tasks/edit", {task})
})

app.put("/tasks/:id", async (req, res)=>{
    const id = req.params.id;
    const task = await TaskModel.findByIdAndUpdate(id, req.body);

    res.redirect(`/tasks/${id}`)
})

app.delete("/tasks/:id", async (req, res)=>{
    await TaskModel.findByIdAndDelete(req.params.id);

    res.redirect(`/tasks`)
})

app.use((req, res, next)=>{
    next(new AppError("Page is not found", 404))
})

app.use((err, req, res, next)=>{
    const {status = 500, message = "Something went worng"} = err;

    res.status(status).send(message);
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})

