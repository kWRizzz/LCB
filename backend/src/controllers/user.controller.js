import userModel from "../models/user.model.js";
import { hashedPassword } from "../utils/hashedPassword.utils.js";
import { generateToken } from "../utils/token.utils.js";


const userRegister= async (req,res) => {
    try {
        const {name , email ,password}= req.body
        
        if(!name || !email || !password)return res.status(400).json({
            message:"Enter all Credentials"
        })
        if(password.length < 6) return res.status(400).json({
            message:"Password is weak"
        })

        const isExit= await userModel.findOne({email})

        if(isExit)return res.status(400).json({
            message:"User ALready Existed"
        })

        const hashed= await hashedPassword(password)

        const user= await userModel.create({
            name,
            email,
            password:hashed
        })


        const token= generateToken(email,user._id)

        res.cookie("Token",token)
        res.status(200).json({
            message:"User created",
            token,
            user
        })




    } catch (error) {
        console.log(`server error in registering ${error}`);
        res.status(400).json({
            message:`error ${error}`
        })
    }
}


const userLogin = async (req,res) => {
    try {
        const { email ,password}=req.body
        if(!email || !password) return res.status(400).json({
            message:"Enter All Credentioals"
        })

        const user= await userModel.findOne({email})

        if(!user) return res.status(400).json({
            message:"No registered user"
        })

        res.status(300).json({
            message:"User Logger",
            user
        })

    } catch (error) {
        console.log(`server Error ${error}`);
        res.status(400).json({
            message:"Erorr in Loggin"
        })
    }
}



export default{
    userRegister,
    userLogin
}