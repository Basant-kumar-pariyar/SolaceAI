import User from "../models/User.js";

export const registerUser = async (userData) => {

    const user = await User.create(userData);

    return {
        success: true,
        message: "User registered successfully.",
        data: user,
    };
};