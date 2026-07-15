import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

//registerUser
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
// login
export const loginUser = async (loginData) => {

    const { email, password } = loginData;

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid email or password.");
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Invalid email or password.");
    }

    // Generate JWT
    const token = jwt.sign(
        {
            userId: user._id,
            email: user.email,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN,
        }
    );

    return {
        success: true,
        message: "Login successful.",
        token,
        user: {
            id: user._id,
            fullName: user.fullName,
            email: user.email,
            role: user.role,
        },
    };
};