import Chat from "../models/Chat.js";
import Mood from "../models/Mood.js";
import Journal from "../models/Journal.js";

export const getDashboard = async (req, res) => {
  try {
    const userId = req.user.userId;

    const [
      totalChats,
      totalMoods,
      totalJournals,
      recentMood,
      recentJournal,
      recentChat,
    ] = await Promise.all([
      Chat.countDocuments({ userId }),
      Mood.countDocuments({ userId }),
      Journal.countDocuments({ userId }),

      Mood.findOne({ userId }).sort({ createdAt: -1 }),

      Journal.findOne({ userId }).sort({ createdAt: -1 }),

      Chat.findOne({ userId }).sort({ createdAt: -1 }),
    ]);

    res.status(200).json({
      success: true,

      stats: {
        totalChats,
        totalMoods,
        totalJournals,
      },

      recentMood,

      recentJournal,

      recentChat,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};