function outerfunc(){
    function innerfunc(){
        console.log(x);
        console.log(y);
    }
    let x=5;
    let y=6;
    
    innerfunc();
}
//hoisting is used in lexical scope