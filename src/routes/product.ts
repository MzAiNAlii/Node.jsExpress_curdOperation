import Router from "express";
import productCreated from "../controllers/order/create";

const productRouter = Router()

productRouter.post("/createProduct",productCreated)


export default productRouter


