/** @format */

import React from "react";
import { Button as AntdButton, ButtonProps } from "antd";
import { classNames } from "@/utils";
import "./Button.scss"

export interface IButtonProps extends Omit<ButtonProps, "type" | "loading" | "onClick" > {
    displayText?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void | Promise<void>;
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const { 
        displayText, 
        className, 
        children, 
        iconPosition = "start", 
        disabled, 
        size = "middle", 
        onClick, 
        ...rest 
    } = props;
    const [isLoading, setIsLoading] = React.useState(false);

    const handleClick = (event: React.MouseEvent<HTMLElement>): void | Promise<void> => {
        setIsLoading(true)
        const suspensePromise: void | Promise<void> = onClick?.(event)
        if (suspensePromise instanceof Promise) {
            return suspensePromise.finally(() => setIsLoading(false));
        }
        setIsLoading(false);
    }

    const disableButton = React.useMemo(() => {
        return disabled || isLoading
    }, [disabled, isLoading])
    return <AntdButton
        {...rest}
        type="primary"
        className={classNames("!bg-[#0284c7] !flex !items-center !justify-center disabled:!text-white text-white !text-[13px] !shadow-none hover:!opacity-90 disabled:hover:!opacity-60", className)}
        iconPosition={iconPosition}
        onClick={handleClick}
        loading={isLoading}
        disabled={disableButton}
    >
        {displayText || children}
    </AntdButton>
};

export { Button };
