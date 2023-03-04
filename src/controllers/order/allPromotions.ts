import { RequestHandler } from "express";
import promotionSchema from "../../models/populate";

const getAllPromotions: RequestHandler = async ( req, res ) => {

    try {
        const allPromotions = await promotionSchema.find().populate(['product','employee'])

        return res.json({
            message: "Orders retreived successfully",
            data: allPromotions

    })
 } catch (error) {

    return res.status(500).json(error);
        
    }

}

export default getAllPromotions