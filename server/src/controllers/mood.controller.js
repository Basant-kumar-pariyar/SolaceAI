import Mood from "../models/Mood.js";
// create mood 
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
// get mood history
export const getMoodHistory = async (req, res) => {
  try {

    const moods = await Mood.find({
      userId: req.user.userId,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      moods,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
// we can update mood via user --- created mee haha
export const updateMood = async (req, res) => {
    try {

        const { id } = req.params;

        const { mood, intensity, note } = req.body;

        const updatedMood = await Mood.findOneAndUpdate(
            {
                _id: id,
                userId: req.user.userId,
            },
            {
                mood,
                intensity,
                note,
            },
            {
                new: true,
            }
        );

        if (!updatedMood) {
            return res.status(404).json({
                success: false,
                message: "Mood not found.",
            });
        }

        res.status(200).json({
            success: true,
            mood: updatedMood,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};
// delete mood .... history
export const deleteMood = async (req, res) => {
    try {

        const { id } = req.params;

        const deletedMood = await Mood.findOneAndDelete({
            _id: id,
            userId: req.user.userId,
        });

        if (!deletedMood) {
            return res.status(404).json({
                success: false,
                message: "Mood not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Mood deleted successfully.",
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};