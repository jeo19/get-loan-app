var car={
    maker:"volvo",
    speed:150,
    engine:{
        size:2.0,
        make:"bmw",
        fuel:"petrol",
        pistons:[{maker:"BMW"},{maker:"BMW"}]
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