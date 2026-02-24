const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allChats = [
{
    from: "neha",
    to: "preeti",
    msg: "send me your exam sheets",
    created_at: new Date(),
},
{
    from: "anita",
    to: "ramesh",
    msg: "teach me Js",
    created_at: new Date(),
},
{
    from: "amit",
    to: "sumit",
    msg: "bring me some fruits",
    created_at: new Date(),
},
{
    from: "tony",
    to: "peter",
    msg: "give me water",
    created_at: new Date(),
},
]

Chat.insertMany(allChats);
