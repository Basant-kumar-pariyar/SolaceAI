import express from "express";
import authRoutes from "./routes/auth.routes.js";
import chatRoutes from "./routes/chat.routes.js";
const app= express();


// Middleware
app.use(express.json());

//routes
app.use("/api/chat", chatRoutes);

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
