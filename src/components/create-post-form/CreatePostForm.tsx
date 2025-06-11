/** @format */

import { Popover, Tooltip } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";
import { Button } from "../common";
import { IoChevronDown } from "react-icons/io5";
import { classNames } from "@/utils";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { BsImageFill } from "react-icons/bs";
import { IoVideocam } from "react-icons/io5";
import { TbMoodSmileFilled } from "react-icons/tb";
import { MdPlace } from "react-icons/md";
import TextArea from "antd/es/input/TextArea";

type IShareWith = "Everyone" | "Friends" | "Only Me";

export const shareWithOptions: IShareWith[] = ["Everyone", "Friends", "Only Me"];

const CreatePostForm: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpenShareWith, setIsOpenShareWith] = React.useState(false);
    const [shareWith, setShareWith] = React.useState<IShareWith>("Everyone");
    const [tempShareWith, setTempShareWith] = React.useState<IShareWith>("Everyone");

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false);
        }
    };

    const onOpenChangeShareWithMenu = (isOpen: boolean) => {
        setIsOpenShareWith(isOpen);
        if (!isOpen) {
            setShareWith(tempShareWith);
        }
    };

    const handleChangeTempShareWith = (value: IShareWith) => {
        setTempShareWith(value);
    };

    const shareWithContent = React.useMemo(() => {
        return (
            <div className="w-60 bg-white dark:bg-[#334155] normal-box-shadow !p-2 text-sm font-medium">
                {shareWithOptions.map((option) => (
                    <div
                        className="!py-2 !px-3 flex items-center justify-between cursor-pointer bg-transparent hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg"
                        onClick={() => handleChangeTempShareWith(option)}
                        key={option}
                    >
                        <p className="flex-1 text-[#333] dark:text-white">{option}</p>
                        {tempShareWith === option && <IoCheckmarkCircleSharp className="w-5 h-5 text-blue-500" />}
                    </div>
                ))}
            </div>
        );
    }, [tempShareWith, isOpenShareWith]);

    return (
        <div className="!bg-white !rounded-xl normal-box-shadow md:!p-4 !p-2 !space-y-4 text-sm font-medium dark:!bg-[#1e293b]">
            <div className="flex items-center md:!gap-3 gap-1">
                <div className="flex-1 bg-slate-100 dark:bg-[#2f3c50] hover:!opacity-80 transition-all rounded-lg cursor-pointer" onClick={handleOpen}>
                    <div className="!py-2.5 text-center text-[#4b5563] dark:text-white" tabIndex={0}>
                        What do you have in mind?
                    </div>
                </div>
                <Tooltip placement="top" title="New post with image" mouseEnterDelay={0.35}>
                    <div
                        className="cursor-pointer hover:opacity-80 !p-1 !px-1.5 rounded-lg transition-all bg-pink-100/60 hover:bg-pink-100 dark:bg-white/10 dark:hover:bg-white/20"
                        tabIndex={0}
                        onClick={handleOpen}
                    >
                        <img
                            className="w-8 h-8 stroke-pink-600 fill-pink-200/70"
                            src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-Picture-technology-and-vr-smashingstocks-flat-smashing-stocks.png"
                            alt="image-icon"
                        />
                    </div>
                </Tooltip>
                <Tooltip placement="top" title="New post with video" mouseEnterDelay={0.35}>
                    <div
                        className="cursor-pointer hover:opacity-80 !p-1 !px-1.5 rounded-lg transition-all bg-sky-100/60 hover:bg-sky-100 dark:bg-white/10 dark:hover:bg-white/20"
                        tabIndex={0}
                        onClick={handleOpen}
                    >
                        <img className="w-8 h-8 stroke-sky-600 fill-sky-200/70" src="https://img.icons8.com/plasticine/100/video-call.png" alt="video-icon" />
                    </div>
                </Tooltip>
            </div>

            {isOpen &&
                ReactDOM.createPortal(
                    <div className="fixed inset-0 backdrop-blur-xs bg-black/50 flex items-center justify-center z-50" onClick={handleOverlayClick}>
                        <div className="bg-white dark:bg-[#1e293b] !shadow-lg rounded-md w-11/12 max-w-[560px] min-h-90 relative flex flex-col dialog-fade-in">
                            <div className="flex items-center justify-between !py-3 !px-4 !border-b !border-gray-200 dark:!border-slate-700">
                                <div className="flex-1 text-center text-sm">Create status</div>
                                <div className="!bg-transparent dark:hover:!bg-gray-500 hover:!bg-gray-200  transition-all cursor-pointer !p-1 rounded-full" onClick={() => setIsOpen(false)}>
                                    <IoMdClose className="w-6 h-6 text-[#333] dark:text-white" />
                                </div>
                            </div>
                            <div className="flex-1 !px-4 !py-3">
                                <TextArea 
                                    rows={7} 
                                    placeholder="What do you have in mind?"
                                    className="custom-textarea !border-0 !bg-transparent focus:!ring-0 placeholder:!text-gray-400 dark:placeholder:!text-gray-200 !text-[#333] dark:!text-white !text-lg"
                                />
                            </div>
                            <div className="flex items-center gap-2 text-sm !py-2 !px-4 font-medium flex-wrap">
                                <button
                                    aria-label="Image"
                                    tabIndex={0}
                                    type="button"
                                    className="flex items-center gap-1.5 !bg-sky-50 !text-sky-600 !rounded-full !py-1 !px-2 !border-2 !border-sky-100 dark:!bg-sky-950 dark:!border-sky-900 cursor-pointer"
                                >
                                    <BsImageFill className="w-4 h-4" />
                                    {"Image"}
                                </button>
                                <button
                                    aria-label="Video"
                                    tabIndex={0}
                                    type="button"
                                    className="flex items-center gap-1.5 !bg-teal-50 !text-teal-600 !rounded-full !py-1 !px-2 !border-2 !border-teal-100 dark:!bg-teal-950 dark:!border-teal-900 cursor-pointer"
                                >
                                    <IoVideocam className="w-4 h-4" />
                                    {"Video"}
                                </button>
                                <button
                                    aria-label="Feeling"
                                    tabIndex={0}
                                    type="button"
                                    className="flex items-center gap-1.5 !bg-orange-50 !text-orange-600 !rounded-full !py-1 !px-2 !border-2 !border-orange-100 dark:!bg-yellow-950 dark:!border-yellow-900 cursor-pointer"
                                >
                                    <TbMoodSmileFilled className="w-4 h-4" />
                                    {"Feeling"}
                                </button>
                                <button
                                    aria-label="Check in"
                                    tabIndex={0}
                                    type="button"
                                    className="flex items-center gap-1.5 !bg-red-50 !text-red-600 !rounded-full !py-1 !px-2 !border-2 !border-rose-100 dark:!bg-rose-950 dark:!border-rose-900 cursor-pointer"
                                >
                                    <MdPlace className="w-4 h-4" />
                                    {"Check in"}
                                </button>
                            </div>
                            <div className="flex items-center justify-between !py-4 !px-4">
                                <Popover trigger="click" placement="topLeft" arrow={false} open={isOpenShareWith} onOpenChange={onOpenChangeShareWithMenu} content={shareWithContent}>
                                    <div className="bg-[#f1f5f9] dark:bg-[#334155] w-28 !px-3 !py-1.5 rounded-2xl flex items-center cursor-pointer">
                                        <div className="text-sm text-[#333] dark:text-white flex-1 !mr-1">{shareWith}</div>
                                        <IoChevronDown className={classNames("w-4 h-4 text-[#333] dark:text-white transition-transform duration-300", { "rotate-180": isOpenShareWith })} />
                                    </div>
                                </Popover>
                                <Button className="w-34 !h-9" displayText="Create" />
                            </div>
                        </div>
                    </div>,
                    document.getElementById("create-post-dialog-root")!
                )}
        </div>
    );
};

export { CreatePostForm };
