/** @format */

import React, { forwardRef } from "react";
import { Button as AntdButton, ButtonProps } from "antd";
import { classNames } from "@/utils";
import "./Button.scss"
import { useControllableState } from "@/hooks";


export interface IButtonProps extends Omit<ButtonProps, "type" | "loading" | "onClick" > {
    type?: "primary" | "default"
    displayText?: string;
    isLoading?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void | Promise<void>;
    setLoading?: (loading: boolean) => void;
}

const Button: React.FunctionComponent<IButtonProps> = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
    const { 
        displayText, 
        className, 
        children, 
        type = "primary",
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

    const commonButtonClass = React.useMemo(() => {
        return type === "primary"
            ? "!bg-[#0284c7] !flex !items-center !justify-center disabled:!border-none disabled:!text-white text-white !text-[13px] !shadow-none hover:!opacity-90 disabled:!opacity-60"
            : "dark:!bg-gray-400 dark:hover:!bg-gray-600 !bg-transparent hover:!bg-gray-100 !shadow-none dark:!border-none hover:!border-gray-300 dark:!text-white dark:hover:!text-white hover:!text-black"
    }, [type])
    
    return <AntdButton
        {...rest}
        ref={ref}
        type={type}
        className={classNames(commonButtonClass, className)}
        iconPosition={iconPosition}
        onClick={handleClick}
        loading={internalLoading}
        disabled={disableButton}
        
    >
        {displayText || children}
    </AntdButton>
});

export { Button };
