/** @format */

import { Avatar } from "antd";
import React from "react";
import { Button } from "../common";

const PeopleYouMightKnow: React.FunctionComponent = () => {
    return (
        <div className="w-full h-auto !p-4 !shadow-sm !bg-white dark:!bg-[#1e293b] !rounded-xl">
            <div className="!text-[14px] dark:!text-white !text-dark font-semibold !mb-4">People you might know</div>
            <div className="w-full flex flex-col gap-4">
                {Array.from({ length: 5 }).map((_, id) => (
                    <div key={id} className="flex !flex-row items-center gap-3">
                        <Avatar src="/src/assets/banner.jpg" alt="User" className="w-10 h-10 rounded-full" />
                        <div className="flex-1 flex flex-col">
                            <p className="dark:!text-white !text-black !text-sm font-semibold">John Doe</p>
                            <p className="!text-[12px] dark:!text-gray-300 text-gray-700">125K Following</p>
                        </div>
                        <Button
                            className="!text-[12px] !text-[#1f92ce] hover:!text-green-600 dark:!text-white dark:hover:!text-gray-800 !bg-[#e0f2fe] hover:!bg-green-200 dark:!bg-[#334150] dark:hover:!bg-gray-200 !rounded-lg !px-4 !py-1"
                            displayText="Follow"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export { PeopleYouMightKnow };
