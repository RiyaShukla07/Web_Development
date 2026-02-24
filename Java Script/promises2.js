

//savetoDb (
 //   "apna collage",
   // () => {
   //     console.log("success : your data was saved");
      //  savetoDb (
           // "hello world",
          //  () => {
          //      console.log("success2: data2 saved");
           // },
           // () => {
               // console.log("failure2 : weak connection");
           // }
        //);
    //},
    //() => {
      //console.log("failure: weak connection ,data not saved");
    //}
//);
function savetoDb(data,) {
    return new Promise((resolve, reject)=> {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
   if(internetSpeed > 4){
    resolve("success : data was saved");
   } else {
    reject("failure: weak connection");
   }
    });
}