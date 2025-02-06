import React from "react";
import { IProfileCard } from "../interfaces/custome-interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileCard: React.FC<IProfileCard> = ({
    name,
    avatar,
    bio,
    socialMediaLinks,
}) => {
    return (
        <div className="flex flex-col overflow-hidden text-center border-2 shadow-lg w-72 rounded-2xl card h-80 bg-clip-content">
            <div className="relative bg-blue-700 h-1/3">
                <div className="absolute w-24 h-24 transform -translate-x-1/2 left-1/2 top-1/4">
                    <img
                        src={avatar}
                        className="rounded-full ring-2 ring-white"
                    />
                </div>
            </div>
            <div className="flex flex-col flex-1 mx-3 mt-10 mb-4">
                <h2 className="text-lg font-medium">{name}</h2>
                <p className="flex-1 my-2 text-sm shrink-0 line-clamp-3">
                    {bio}
                </p>
                <div className="flex justify-center gap-x-4">
                    {socialMediaLinks.map(({ icon, url, color }, index) => (
                        <a key={index} href={url} target="_blank">
                            <FontAwesomeIcon
                                icon={icon}
                                href={url}
                                size="2xl"
                                color={color}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
