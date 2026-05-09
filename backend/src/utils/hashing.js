import bcrypt from "bcryptjs"


export const hashPass = async (userPass) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(userPass, salt)
        return hash;
    } catch (error) {
        console.log(`could not hash ${error}`);
        process.exit(1)
    }
}


export const comparePass = async (userpass, actualCode) => {
    try {
        return await bcrypt.compare(userpass,actualCode)
    } catch (error) {
        console.log(`could not match passCodes ${error}`);
        process.exit(1)
    }
}