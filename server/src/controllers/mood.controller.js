import Mood from "../models/Mood.js";

export const createMood = async (req, res) => {
  try {
    const { mood, intensity, note } = req.body;

    const newMood = await Mood.create({
      userId: req.user.userId,
      mood,
      intensity,
      note,
    });

    res.status(201).json({
      success: true,
      mood: newMood,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};