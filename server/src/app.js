import express from "express";
import authRoutes from "./routes/auth.routes.js";
import chatRoutes from "./routes/chat.routes.js";
import moodRoutes from "./routes/mood.routes.js";
import journalRoutes from "./routes/journal.routes.js";
const app= express();


// Middleware
app.use(express.json());

//routes
app.use("/api/chat", chatRoutes);
app.use("/api/moods", moodRoutes);
app.use("/api/journals", journalRoutes);

// Home Route
app.get("/",(req,res)=>{
    res.json({
        success:true,
        message: "SolaceAI backend is running"
    });
});

// Authentication Routes
app.use("/api/auth", authRoutes);

export default app;
