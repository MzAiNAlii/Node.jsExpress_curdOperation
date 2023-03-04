import { Request, Response } from "express";

import Employee from "../models/Employee";

const EmployeeCreated = async ( req: Request, res: Response)=>{

    const { emp_Id, emp_Name, emp_City, emp_Age } = req.body;

    try {
        
        const EmployeeCreated= await Employee.create({
            
            emp_Id,
            emp_Name,
            emp_City,
            emp_Age

        })

        res.json({
            message:"Employee created Successfully",

            data:EmployeeCreated
        })
    } catch (error) {

        res.json({
            message:"Employee did not created Successfully"
        })
        
    }

}

export default EmployeeCreated