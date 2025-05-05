/** @format */

import React from "react";
import { Button } from "../common";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const AuthMethods: React.FunctionComponent = () => {
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
    return <div className="w-full flex flex-row items-center justify-between gap-4">
        {authMethods.map((method, index) => (
            <Button 
                key={index}
                className={method.className}
                displayText={method.name}
                icon={method.icon} 
            />
        ))}
    </div>
};

export { AuthMethods}