function savetoDb(data) {
    return new Promise((resolve, reject)=> {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
   if(internetSpeed > 4){
    resolve("success : data was saved");
   } else {
    reject("failure: weak connection");
   }
    });
}


savetoDb("apna college") 
.then(() => {
console.log("data1 saved. ");
return savetoDb("helloworld");
})
.then(() => {
    console.log("data2 saved");
})
.catch(() => {
console.log("promise was rejected");
});