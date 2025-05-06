/** @format */

import React from "react";
import { Button as AntdButton, ButtonProps } from "antd";
import { classNames } from "@/utils";
import "./Button.scss"
import { useControllableState } from "@/hooks";

export interface IButtonProps extends Omit<ButtonProps, "type" | "loading" | "onClick" > {
    displayText?: string;
    isLoading?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void | Promise<void>;
    setLoading?: (loading: boolean) => void;
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const { 
        displayText, 
        className, 
        children, 
        iconPosition = "start", 
        disabled, 
        size = "middle", 
        isLoading,
        setLoading,
        onClick, 
        ...rest 
    } = props;
    const [internalLoading, setInternalLoading] = useControllableState<boolean>({
        value: isLoading,
        defaultValue: isLoading,
        onChange: (value, _event) => {
            setLoading?.(value);
        },
    });

    const handleClick = (event: React.MouseEvent<HTMLElement>): void | Promise<void> => {
        setInternalLoading(true)
        const suspensePromise: void | Promise<void> = onClick?.(event)
        if (suspensePromise instanceof Promise) {
            return suspensePromise.finally(() => setInternalLoading(false));
        }
        setInternalLoading(false);
    }

    const disableButton = React.useMemo(() => {
        return disabled || internalLoading
    }, [disabled, internalLoading])
    return <AntdButton
        {...rest}
        type="primary"
        className={classNames("!bg-[#0284c7] !flex !items-center !justify-center disabled:!border-none disabled:!text-white text-white !text-[13px] !shadow-none hover:!opacity-90 disabled:hover:!opacity-60", className)}
        iconPosition={iconPosition}
        onClick={handleClick}
        loading={internalLoading}
        disabled={disableButton}
    >
        {displayText || children}
    </AntdButton>
};

export { Button };
