/** @format */

import { classNames } from "@/utils";
import React from "react";
import { LinkProps, Link } from "react-router-dom";

export interface ILinkProps extends LinkProps {
    displayText?: string;
    withUnderline?: boolean;
}

const LinkView: React.FunctionComponent<ILinkProps> = (props) => {
    const { displayText, className, withUnderline, ...rest } = props;
    return <Link 
        {...rest} 
        className={classNames("!text-blue-600 dark:!text-blue-400 text-[13px] font-normal", { "hover:!underline": withUnderline }, className)}
    >
        {displayText || props.children}
    </Link>;
};

export { LinkView as Link };
