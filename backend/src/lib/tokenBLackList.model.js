import mongoose from "mongoose";


const tokenBlackListing= new mongoose.Schema({
    token:{
        type:String,
        required:true
    }
})

export default mongoose.model("tokenBLacklisting",tokenBlackListing)

