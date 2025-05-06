/** @format */

import React from "react";
import "./Dialog.scss";
import { Modal, ModalProps } from "antd";
import { themeState, useAppSelector } from "@/redux-store";

export interface IDialogProp extends Omit<ModalProps, "onOk" | "okText" | "rootClassName" | "center" | "maskClosable"> {
    onRenderContent?: React.ReactNode
    onConfirm?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>
}

const Dialog: React.FunctionComponent<IDialogProp> = (props) => {
    const { open, title, width = 550, confirmLoading, children, okButtonProps, cancelButtonProps, onRenderContent, onConfirm, ...rest } = props;
    const { theme } = useAppSelector(themeState);
    return (
        open && (
            <Modal
                {...rest}
                rootClassName={theme === "dark" ? "g-dark-dialog" : "g-dialog"}
                title={title || "Notification"}
                open={open}
                centered
                width={width}
                onOk={onConfirm}
                confirmLoading={confirmLoading}
                okText="Confirm"
                maskClosable={false}
                cancelButtonProps={{
                    ...cancelButtonProps,
                    className: "dark:!bg-gray-400 dark:hover:!bg-gray-600 !bg-transparent hover:!bg-gray-100 !shadow-none dark:!border-none hover:!border-gray-300 dark:!text-white dark:hover:!text-white hover:!text-black",
                }}
                okButtonProps={{
                    ...okButtonProps,
                    className: "!bg-[#0284c7] !flex !items-center !justify-center disabled:!border-none disabled:!text-white text-white !text-[13px] !shadow-none hover:!opacity-90 disabled:!opacity-60",
                }}
            >
                {onRenderContent || children}
            </Modal>
        )
    );
};

export { Dialog };
