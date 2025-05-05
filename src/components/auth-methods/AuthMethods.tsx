/** @format */

import React, { Fragment } from "react";
import { Button } from "../common";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { classNames } from "@/utils";
import { Divider } from "antd";
import { motion } from "framer-motion";

export interface AuthMethodsProps {
    animationClassName?: string;
}

const AuthMethods: React.FunctionComponent<AuthMethodsProps> = ({animationClassName}) => {
    const authMethods = [
        {
            name: "Facebook",
            icon: <FaFacebook />,
            className: "min-w-24 flex-1 hover:!opacity-90",
        },
        {
            name: "Twitter",
            icon: <FaTwitter />,
            className: "min-w-24 flex-1 hover:!opacity-90",
        },
        {
            name: "Github",
            icon: <FaGithub />,
            className: "min-w-24 flex-1 !bg-black hover:!opacity-80",
        },
    ]
    return <Fragment>
        <Divider className={classNames("!text-sm font-normal !my-2 dark:!border-gray-200 !border-gray-500 dark:!text-white !text-black", animationClassName)}>Or continue with</Divider>
        <div className="w-full flex flex-row items-center justify-between gap-4">
            {authMethods.map((method, index) => (
                <motion.div 
                    key={index}
                    className={animationClassName}
                    whileHover={{
                        scale: 1.025,
                        transition: {
                            type: "spring",
                            stiffness: 500,
                        }
                    }}
                >
                    <Button 
                        {...method}
                        displayText={method.name}
                    />
                </motion.div>
            ))}
        </div>
    </Fragment>
        
};

export { AuthMethods}