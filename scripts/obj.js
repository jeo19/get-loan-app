function User(name, age){
    this.name=name;
    this.age=age;
}
const me=new User("Tyler",23);
console.log(`My name is ${me.name} and ${me.age} years old.`);
