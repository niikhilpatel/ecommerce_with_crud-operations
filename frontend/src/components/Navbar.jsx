import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUser(storedUser);

        window.addEventListener("storage", () => {
            const updatedUser = JSON.parse(localStorage.getItem("user"));
            setUser(updatedUser);
        });
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/sign-in");
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="flex justify-between my-5 mx-10">
            <div className="flex">
                <Link to="/">
                    <img src={Logo} alt="logo" className="w-40 h-20 rounded-md" />
                </Link>
            </div>

            <div className="flex gap-5 relative">
                <ul className="flex items-center justify-center gap-5">
                    <li className="text-2xl">
                        <Link to="/wishlist"><FaRegHeart /></Link>
                    </li>
                    <li className="text-2xl">
                        <Link to="/about"><IoCartOutline /></Link>
                    </li>
                    <li className="text-2xl relative">
                        <button onClick={toggleDropdown}>
                            <FaRegUser />
                        </button>

                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg border">
                                {user ? (
                                    <div className="flex flex-col items-center p-1">
                                        <span className="font-semibold text-xl">{user.name}</span>
                                        <button
                                            onClick={handleLogout}
                                            className="mt-2 bg-red-500 hover:bg-red-600 text-sm text-white px-3 py-1 rounded"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center p-3">
                                        <Link
                                            to="/sign-in"
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                                        >
                                            Login
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
