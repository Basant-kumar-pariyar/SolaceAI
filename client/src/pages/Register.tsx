import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/auth.service";

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        try {

            await registerUser(formData);

            alert("Registration Successful");

            navigate("/login");

        } catch (error: any) {

            alert(error.response?.data?.message || "Registration Failed");

        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950">

            <form
                onSubmit={handleSubmit}
                className="bg-slate-900 p-8 rounded-xl w-96 space-y-4"
            >

                <h1 className="text-3xl text-white font-bold">
                    Register
                </h1>

                <input
                    name="fullName"
                    placeholder="Full Name"
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800 text-white"
                />

                <input
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800 text-white"
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800 text-white"
                />

                <button
                    className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded text-white"
                >
                    Register
                </button>

                <p className="text-gray-400 text-sm text-center">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-purple-400"
                    >
                        Login
                    </Link>
                </p>

            </form>

        </div>
    );

};

export default Register;