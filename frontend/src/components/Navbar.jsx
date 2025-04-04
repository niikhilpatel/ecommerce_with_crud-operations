import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="flex justify-between my-5 mx-10">
            <div className="flex">
                <Link to="/">
                    <img src={Logo} alt="logo" className="w-40 h-20 rounded-md" />
                </Link>
            </div>
            <div className="flex gap-5">
                <ul className="flex items-center justify-center gap-5">
                    <li className="text-2xl">
                        <Link to="/wishlist"><FaRegHeart /></Link>
                    </li>
                    <li className="text-2xl">
                        <Link to="/about"><IoCartOutline /></Link>
                    </li>
                    <li className="text-2xl">
                        <Link to="/contact"><FaRegUser /></Link>
                    </li>
                    <li className="bg-gray-900 text-white py-2 px-3 rounded-lg">
                        <Link to="/sign-in">User not login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
