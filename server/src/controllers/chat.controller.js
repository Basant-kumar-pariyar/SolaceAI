import { generateAIResponse } from "../services/ai.service.js";

export const sendMessage = async (req, res) => {
    try {

        const { message } = req.body;

        const reply = await generateAIResponse(message);

        res.status(200).json({
            success: true,
            reply,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};