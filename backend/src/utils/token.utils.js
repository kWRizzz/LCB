import jwt from "jsonwebtoken";


export const generateToken = async (email,userID) => {
    try {
        
        console.log(`${process.env.SECRET}`);
        
        const token = jwt.sign({userID,email},process.env.SECRET)
        return token
    } catch (error) {
        console.log(`server error in tokens ${error}`);
        process.exit(1)
    }
}