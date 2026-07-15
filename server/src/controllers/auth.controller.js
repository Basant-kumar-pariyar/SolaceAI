import { registerUser, loginUser } from "../services/auth.service.js";
export const register = (req,res)=>{
    const result = registerUser(req.body);
    res.status(201).json(result);

};
export const login = async (req, res) => {
    try {

        const result = await loginUser(req.body);

        res.status(200).json(result);

    } catch (error) {

        res.status(401).json({
            success: false,
            message: error.message,
        });

    }
};