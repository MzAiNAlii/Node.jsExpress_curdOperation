import mongoose, { Schema } from "mongoose";

const product =new Schema({
    name:
    {
        type: String,
        require : true
    },
    price:{
        type: Number,
        require: true,
        maxlenght :10
    },
    instock:{
        type: Boolean,
        default: true
    }
},
{
    timestamps:true
})

const Product = mongoose.model("Product",product);

export default Product