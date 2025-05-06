/** @format */

import React from "react";
import { Input, InputProps } from "antd";
import { useControllableState } from "@/hooks";
import { classNames } from "@/utils";

export interface ITextInputProps extends Omit<InputProps, "onChange" | "value" | "autoComplete" | "variant"> {
    value?: string;
    errorMessage?: string;
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: () => void;
    hideErrorMessage?: boolean;
}
const TextField: React.FunctionComponent<ITextInputProps> = (props) => {
    const { value, errorMessage, onChange, onClear, className, hideErrorMessage = false, ...rest } = props;
    const [internalInputValue, setInternalInputValue] = useControllableState<string>({
        value: value,
        defaultValue: value,
        onChange: (value, event) => {
            onChange?.(value, event);
        },
    });

    return (
        <div className="flex flex-col gap-2 w-full">
            <Input
                {...rest}
                autoComplete="off"
                variant="outlined"
                value={internalInputValue}
                onChange={(event) => {
                    setInternalInputValue(event.target.value, event);
                }}
                onClear={onClear}
                className={classNames(
                    "placeholder:!text-gray-800 !px-4 dark:placeholder:!text-gray-400 placeholder:!text-[13px] dark:!text-white !text-sm !border-[1.5px] !outline-none dark:!bg-[#1b2335] !bg-white !shadow-none",
                    errorMessage
                        ? "!border-red-600 dark:!border-red-400"
                        : "dark:hover:!border-white hover:!border-gray-800 dark:focus:!border-white focus:!border-gray-800 dark:disabled:!border-gray-500 disabled:!border-gray-300",
                    className
                )}
            />
            {!hideErrorMessage && errorMessage && <span className="text-red-600 dark:text-red-400 text-[12.5px] font-normal">{errorMessage}</span>}
        </div>
    );
};

export { TextField };
