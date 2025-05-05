/** @format */

import React from "react";
import { themeState, useAppDispatch, useAppSelector } from "@/redux-store";
import { clearNotification, notificationState } from "@/redux-store/reducers/notifications";
import { Modal } from "antd";
import { FaCheck } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdWarningAmber } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import "./Notification.scss";
import { Button } from "../common";

const NotificationDialog: React.FunctionComponent = () => {
    const { isOpen, message, type } = useAppSelector(notificationState);
    const { theme } = useAppSelector(themeState);
    const dispatch = useAppDispatch();

    const renderTitle = (): React.ReactNode => {
        let titleIcon = <></>
        switch (type) {
            case "success":
                titleIcon = <FaCheck className="dark:text-green-400 text-green-500 text-xl" />;
                break;
            case "error":
                titleIcon = <AiOutlineClose className="dark:text-red-500 text-red-700 text-xl" />;
                break;
            case "warning":
                titleIcon = <MdWarningAmber className="dark:text-yellow-400 text-yellow-600 text-xl" />;
                break;
            case "info":
                titleIcon = <IoMdInformationCircleOutline className="dark:text-blue-400 text-blue-700 text-xl" />;
                break;
            default:
                break;
        }
        return <div className="flex items-center gap-2">
            {titleIcon}
            <span className="dark:text-gray-200 text-gray-800 font-semibold">
                Notification
            </span>
        </div>
    }

    const onClose = () => {
        dispatch(clearNotification());
    }

    const renderFooter = (): React.ReactNode => {
        return (
            <div className="flex items-center justify-end">
                <Button displayText="Got It" onClick={onClose} />
            </div>
        );
    }

    return (
        isOpen && (
            <Modal
                open={isOpen}
                onCancel={onClose}
                footer={renderFooter()}
                centered
                width={400}
                title={renderTitle()}
                rootClassName={theme === "dark" ? "g-notification-dark-dialog" : "g-notification-dialog"}
            >
                <p className="text-[13px] dark:text-gray-200 text-gray-800">{message}</p>
            </Modal>
        )
    );
};

export default NotificationDialog;
