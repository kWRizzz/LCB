import mongoose, { mongo } from "mongoose"

const tokenBlackListing = new mongoose.Schema({
    token:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

export default mongoose.model("token",tokenBlackListing)