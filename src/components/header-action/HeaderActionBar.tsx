/** @format */

import React from "react";
import { IoAddOutline } from "react-icons/io5";
import { HiBellAlert } from "react-icons/hi2";
import { TbMessageFilled } from "react-icons/tb";
import { Avatar, Button, ButtonProps, Popover, PopoverProps } from "antd";
import { HeaderCreateContent } from "../header-create-content";

const HeaderActionBar: React.FunctionComponent = () => {
    const defaultPopoverProperties: Partial<PopoverProps> = {
        placement: "bottomRight",
        arrow: false,
        trigger: "click",
    };

    const popoverButtonProperties: Partial<ButtonProps> = {
        className: "!rounded-full !border-none !outline-none !w-10 !h-10 dark:!bg-[#293445] !bg-[#f1f5f9] hover:!opacity-90",
    };

    return (
        <div className="w-auto !pr-4 flex items-center justify-center gap-4">
            <Popover {...defaultPopoverProperties} content={<HeaderCreateContent />}>
                <Button {...popoverButtonProperties} icon={<IoAddOutline className="text-2xl dark:!text-white !text-black" />} />
            </Popover>
            <Popover content={<div className="w-40 h-40 bg-white dark:!bg-[#334155]"></div>} {...defaultPopoverProperties}>
                <Button {...popoverButtonProperties} icon={<HiBellAlert className="text-2xl dark:!text-white !text-black" />} />
            </Popover>
            <Popover content={<div className="w-40 h-40 bg-white dark:!bg-[#334155]"></div>} {...defaultPopoverProperties}>
                <Button {...popoverButtonProperties} icon={<TbMessageFilled className="text-2xl dark:!text-white !text-black" />} />
            </Popover>
            <Popover content={<div className="w-40 h-40 bg-white dark:!bg-[#334155]"></div>} {...defaultPopoverProperties}>
                <Avatar className="cursor-pointer !w-10 !h-10" src={"/src/assets/banner.jpg"} />
            </Popover>
        </div>
    );
};

export { HeaderActionBar };
