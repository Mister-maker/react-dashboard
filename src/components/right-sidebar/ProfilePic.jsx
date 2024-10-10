import React from "react";

const ProfilePic = ({
    picSize: { width, height, activeWidth, activeHeight },
}) => {
    return (
        <div className={`relative w-${width} h-${height} rounded-full`}>
            <img
                className="w-full h-full rounded-full border-2 border-white object-cover object-top"
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
                alt=""
            />
            <span
                className={`absolute rounded-full w-${activeWidth} h-${activeHeight} border-white border-2 bottom-0 right-0 bg-orange-600 translate-x-[-5px] translate-y-[-5px]`}
            ></span>
        </div>
    );
};

export default ProfilePic;
