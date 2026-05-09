import jsonwebtoken from "jsonwebtoken";


export const genToken = async (userId, userEmail) => {
    try {
        const token = jsonwebtoken.sign({userId,userEmail},process.env.JWT_SECRET)
        return token;
        
    } catch (error) {
        console.log(`could not generate tokens ${error}`);
        process.exit(1)
    }
}