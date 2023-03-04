import { Request, Response } from "express";

import Employee from "../models/Employee";

const employeeFindBy = async ( req : Request, res : Response) => {

    const {str_id} = req.params

    try {

        const empFind =  await Employee.findById(str_id)
        
       return  res.json({

            message : "Employee Find Successfully",

            data: empFind
        })
        
    } catch (error) {

        res.status(404).json("Employe does not Find Successfully")
        
    }
}

export default employeeFindBy;