function great(l1,l2,l3){
    console.log(`Hello, My name is ${this.name} and I used to ${l1}, ${l2} and ${l3}.`);
}
const user={
    name:"Tyler",
    age:27,
}
const languages=["Javascript","Ruby","Python"]
const newFn=great.bind(user,languages[0],languages[1],languages[2])
newFn();