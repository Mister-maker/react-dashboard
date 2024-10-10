import React from "react";
import { BiMoon, BiSearch } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const TopBar = () => {
    return (
        <div className="bg-white shadow-lg p-4 flex items-center justify-between space-x-2">
            <GiHamburgerMenu className="text-2xl" />

            {/* Search Bar */}
            <div className="relative w-full max-w-sm">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                    <BiSearch />
                </span>
            </div>
            <div className="flex">
                <BiMoon className="text-2xl" />
                <FaRegBell className="text-2xl ml-4" />
            </div>
        </div>
    );
};

export default TopBar;
