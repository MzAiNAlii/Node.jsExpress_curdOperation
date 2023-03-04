import { Request , Response } from "express";

import Employee from "../models/Employee";

const findAllEmp = async (req:Request, res: Response) => {

try {

 
    const findAll = await Employee.find()

   

   return  res.status(302).json({

        message :"Find All Employees Successfully",
     
        data : findAll
    })
    
} catch (error) {

    res.status(204).json({

        message : "Empty Database"
    })
    
}
    
}

export default findAllEmp