import React from "react";
import ChatProfile from "./ChatProfile";
import ChatCard from "./ChatCard";
import ChatInput from "./ChatInput";

const RightSideBar = () => {
    return (
        <div className="p-4 border-l-2 border-gray-300">
            <ChatProfile />
            <div className="flex relative items-center justify-between my-2">
                <span className="border-t-2 w-2/6 h-0 border-gray-100"></span>
                <p className="text-sm">Activity</p>
                <span className="border-t-2 w-2/6 h-0 border-gray-100"></span>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-23rem)]">
                <ChatCard />
                <ChatCard />
            </div>
            <ChatInput />
        </div>
    );
};

export default RightSideBar;
