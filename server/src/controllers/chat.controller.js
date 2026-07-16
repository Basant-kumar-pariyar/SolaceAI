import Chat from "../models/Chat.js";
import { generateAIResponse } from "../services/ai.service.js";
import { detectCrisis } from "../utils/crisisDetection.js";

export const sendMessage = async (req, res) => {
    try {

        const { message } = req.body;

        // Step 1: Detect crisis message
        if (detectCrisis(message)) {

            return res.status(200).json({
                success: true,
                crisis: true,
                reply:
                    "I'm really sorry you're going through this. You don't have to face it alone. Please reach out to someone you trust, a mental health professional, or your local emergency services if you're in immediate danger. I'm here to listen and support you, but I'm not a substitute for professional help."
            });

        }

        // Step 2: Generate AI response
        const reply = await generateAIResponse(message);

        // Step 3: Save chat in MongoDB
        const chat = await Chat.create({
            userId: req.user.userId,
            message,
            reply,
        });

        // Step 4: Return response
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