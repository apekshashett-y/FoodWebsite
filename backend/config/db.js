import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://foodrush:qTQvdltUP@cluster0.3buql.mongodb.net/food-del').then(()=>console.log("DB connected"))
}