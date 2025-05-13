
/** @format */

import React from "react";
import { motion } from "framer-motion";
import { Avatar } from "antd";

const StoryAvatar: React.FunctionComponent = () => {
    return (
        <motion.div
            className="flex justify-center items-center w-full h-full"
            whileHover={{
                scale: 1.1,
            }}
        >
            <Avatar
                src="/src/assets/banner.jpg"
                alt="its me"
                className="!w-12 !h-12 cursor-pointer !border-4 !border-gray-300 dark:!border-gray-500 !shadow-md"
            />
        </motion.div>
    );
};

export { StoryAvatar };
