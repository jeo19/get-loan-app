function great(){
    console.log(`Hello, My name is ${this.name}`);
}
const user={
    name:"Tyler",
    age:27,
}
great.call(user);
