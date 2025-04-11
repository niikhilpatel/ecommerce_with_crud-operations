import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const toggleMode = () => {
        setIsSignUp((prev) => !prev);
        setErrors({});
        setFormData({
            name: "",
            email: "",
            password: "",
        });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (isSignUp && !formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const url = isSignUp 
                    ? "http://localhost:5000/api/auth/signup" 
                    : "http://localhost:5000/api/auth/login";
                    
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (response.ok) {
                    alert(isSignUp ? "Signup successful!" : "Login successful!");
                    navigate("/dashboard");
                } else {
                    alert(data.message || (isSignUp ? "Signup failed" : "Login failed"));
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred");
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="relative p-1 bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-md w-80">
                    <h2 className="text-2xl font-bold mb-4 text-center">
                        {isSignUp ? "Sign Up" : "Login"}
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {isSignUp && (
                            <div>
                                <label className="block text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>
                        )}
                        <div>
                            <label className="block text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
                        >
                            {isSignUp ? "Sign Up" : "Login"}
                        </button>
                    </form>

                    <p className="text-center mt-4 text-sm">
                        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                        <button onClick={toggleMode} className="text-blue-500 hover:underline">
                            {isSignUp ? "Login" : "Sign Up"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Auth;
