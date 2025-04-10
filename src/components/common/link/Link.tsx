/** @format */

import React from "react";
import { LinkProps, Link } from "react-router-dom";

export interface ILinkProps extends LinkProps {
    displayText?: string;
}

const LinkView: React.FunctionComponent<ILinkProps> = (props) => {
    const { displayText, ...rest } = props;
    return <Link {...rest}>{displayText || props.children}</Link>;
};

export { LinkView as Link };
