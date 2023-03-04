import { RequestHandler } from "express";

import promotionSchema from "../../models/populate";

const promotionLetter : RequestHandler= async( req, res) => {

const {product, employee} = req.body


    try{

        const Promotion = await promotionSchema.create({
            product,
            employee
        });

        return res.status(201).json({
            message: "Promotion created successfully",
            data: Promotion
          });
          
        } catch (error) {
          return res.status(500).json(error);
        }

    }

    export default promotionLetter