window.age=27;
function sayAge(){
    console.log(`My age is ${this.age}`);
}
sayAge();