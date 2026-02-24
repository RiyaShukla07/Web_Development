//logical operators
let marks = 90;
//and
if (marks >=33 && marks >= 80) {
    console.log("pass");
    console.log("A+");
}
//or
if (marks >=33 || marks >= 80) {
    console.log("pass");
    console.log("A+");
}
//not
if (!(marks >=33 )) {
    console.log("pass");
    console.log("A+");
}
//combine
if((marks > 33 && marks <= 80 )|| !false){
    console.log("pass");
}