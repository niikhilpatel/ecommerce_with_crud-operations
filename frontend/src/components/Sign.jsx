import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("User Data:", formData);
            alert("Sign-up successful!");
            navigate("/"); // Redirect to home page
        }
    };

    return (
        <div className="flex justify-center items-center">
            {/* Gradient Border Wrapper */}
            <div className="relative p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl">
                {/* Inner Card with White Background */}
                <div className="bg-white p-3 rounded-xl shadow-md w-75">
                    <h2 className="text-2xl font-bold mb-2 text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        <div className="flex items-center gap-3">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div className="flex items-center gap-3">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gray-900 text-white p-2 rounded-lg hover:bg-gray-800 transition"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-sm mt-3 text-center">
                        Already have an account?{" "}
                        <button
                            onClick={() => navigate("/sign-in")}
                            className="text-blue-500 underline"
                        >
                            Sign in
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
