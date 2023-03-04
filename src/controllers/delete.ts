import { Request, Response } from "express";

import Employee from "../models/Employee";

const deleteEmp =  async (req:Request, res: Response) => {

    const {str_id2} = req.params

    try {

        const deleteEmp = await Employee.findByIdAndDelete(str_id2)

        res.json({

            message : "Delete Successfully",

            data : deleteEmp
        })
        
    } catch (error) {

        res.json({

            message : "Not Deleted Sucsessfully"
        })
        
    }
}

export default deleteEmp