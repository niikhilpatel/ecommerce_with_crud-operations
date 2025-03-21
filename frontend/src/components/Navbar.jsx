import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.webp";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between p-4">
            <div className="flex ">
                <img src={Logo} alt="logo" className="w-40 h-20  rounded-md"/>
                {/* <a className="font-bold text-4xl">LaceUp Hub</a> */}
            </div>
            <div>
                <button
                    className="bg-gray-900 text-white p-2 rounded-lg"
                    onClick={() => navigate("/sign-in")}
                >
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default Navbar;
