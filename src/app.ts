import express from 'express'
import emloyeeRouter from './routes/empolyees'
import productRouter from './routes/product'
import orderdRouter from './routes/orders'

const app = express()

app.use(express.json())

app.use("/auth", emloyeeRouter,productRouter)
app.use("/routes",orderdRouter)

export default app