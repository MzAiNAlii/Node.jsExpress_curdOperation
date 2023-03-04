import mongoose, { Schema } from "mongoose";

const newModel = new Schema({
product : {
    type : Schema.Types.ObjectId,
    ref : "Product",
    require : true
},
employee : {
    type:Schema.Types.ObjectId,
    ref : "Employee",
    require: true

}
},
{
    timestamps : true
})

const promotionSchema = mongoose.model("promotionSchema",newModel);

export default promotionSchema