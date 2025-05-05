/** @format */

import React from "react";
import styled from "styled-components";
import { AuthMethodsProps } from "./AuthMethods";
import { classNames } from "@/utils";
import { Divider } from "antd";
import { motion } from "framer-motion";

const AuthMethodsMobile: React.FunctionComponent<AuthMethodsProps> = ({animationClassName}) => {
    return (
        <StyledWrapper>
            <Divider className={classNames("!text-sm font-normal !my-2 dark:!border-gray-200 !border-gray-500 dark:!text-white !text-black", animationClassName)}>Or continue with</Divider>
            <ul className="g-auth-method-mobile">
                <motion.li 
                    className={animationClassName}
                    whileHover={{
                        scale: 1.05,
                        transition: {
                            type: "spring",
                            stiffness: 500,
                        }
                    }}
                >
                    <div className="g-auth-method-icon facebook">
                        <span className="tooltip">Facebook</span>
                        <svg viewBox="0 0 320 512" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                    </div>
                </motion.li>
                <motion.li 
                    className={animationClassName}
                    whileHover={{
                        scale: 1.05,
                        transition: {
                            type: "spring",
                            stiffness: 500,
                        }
                    }}
                >
                    <div className="g-auth-method-icon twitter">
                        <span className="tooltip">Twitter</span>
                        <svg height="1.8em" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="twitter">
                            <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
                        </svg>
                    </div>
                </motion.li>
                <motion.li 
                    className={animationClassName}
                    whileHover={{
                        scale: 1.05,
                        transition: {
                            type: "spring",
                            stiffness: 500,
                        }
                    }}
                >
                    <div className="g-auth-method-icon github">
                        <span className="tooltip">Github</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.8em" viewBox="0 0 48 48">
                            <path d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z"/>
                        </svg>
                    </div>
                </motion.li>
            </ul>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .g-auth-method-mobile {
        display: inline-flex;
        list-style: none;
        margin: 1rem 0;
        height: auto;
        width: 100%;
        font-family: "Poppins", sans-serif;
        justify-content: space-between;
    }

    .g-auth-method-mobile .g-auth-method-icon {
        position: relative;
        background: #0284c7;
        color: #fff;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin: 0 10px;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .g-auth-method-mobile .g-auth-method-icon.github {
        background: #000;
        color: #fff;
    }

    .g-auth-method-mobile .tooltip {
        position: absolute;
        top: 0;
        font-size: 14px;
        background: #fff;
        color: #fff;
        padding: 5px 8px;
        border-radius: 5px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .g-auth-method-mobile .tooltip::before {
        position: absolute;
        content: "";
        height: 8px;
        width: 8px;
        background: #fff;
        bottom: -3px;
        left: 50%;
        transform: translate(-50%) rotate(45deg);
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .g-auth-method-mobile .g-auth-method-icon:hover .tooltip {
        top: -45px;
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }

    .g-auth-method-mobile .g-auth-method-icon:hover span,
    .g-auth-method-mobile .g-auth-method-icon:hover .tooltip {
        text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
    }

    .g-auth-method-mobile .facebook:hover,
    .g-auth-method-mobile .facebook:hover .tooltip,
    .g-auth-method-mobile .facebook:hover .tooltip::before {
        background: #0284c7;
        color: #fff;
    }

    .g-auth-method-mobile .twitter:hover,
    .g-auth-method-mobile .twitter:hover .tooltip,
    .g-auth-method-mobile .twitter:hover .tooltip::before {
        background: #0284c7;
        color: #fff;
    }

    .g-auth-method-mobile .github:hover,
    .g-auth-method-mobile .github:hover .tooltip,
    .g-auth-method-mobile .github:hover .tooltip::before {
        background: black;
        color: #fff;
    }
`;

export { AuthMethodsMobile };
