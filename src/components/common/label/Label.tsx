/** @format */

import { classNames } from "@/utils";
import React from "react";

interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    displayText?: string;
}
const Label: React.FunctionComponent<ILabelProps> = (props) => {
    const { displayText, className, children, ...rest } = props;
    return <label
        {...rest}
        className={classNames("dark:text-white text-sm font-medium", className)}
    >
        {displayText || children}
    </label>
};

export { Label };
