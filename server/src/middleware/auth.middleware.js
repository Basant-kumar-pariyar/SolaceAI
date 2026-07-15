
import {registerSchema} from "../validations/auth.validation.js";
import { loginSchema } from "../validations/auth.validation.js";
export const validateRegister = (req ,res,next)=>{
    const result = registerSchema.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({
            success:false,
            errors:result.error.issues
        });
    }
    next();
};
export const validateLogin = (req, res, next) => {

    const result = loginSchema.safeParse(req.body);

    if (!result.success) {

        return res.status(400).json({

            success: false,

            errors: result.error.issues

        });

    }

    next();

};