import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const Connection= async()=>{
    const URL=process.env.MONGO_URL
    try{
      await  mongoose.connect(URL)
      console.log('Database connected successfully');
    }catch(err){
        console.log('Error while connecting to database',err.message);
    }
}

export default Connection