function sum(a,b) {
    console.log("hello");
    return a+b;
    console.log("hello2");
}

//sum(sum(1, 2), 3);
//console.log();

function isAdult(age) {
    if(age >= 18) {
        return "adult";
    } else {
        return "not adult";
    }
    console.log("bye bye");//print nhi hoga
}

console.log(sum(1, 2));