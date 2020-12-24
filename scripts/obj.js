const user={
    name:"Tyler",
    age:27,
    languages:["JavaScript","Ruby","Python"],
    great(){
        const hello=`Hello, my name is ${this.name} and I know`;
        const langs=this.languages.reduce(function(str,lang,i){
            if(i===this.languages.length-1){
                return `${str} and ${lang}.`
            }
            return `${str} ${lang},`
        },"")
        console.log(`${hello}+${lang}`)
    }
}
user.great();
