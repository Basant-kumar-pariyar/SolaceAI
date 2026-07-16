import mongoose from "mongoose";

const moodSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    mood: {
      type: String,
      enum: [
        "Happy",
        "Sad",
        "Angry",
        "Anxious",
        "Calm",
        "Stressed",
        "Excited",
      ],
      required: true,
    },

    intensity: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },

    note: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Mood = mongoose.model("Mood", moodSchema);

export default Mood;