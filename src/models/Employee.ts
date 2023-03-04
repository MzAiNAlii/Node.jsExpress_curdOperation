import mongoose, { Schema } from "mongoose";

const employeeData= new Schema({

    emp_Id:{

        type:String,
        unique:true,
        require:true,
        maxlength:20
    },

    emp_Name:{
        
        type:String,
        require:true,
        maxlength:30
    },

    emp_City:{

        type:String,
        maxlength:20,
    },

    emp_Age:{

        type:Number,
        require:true
    }
},
{
        timestamps:true
    
})

const Employee = mongoose.model("Employee",employeeData)

export default Employee