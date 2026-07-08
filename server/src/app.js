import express from "express";

const app= express();

// Home Route
app.get("/",(req,res)=>{
    res.json({
        success:true,
        message: "SolaceAI backend is running"
    });
});

export default app;
