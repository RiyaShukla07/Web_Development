const express = require("express");
const app = express();
const path = require("path");

const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/", (req, res) => {
    res.render("home2.ejs");
});

app.get("/ig/:username", (req, res) => {
    const followers = ["adam", "bob", "steve", "abc"];
    let { username } = req.params;
    res.render("insta.ejs",  {username, followers});
});

app.get("/hello",(req,res)=>{
    res.send("hello");
});

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random() * 6) + 1 ; 
    res.render("rolldice.ejs", { diceVal });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});