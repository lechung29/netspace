/** @format */

import { useControllableState } from "@/hooks";
import { classNames } from "@/utils";
import { Checkbox, CheckboxChangeEvent, CheckboxProps } from "antd";
import React from "react";

export interface ICheckBoxProps extends Omit<CheckboxProps, "onChange" > {
    displayText?: string;
    onRenderLabel?: React.JSX.Element;
    onChangeValue?: (value: boolean) => void
}

const CheckboxView: React.FunctionComponent<ICheckBoxProps> = (props) => {
    const {
        displayText,
        children,
        disabled,
        className,
        checked,
        defaultChecked,
        onRenderLabel,
        onChangeValue,
        ...rest
    } = props
    const [internalValue, setInternalValue] = useControllableState<boolean>({
        value: checked,
        defaultValue: defaultChecked,
        onChange: (value, _event) => {
            onChangeValue?.(value)
        }
    })

    const onCheckBoxChange = (event: CheckboxChangeEvent): void => {
        setInternalValue(event.target.checked)
    };

    return <Checkbox
        {...rest}
        className={classNames("select-none !text-[13px] font-normal dark:!text-white !text-gray-700", className)}
        disabled={disabled}
        checked={internalValue}
        defaultChecked={internalValue}
        onChange={onCheckBoxChange}
    >
        {displayText || onRenderLabel || children}
    </Checkbox>;
};

export { CheckboxView as Checkbox };
