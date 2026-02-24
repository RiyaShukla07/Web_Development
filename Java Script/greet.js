function multipleGreet (func,count){
    for (let i=1; i<=count; i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}
multipleGreet(function() { console.log("namaste")},1000);