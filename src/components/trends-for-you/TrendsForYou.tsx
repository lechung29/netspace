/** @format */

import React from "react";
import { GoHash } from "react-icons/go";

const TrendsForYou: React.FunctionComponent = () => {
    return (
        <div className="w-full h-auto !p-4 !shadow-sm !bg-white dark:!bg-[#1e293b] !rounded-xl">
            <div className="!text-[16px] dark:!text-white !text-dark font-bold !mb-4">Trends for you</div>
            <div className="w-full flex flex-col gap-2">
                {Array.from({ length: 4 }).map((_, id) => (
                    <div key={id} className="flex !flex-row items-center gap-3 !p-2 rounded-xl bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                        <GoHash className="text-[#333] dark:text-white w-6 h-6" />
                        <div className="flex-1">
                            <p className="dark:!text-white !text-black !text-sm font-semibold">Artificial intelligence</p>
                            <p className="!text-xs dark:!text-gray-300 text-[#4b5563]">1,245,62 posts</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { TrendsForYou };
