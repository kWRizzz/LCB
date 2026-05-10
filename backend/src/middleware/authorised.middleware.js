import tokenBlackListModel from "../model/tokenBlackList.model.js";
import jwt from  "jsonwebtoken"
import userModel from "../model/user.model.js";

export const authorised= async (req,res,next) => {
    try {
        const token = req.cookies.token
        if(!token)return res.status(401).json({
            message:"no token"
        })
        
        const isBlackListed= await tokenBlackListModel.findOne({token})

        if(isBlackListed) return res.status(401).json({
            message:"not authorised"
        })

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded) return res.status(401).json({
            message:"invalid token "
        })

        const user = await userModel.findById(decoded.userID).select("-password")
        

        req.user= user
        next()
        
    } catch (error) {
        console.log(`not authorised ${error}`);
        process.env(1)
    }
}