/** @format */

import React from "react";
import styled from "styled-components";
import { AuthMethodsProps } from "./AuthMethods";
import { classNames } from "@/utils";
import { Divider } from "antd";
import { motion } from "framer-motion";

const AuthMethodsMobile: React.FunctionComponent<AuthMethodsProps> = ({ animationClassName }) => {
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
                        },
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
                        },
                    }}
                >
                    <div className="g-auth-method-icon google">
                        <span className="tooltip">Google</span>
                        <svg  height="1.4em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="google" viewBox="0 0 64 64">
                            <path d="M 32.521484 6 C 18.158484 6 6.515625 17.642 6.515625 32 C 6.515625 46.358 18.158484 58 32.521484 58 C 54.209484 58 59.098453 37.865969 57.064453 27.667969 L 51.181641 27.667969 L 49.269531 27.667969 L 32.515625 27.667969 L 32.515625 36.333984 L 49.279297 36.333984 C 47.351759 43.804816 40.588119 49.332031 32.515625 49.332031 C 22.943625 49.332031 15.181641 41.572 15.181641 32 C 15.181641 22.428 22.943625 14.667969 32.515625 14.667969 C 36.868625 14.667969 40.834906 16.283594 43.878906 18.933594 L 50.033203 12.779297 C 45.410203 8.5672969 39.266484 6 32.521484 6 z"></path>
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
                        },
                    }}
                >
                    <div className="g-auth-method-icon github">
                        <span className="tooltip">Github</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.8em" viewBox="0 0 48 48">
                            <path d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z" />
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

    .g-auth-method-mobile .g-auth-method-icon.google {
        background: #e4405f;
        color: #fff;
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

    .g-auth-method-mobile .google:hover,
    .g-auth-method-mobile .google:hover .tooltip,
    .g-auth-method-mobile .google:hover .tooltip::before {
        background: #e4405f;
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
