const express = require("express");
const app = express();

app.use("/api", (req, res, next) => {
    let {token} = req.query;
    if (token === "giveaccess") {
       next();
    }
    res.send("ACCESS DENIED!");
});

app.get("/api", (req,res) => {
  res.send("data");
});

app.get("/", (req, res) => {
    res.send("Hi, I am root.");
});

app.get("/random", (req, res) => {
   res.send("this is a random page"); 
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(8080, () => {
   console.log("server listening to port 8080");
});