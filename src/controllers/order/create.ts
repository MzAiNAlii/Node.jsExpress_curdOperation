import { Request, Response } from "express";

import product from "../../models/Products";

const productCreated = async ( req: Request, res: Response)=>{

    const { name, price, instock  } = req.body;

    try {
        
        const productCreate = await product.create({
            
            name, 
            price, 
            instock

        })

        res.json({
            message:"product created Successfully",

            data:productCreate
        })
    } catch (error) {

        res.json({
            message:"Product did not created Successfully"
        })
        
    }

}

export default productCreated