const mongoose=require("mongoose");

const salesRecord=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please add product name"]
        },
        quantity:{
            type:Number,
            required:[true,"Please add the number of quantity"],
            
        },
        amount:{
            type:Number,
            required:[true,"Please add the amount"]
        },
        
    

    },
    {
        timestamps:true
    }
)

module.exports=mongoose.model("Sales",salesRecord)