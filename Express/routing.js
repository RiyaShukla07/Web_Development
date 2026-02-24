const express = require("express");
const app = express();

let port = 8000;

app.listen(port, () => (
    console.log(`app is listening on port ${port}`)
));

app.get("/", (req, res) => {
    res.send("you contracted root path");
});


app.get("/apple", (req, res) => {
    res.send("you contracted apple path");
});


app.get("/orange", (req, res) => {
    res.send("you contracted orange path");
});

app.get("*", (req, res) => {
    res.send("this path does not exist");
});


app.post("/", (req, res) => {
    res.send("you send a post request to root");
});


//app.use((req, res) => {
    //console.log(req);
    //console.log("request received");
    //res.send("this is a basic responce");
  //  let code="<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
   // res.send(code);
//});