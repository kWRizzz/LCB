import mongoose from "mongoose";


const messageSchema= new mongoose.Schema({
    text:{
        type:String,
    },
    picture:{
        type:String,
    }
})

export default mongoose.model("message",messageSchema)