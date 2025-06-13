/** @format */

import { Avatar, Tooltip } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
const UserMenu: React.FunctionComponent = () => {
    const navigate = useNavigate();

    const userMenuList = [
        {
            key: "profile",
            title: "My Profile",
            icon: <IoSettingsOutline className="w-5 h-5" />,
            iconAlt: "profile-icon",
            isPrimary: true,
            onClick: () => navigate("/profile"),
        },
        {
            key: "account",
            title: "My Account",
            icon: <MdOutlineAccountCircle className="w-5 h-5" />,
            iconAlt: "settings-icon",
            isPrimary: true,
            onClick: () => navigate("/settings"),
        },
        {
            key: "logout",
            title: "Logout",
            icon: <HiOutlineLogout className="w-5 h-5" />,
            iconAlt: "logout-icon",
            isPrimary: false,
            onClick: () => {},
        },
    ];

    return (
        <div className="w-64 h-auto bg-white dark:!bg-[#334155]">
            <div className="w-full !py-3 !px-4 flex items-center gap-4 !border-b !border-gray-200 dark:!border-gray-600/60">
                <Avatar className="!w-10 rounded-full cursor-pointer" src="/src/assets/banner.jpg" size="large" alt="User" />
                <div className="flex-1 overflow-hidden">
                    <Tooltip placement="top" title={`Lionel Andrés "Leo" Messi`} mouseEnterDelay={0.35}>
                        <div className="text-sm font-semibold text-[#333] dark:text-white !overflow-hidden !text-ellipsis !whitespace-nowrap">Lionel Andrés "Leo" Messi</div>
                    </Tooltip>
                    <div className="text-sm !mt-0.5 text-blue-600 font-light dark:text-white/70">@mohnson</div>
                </div>
            </div>
            <div className="w-full !p-2 text-sm text-[#333] font-normal dark:text-white !border-b !border-gray-200 dark:!border-gray-600/60">
                {userMenuList
                    .filter((item) => item.isPrimary)
                    .map((item) => (
                        <div key={item.key} className="flex items-center gap-2.5 !p-2.5 !rounded-md bg-transparent hover:bg-[#f1f5f9] dark:hover:bg-white/10 cursor-pointer" onClick={item.onClick}>
                            {item.icon}
                            {item.title}
                        </div>
                    ))}
            </div>
            <div className="w-full !p-2 text-sm text-[#333] font-normal dark:text-white">
                {userMenuList
                    .filter((item) => !item.isPrimary)
                    .map((item) => (
                        <div
                            key={item.key}
                            className="flex items-center gap-2.5 !p-2 !px-2.5 !rounded-md bg-transparent hover:bg-[#f1f5f9] dark:hover:bg-white/10 cursor-pointer"
                            onClick={item.onClick}
                        >
                            {item.icon}
                            {item.title}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default UserMenu;
