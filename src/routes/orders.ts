import Router from "express";
import promotionLetter from "../controllers/order/Promotion";
import getAllPromotions from "../controllers/order/allPromotions";

const orderdRouter = Router()

orderdRouter.post("/createPromotion",promotionLetter)

orderdRouter.get("/AllPromotions",getAllPromotions)


export default orderdRouter


