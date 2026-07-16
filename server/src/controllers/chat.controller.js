import Chat from "../models/Chat.js";
import { generateAIResponse } from "../services/ai.service.js";

export const sendMessage = async (req, res) => {
    try {

        const { message } = req.body;

        const reply = await generateAIResponse(message);

        const chat = await Chat.create({
            userId: req.user.userId,
            message,
            reply,
        });

        res.status(200).json({
            success: true,
            reply,
            chat,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};
export const getChatHistory = async (req, res) => {
    try {

        const chats = await Chat.find({
            userId: req.user.userId,
        }).sort({
            createdAt: 1,
        });

        res.status(200).json({
            success: true,
            chats,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};