/** @format */

import React, { JSX } from "react";
import { FaBookOpen } from "react-icons/fa";
import { IoCamera } from "react-icons/io5";
import { HiVideoCamera } from "react-icons/hi2";

const HeaderCreateContent: React.FunctionComponent = () => {
    const createActionSubItem = [
        {
            title: "Group",
            description: "Meet people with similar interests.",
            icon: "https://img.icons8.com/color/48/staff-skin-type-7.png",
            iconAlt: "group-icon",
            onClick: () => console.log("Group clicked"),
        },
        {
            title: "Page",
            description: "Find and connect with business.",
            icon: "https://img.icons8.com/arcade/64/flag.png",
            iconAlt: "page-icon",
            onClick: () => console.log("Page clicked"),
        },
    ]

    const onRenderCreateActionSubItem = (): JSX.Element => (<>
        {createActionSubItem.map((item, index) => (
            <div key={index} className="w-full !p-2 flex items-center justify-between gap-4 rounded-lg cursor-pointer hover:!bg-[#f1f5f9] dark:hover:!bg-[#485466]" onClick={item.onClick}>
                <img 
                    className="w-8 h-8" 
                    src={item.icon} 
                    alt={item.iconAlt}
                />
                <div className="flex-1 flex flex-col">
                    <p className="font-medium dark:!text-white !text-black !text-sm">{item.title}</p>
                    <p className="dark:!text-gray-300 !text-gray-700 text-[12px]">{item.description}</p>
                </div>
            </div>
        ))}
    </>)
    
    const onRenderCreateActionItem = (type: string, onClick?: () => void | Promise<void>): JSX.Element => {
        let icon: JSX.Element = <></>
        let lightBgColor: string = ""
        let lightTextColor: string = ""
        switch (type) {
            case "Story":
                icon = <FaBookOpen className="text-2xl !text-[#0d9488] dark:!text-white" />;
                lightBgColor = "!bg-[#e0fdf7]"
                lightTextColor = "!text-[#17998e]"
                break;
            case "Post":
                icon = <IoCamera className="text-2xl !text-[#0284c7] dark:!text-white" />;
                lightBgColor = "!bg-[#ecf7fe]"
                lightTextColor = "!text-[#0284C7]"
                break;
            case "Reel":
                icon = <HiVideoCamera className="text-2xl !text-[#9333ea] dark:!text-white" />;
                lightBgColor = "!bg-[#f8f1ff]"
                lightTextColor = "!text-[#9f49ec]"
                break;
        }
        return (
            <div className={`flex-1 flex flex-col gap-2 !p-4 rounded-lg dark:!bg-[#475569] ${lightBgColor} hover:opacity-80 cursor-pointer`} onClick={onClick}>
                {icon}
                <p className={`text-sm font-semibold dark:!text-white ${lightTextColor}`}>Story</p>
            </div>
        );
    };

    return (
        <div className="w-86 h-auto !p-4 bg-white dark:!bg-[#334155]">
            <div className="w-full !text-black dark:!text-white font-semibold !text-[16px]">Create</div>
            <div className="w-full !mt-4 flex items-center justify-center gap-2">
                {onRenderCreateActionItem("Story")}
                {onRenderCreateActionItem("Post")}
                {onRenderCreateActionItem("Reel")}
            </div>
            <div className="w-full !mt-4 flex flex-col gap-2">
                {onRenderCreateActionSubItem()}
            </div>
        </div>
    );
};

export { HeaderCreateContent }
