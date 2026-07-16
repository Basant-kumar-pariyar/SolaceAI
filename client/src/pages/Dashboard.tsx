import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { getDashboard } from "../services/dashboard.service";

const Dashboard = () => {
    const [data, setData] = useState<any>(null);

    const navigate = useNavigate();

    // Logout Function
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const res = await getDashboard();
                setData(res.data);
            } catch (error) {
                console.error(error);

                // If token is invalid or expired, redirect to login
                localStorage.removeItem("token");
                navigate("/login");
            }
        };

        fetchDashboard();
    }, [navigate]);

    if (!data) {
        return <h2>Loading Dashboard...</h2>;
    }

    return (
        <div style={{ padding: "40px" }}>

            {/* Header */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h1>Dashboard</h1>

                <button
                    onClick={handleLogout}
                    style={{
                        padding: "10px 18px",
                        cursor: "pointer",
                    }}
                >
                    Logout
                </button>
            </div>

            <hr />

            <h2>Statistics</h2>

            <p>Total Chats: {data.stats.totalChats}</p>

            <p>Total Moods: {data.stats.totalMoods}</p>

            <p>Total Journals: {data.stats.totalJournals}</p>

            <hr />

            <h2>Recent Mood</h2>

            {data.recentMood ? (
                <>
                    <p>Mood: {data.recentMood.mood}</p>
                    <p>Intensity: {data.recentMood.intensity}</p>
                </>
            ) : (
                <p>No mood found.</p>
            )}

            <hr />

            <h2>Recent Journal</h2>

            {data.recentJournal ? (
                <>
                    <p>Title: {data.recentJournal.title}</p>
                </>
            ) : (
                <p>No journal found.</p>
            )}

            <hr />

            <h2>Recent Chat</h2>

            {data.recentChat ? (
                <>
                    <p>{data.recentChat.message}</p>
                </>
            ) : (
                <p>No chat found.</p>
            )}
        </div>
    );
};

export default Dashboard;