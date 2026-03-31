import bcryptjs from 'bcryptjs'

export const hashedPassword= async (password) => {
    try {
        
        const salt= bcryptjs.genSaltSync(10)
        
        const hased= bcryptjs.hashSync(password,salt)

        return hased

    } catch (error) {
        console.log(`Hashing error ${error}`);
        process.exit(1)
    }
}