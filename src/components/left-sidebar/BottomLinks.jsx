import React from "react";
import { Link } from "react-router-dom";
import { MdInfoOutline } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";

const BottomLinks = () => {
    return (
        <ul className="p-0 m-0 space-y-3 h-[4rem]">
            <li className="flex gap-4 text-gray-300 ">
                <Link
                    to="/"
                    className="flex gap-4 px-6 items-center justify-between text-gray-500 "
                >
                    <MdInfoOutline className="text-xl" />
                    Help & Information
                </Link>
            </li>
            <li className="flex gap-4 text-gray-300">
                <Link
                    to="/"
                    className="flex gap-4 px-6 items-center justify-between text-gray-500"
                >
                    <FiMinusCircle className="text-xl" />
                    Log out
                </Link>
            </li>
        </ul>
    );
};

export default BottomLinks;
