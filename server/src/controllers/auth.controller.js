import {registerUser} from "../services/auth.service.js";
export const register = (req,res)=>{
    const result = registerUser(req.body);
    res.status(201).json(result);

};