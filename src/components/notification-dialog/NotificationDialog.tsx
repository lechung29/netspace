/** @format */

import React from "react";
import { themeState, useAppDispatch, useAppSelector } from "@/redux-store";
import { clearNotification, notificationState } from "@/redux-store/reducers/notifications";
import { Modal } from "antd";
import { FaCheck } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdWarningAmber } from "react-icons/md";
import { FaBan } from "react-icons/fa";
import "./Notification.scss";
import { Button } from "../common";
import { IconType } from "react-icons/lib";
import { classNames } from "@/utils";

const NotificationDialog: React.FunctionComponent = () => {
    const { isOpen, message, type } = useAppSelector(notificationState);
    const { theme } = useAppSelector(themeState);
    const dispatch = useAppDispatch();

    const renderTitle = (): React.ReactNode => {
        let TitleIcon: IconType | string = "";
        let titleText = "Notification";
        let titleClass = "dark:text-gray-200 text-gray-800";
        switch (type) {
            case "success":
                TitleIcon = FaCheck;
                titleText = "Success";
                titleClass = "dark:text-green-400 text-green-500";
                break;
            case "error":
                TitleIcon = FaBan;
                titleText = "Error";
                titleClass = "dark:text-red-500 text-red-700";
                break;
            case "warning":
                TitleIcon = MdWarningAmber;
                titleText = "Warning";
                titleClass = "dark:text-yellow-400 text-yellow-600";
                break;
            case "info":
                TitleIcon = IoMdInformationCircleOutline;
                titleText = "Info";
                titleClass = "dark:text-blue-400 text-blue-700";
                break;
            default:
                break;
        }
        return (
            <div className="flex items-center gap-2">
                <TitleIcon className={classNames("text-xl", titleClass)} />
                <span className={classNames("font-semibold", titleClass)}>{titleText}</span>
            </div>
        );
    };

    const onClose = () => {
        dispatch(clearNotification());
    };

    const renderFooter = (): React.ReactNode => {
        return (
            <div className="!mt-5 flex items-center justify-end gap-3">
                <Button displayText="Got It" onClick={onClose} />
            </div>
        );
    };

    return (
        isOpen && (
            <Modal
                open={isOpen}
                onCancel={onClose}
                footer={renderFooter()}
                centered
                width={400}
                maskClosable={false}
                title={renderTitle()}
                rootClassName={theme === "dark" ? "g-notification-dark-dialog" : "g-notification-dialog"}
            >
                <div className="text-[13px] dark:text-gray-200 text-gray-800">{message}</div>
            </Modal>
        )
    );
};

export { NotificationDialog };
