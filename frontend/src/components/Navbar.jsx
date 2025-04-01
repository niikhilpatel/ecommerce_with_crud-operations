import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between p-4">
            <div className="flex ">
                <img onClick={() => navigate("/")} src={Logo} alt="logo" className="w-40 h-20 pb-2 rounded-md"/>
            </div>
            <div className="mr-8 mt-2">
                <button
                    className="bg-gray-900 text-white py-2 px-3 rounded-lg"
                    onClick={() => navigate("/sign-in")}
                >
                    User not login
                </button>
            </div>
        </div>
    );
};

export default Navbar;
