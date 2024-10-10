import React from "react";
import ProfilePic from "./ProfilePic";

const ChatCard = () => {
    const picSize = {
        width: "10",
        height: "10",
        activeWidth: "4",
        activeHeight: "4",
    };
    return (
        <div className="grid grid-cols-[50px_1fr] gap-2">
            <ProfilePic picSize={picSize} />
            <div className="flex flex-col">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                        <h3 className="text-sm font-bold">Sweetie</h3>
                        <p className="text-[0.8rem]">
                            Commented on{" "}
                            <span className="text-blue-400">Stark Project</span>
                        </p>
                    </div>

                    <p className="text-xs">10:15 AM</p>
                </div>
                <div className="flex rounded-2xl bg-blue-100 p-3 mt-4 mb-8 relative">
                    <p className="text-black font-medium">
                        Hi there, how are you? This is great! Nice to hear you.
                    </p>
                    <span className="absolute bottom-[-15px] right-4 flex w-8 h-8 items-center justify-center border-2 border-white bg-blue-100 rounded-full">
                        👍
                    </span>
                    {/* Chat Tail */}
                    <div className="absolute left-[-6px] top-0 w-0 h-0 border-t-[20px] border-t-blue-100 border-l-transparent border-l-[10px] border-r-transparent border-r-[10px]"></div>
                </div>
            </div>
        </div>
    );
};

export default ChatCard;
