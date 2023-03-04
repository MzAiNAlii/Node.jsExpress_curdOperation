import dotenv from 'dotenv'
dotenv.config()
import app from './app';
import mongoose from 'mongoose'



mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGO_URI!)

.then(()=>{
app.listen(process.env.PORT!,()=>{
    console.log(`Server is running on ${process.env.PORT}`); 
})
})

.catch(error=>{
    console.log("Mongoose Error",error)
})