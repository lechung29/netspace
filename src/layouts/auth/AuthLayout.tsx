/** @format */
import NotificationDialog from "@/components/notification-dialog/NotificationDialog";
import React from "react";
import { Outlet } from "react-router-dom";
const AuthLayout: React.FunctionComponent = () => {
    return (
        <section className="sm:flex dark:bg-[#0f172a] h-screen w-screen overflow-auto">
            <div className="h-full w-full p-10 flex items-center justify-center">
                <Outlet />
            </div>
            <NotificationDialog />
        </section>
    );
};

export { AuthLayout };
