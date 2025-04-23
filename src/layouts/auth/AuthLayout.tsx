/** @format */
import React from "react";
import { Outlet } from "react-router-dom";
const AuthLayout: React.FunctionComponent = () => {
    return (
        <section className="sm:flex dark:bg-[#282727] h-screen w-screen overflow-auto">
            <div className="h-full w-full flex items-center justify-center">
                <Outlet />
            </div>
        </section>
    );
};

export { AuthLayout };
