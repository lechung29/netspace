/** @format */

import React, { createContext, useContext } from "react";
import { notification } from "antd";
import type { ArgsProps } from "antd/es/notification";

export type INotificationMessageProps = Pick<ArgsProps, "type" | "onClick"> & {
    title?: ArgsProps["message"];
    message: ArgsProps["description"];
};

type NotificationContextType = {
    notify: (config: INotificationMessageProps) => void;
};

const NotificationContext = createContext<NotificationContextType | null>(null);

const useNotificationContext = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error("useNotificationContext must be used within a NotificationProvider");
    }
    return context;
};

const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [api, contextHolder] = notification.useNotification();

    const notify = (config: INotificationMessageProps) => {
        api.open({
            message: config.title || "Notification",
            description: config.message,
            type: config.type || "success",
            duration: 5,
            pauseOnHover: true,
            showProgress: true,
            placement: "topRight",
            className: "g-notification-message-wrap",
            onClick: config.onClick,
            role: "status",
        });
    };

    return (
        <NotificationContext.Provider value={{ notify }}>
            {contextHolder}
            {children}
        </NotificationContext.Provider>
    );
};

export { NotificationProvider, NotificationContext, useNotificationContext };
