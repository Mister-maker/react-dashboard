import { FiPhone } from "react-icons/fi";
import { MdOutlineCameraAlt } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";
import ProfilePic from "./ProfilePic";

const ChatProfile = () => {
    return (
        <div className="flex flex-col min-h-64 justify-center w-full items-center bg-gray-300 rounded-2xl">
            <ProfilePic
                picSize={{
                    width: "24",
                    height: "24",
                    activeWidth: "6",
                    activeHeight: "6",
                }}
            />
            <h1 className="text-md font-medium">Sweetie Fox</h1>
            <p className="text-sm">@sweetiefox</p>
            <div className="flex justify-between min-w-36 mt-2">
                <span className="rounded-full w-10 h-10 bg-white flex items-center justify-center font-bold">
                    <FiPhone />
                </span>
                <span className="rounded-full w-10 h-10 bg-white flex items-center justify-center font-bold">
                    <MdOutlineCameraAlt />
                </span>
                <span className="rounded-full w-10 h-10 bg-white flex items-center justify-center font-bold">
                    <MdMoreVert />
                </span>
            </div>
        </div>
    );
};

export default ChatProfile;
