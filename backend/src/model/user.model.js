import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        useremail: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        profilePicture:{
            type:String,
            default:""
        }
    },
    {
        timestamps: true
    }

)

export default mongoose.model("user",userSchema)