const user={
    name:"Tyler",
    age:27,
    great(){
        console.log(`Hello, Myname is ${this.name}`);
    },
    mother:{
        name:"Stacy",
        age:40,
        great(){
            console.log(`Hello, ${user.name}'s mother is ${this.name}`);
        }
    }
}
user.great();
user.mother.great();

