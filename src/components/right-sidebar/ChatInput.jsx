import React from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { FiMic, FiSend } from "react-icons/fi";

const ChatInput = () => {
    return (
        <div className="w-full bg-gray-200 p-2 rounded flex items-center justify-between">
            <FiSend className="text-xl text-gray-500" />
            <input
                type="text"
                className="bg-gray-200 border- w-3/4 active:borner-none outline-none"
                placeholder="Write a message..."
            />
            <BsEmojiLaughing className="text-xl text-gray-500" />
            <FiMic className="text-xl text-gray-500" />
        </div>
    );
};

export default ChatInput;
