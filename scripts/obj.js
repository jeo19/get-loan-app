console.log(this);
var object={
    prop:this,
    method:function (){return this;}
};

var array=[
    this,
    function(){return this;}
];

function global(){
    return this;
};

global.call(object);

