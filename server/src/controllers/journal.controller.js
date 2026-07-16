import Journal from "../models/Journal.js";

// Create Journal
export const createJournal = async (req, res) => {
  try {
    const { title, content } = req.body;

    const journal = await Journal.create({
      userId: req.user.userId,
      title,
      content,
    });

    res.status(201).json({
      success: true,
      journal,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Journals
export const getJournals = async (req, res) => {
  try {
    const journals = await Journal.find({
      userId: req.user.userId,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      journals,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Journal
export const updateJournal = async (req, res) => {
  try {

    const { id } = req.params;

    const { title, content } = req.body;

    const journal = await Journal.findOneAndUpdate(
      {
        _id: id,
        userId: req.user.userId,
      },
      {
        title,
        content,
      },
      {
        returnDocument: "after",
      }
    );

    if (!journal) {
      return res.status(404).json({
        success: false,
        message: "Journal not found.",
      });
    }

    res.status(200).json({
      success: true,
      journal,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Journal
export const deleteJournal = async (req, res) => {
  try {

    const { id } = req.params;

    const journal = await Journal.findOneAndDelete({
      _id: id,
      userId: req.user.userId,
    });

    if (!journal) {
      return res.status(404).json({
        success: false,
        message: "Journal not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Journal deleted successfully.",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};