import mongoose from "mongoose";


export const connectDB= async () => {
    try {
       const connect= await mongoose.connect(`${process.env.MONGOURI}`) 
       console.log(` server Connected ${connect.connection.host}`)
    } catch (error) {
        console.log(`error in Connection DataBase ${error}`);
        process.exit(1)
    }
}