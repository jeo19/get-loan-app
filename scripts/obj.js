function sayAge(){
    console.log(`My age is ${this.age}`);
}
const user={
    name:"Tyler",
    age:27
}
sayAge();//My age is underfined
