// Contructors = doesn't return anythings and start with capital
function Person(name, age) {
    
   this.name = name;
   this.age = age; 
   console.log(this);
}

Person.prototype.talk = function() {
    console.log(`Hi, ,my name is ${this.name} `);
};

let p1 = new Person("adam", 25);
let p2 = new Person("eve", 25);