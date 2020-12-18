var car={
    make:"volvo",
    speed:150,
    engine:{
        size:2.0,
        make:"bmw",
        fuel:"petrol",
        pistons:[{maker:"BMW1"},{maker:"BMW2"}]
    },
    driven:function(){
        return "drive";
    }
};
var array=[
    "string",
    100,
    ["embed",200],
    {car:"ford"},
    function(){ return "drive";}
]
function name(){
    var fullname="David jeo";
    function concat(name){
        return "Mr."+name;
    }
    return concat(fullname);
}