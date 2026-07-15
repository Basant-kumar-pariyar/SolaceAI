import bcrypt from "bcrypt";
import User from "../models/User.js";

export const registerUser = async (userData) => {

    const existingUser = await User.findOne({
        email: userData.email,
    });

    if (existingUser) {
        throw new Error("Email already registered.");
    }

    const hashedPassword = await bcrypt.hash(
        userData.password,
        10
    );

    userData.password = hashedPassword;

    const user = await User.create(userData);

    return {
        success: true,
        message: "User registered successfully.",
        data: {
            id: user._id,
            fullName: user.fullName,
            email: user.email,
            role: user.role,
        },
    };
};