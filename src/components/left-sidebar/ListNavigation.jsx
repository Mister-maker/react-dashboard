import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { BiTask } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { AiOutlineTeam } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";

import { useLocation, Link } from "react-router-dom";

const ListNavigation = () => {
    const location = useLocation();

    const navigationList = [
        { title: "Home", link: "/", icon: <TiHomeOutline /> },
        { title: "Projects", link: "#", icon: <GrProjects />, dropDown: true },
        { title: "Tasks", link: "#", icon: <BiTask /> },
        { title: "Team", link: "#", icon: <AiOutlineTeam /> },
        {
            title: "Settings",
            link: "#",
            icon: <IoSettingsOutline />,
            dropDown: true,
        },
    ];
    return (
        <ul className="p-0 m-0 mt-12 space-y-3 min-h-[calc(100vh-12rem)] overflow-y-auto">
            {navigationList.map((item) => (
                <li
                    key={item.title}
                    className={`group hover:bg-black rounded-lg ${
                        location.pathname === item.link ? "bg-black" : ""
                    }`}
                >
                    <Link
                        to={item.link}
                        className={`flex gap-4 px-6 py-2 items-center justify-between text-gray-500 group-hover:text-white  ${
                            location.pathname === item.link
                                ? "bg-black text-white rounded-lg shadow-lg"
                                : ""
                        }`}
                    >
                        <div className="flex gap-4 items-center">
                            <span className="icon text-xl font-bold">
                                {item.icon}
                            </span>
                            {item.title}
                        </div>
                        {item.dropDown && (
                            <span className="w-100 h-100 rounded-full bg-gray-300 p-1">
                                <MdAdd className="text-xs" />
                            </span>
                        )}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ListNavigation;
