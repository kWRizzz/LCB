import { hashPass, comparePass } from "../utils/hashing.js";
import userModel from "../model/user.model.js"
import { genToken } from "../utils/tokens.js";
import tokenBlackList  from "../model/tokenBlackList.model.js"

/*
|--------------------------------------------------------------------------
| REGISTER USER
|--------------------------------------------------------------------------
| @route   POST /api/auth/register
| @desc    Register a new user
| @access  Public
|--------------------------------------------------------------------------
*/

export const registerUser = async (req, res) => {
    try {

        let { userName, userEmail, password } = req.body;

        if (!userEmail || !userName || !password) return res.status(400).json({
            message: "enter all credentials"
        })
        
        if(await userModel.findOne({userEmail})) return res.status(400).json({
            message:"user Already Exist"
        })


        // generating the hassPassword

        const hashedPassword = hashPass(password)

        const User = await userModel.create({
            userName,
            userEmail,
            password: hashedPassword
        })




        const token = genToken(User._id, User.userEmail)

        res.cookie("token", token)

        res.status(200).json({
            message: "user created ",
            token,
            User
        })

    } catch (error) {
        console.log(`register error ${error}`);
        res.status(400).json({
            message: `error in register ${error}`
        })
    }
}


/*
|--------------------------------------------------------------------------
| LOGIN USER
|--------------------------------------------------------------------------
| @route   POST /api/auth/login
| @desc    Login existing user
| @access  Public
|--------------------------------------------------------------------------
*/

export const loginUser = async (req, res) => {
    try {

        let { userEmail, password } = req.body;

        if (!userEmail || !password) {
            return res.status(400).json({
                message: "enter all credentials"
            });
        }

        const User = await userModel.findOne({ userEmail });

        if (!User) {
            return res.status(400).json({
                message: "user not found"
            });
        }

        const isMatch = await comparePass(password, User.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "invalid credentials"
            });
        }

        const token = genToken(User._id, User.userEmail);

        res.cookie("token", token);

        res.status(200).json({
            message: "login successful",
            token,
            User
        });

    } catch (error) {



        console.log(`login error ${error}`);

        res.status(400).json({
            message: `error in login ${error}`
        });
    }
};


/*
|--------------------------------------------------------------------------
| LOGOUT USER
|--------------------------------------------------------------------------
| @route   GET /api/auth/logout
| @desc    Logout current user
| @access  Private
|--------------------------------------------------------------------------
*/

export const logoutUser = async (req, res) => {
    try {

        await tokenBlackList.create({
            token:req.cookies.token
        })
        res.clearCookie("token");

        res.status(200).json({
            message: "logout successful"
        });
    } catch (error) {
        console.log(`not loggin out  ${error}`);
        res.status(400).json({
            message: `not loggin out ${error}`
        })
    }
}