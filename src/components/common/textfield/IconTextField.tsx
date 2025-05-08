/** @format */

import React from "react";
import { Input, InputProps } from "antd";
import { useControllableState } from "@/hooks";
import "./IconTextField.scss"
import { classNames } from "@/utils";

export interface IIconTextInputProps extends Omit<InputProps, "onChange" | "value" | "autoComplete" | "variant" | "prefixCls"> {
    value?: string;
    errorMessage?: string;
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: () => void;
}
const IconTextField: React.FunctionComponent<IIconTextInputProps> = (props) => {
    const { value, onChange, onClear, className, errorMessage, ...rest } = props;
    const [internalInputValue, setInternalInputValue] = useControllableState<string>({
        value: value,
        defaultValue: value,
        onChange: (value, event) => {
            onChange?.(value, event);
        },
    });

    return (
        <Input
            {...rest}
            autoComplete="off"
            variant="outlined"
            value={internalInputValue}
            onChange={(event) => {
                setInternalInputValue(event.target.value, event);
            }}
            onClear={onClear}
            className={classNames(className, {
                "!border-red-600 dark:!border-red-400 !border-[1.5px]" : errorMessage
            })}
        />
    );
};

export { IconTextField };
