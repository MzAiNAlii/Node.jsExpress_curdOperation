import { Request ,Response } from "express";

import Employee from "../models/Employee";

const empUpdate = async (req : Request , res : Response) => {

    const {str_id1} = req.params

    const new_Data={

        emp_Id : req.body.emp_Id,

        emp_Name :req.body.emp_Name,

        emp_City : req.body.emp_City,

        emp_Age : req.body.emp_Age

    }

    try {

    const emp_update = await Employee.findByIdAndUpdate( str_id1, {$set: new_Data } )

        
       return  res.json({

            message : "Employee Update Successfully",

            data: emp_update
        })
        
    } catch (error) {

        return res.status(404).json({

            message : "Erorr"
    })
}

} 

export default empUpdate