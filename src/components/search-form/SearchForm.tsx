/** @format */

import React, { Fragment } from "react";
import { IoSearch, IoCloseCircle } from "react-icons/io5";
import { IconTextField } from "../common";
import { classNames } from "@/utils";
import { InputRef } from "antd";

const SearchForm: React.FunctionComponent = () => {
    const [isFocusedInput, setIsFocusedInput] = React.useState(false);
    const [isFocusedContent, setIsFocusedContent] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState<string>("");
    const inputRef = React.useRef<InputRef>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);

    const handleFocusInput = (): void => {
        setIsFocusedInput(true);
        setIsFocusedContent(true);
    }

    const handleBlurInput = (): void => {
        setIsFocusedInput(false);
    }

    React.useEffect(() => {
        const handleClickOutsideContent = (event: MouseEvent) => {
            if (!isFocusedInput && contentRef.current && !contentRef.current.contains(event.target as Node)) {
                setIsFocusedContent(false);
            }
        };

        document.addEventListener("click", handleClickOutsideContent);
        return () => {
            document.removeEventListener("click", handleClickOutsideContent);
        };
    }, [isFocusedInput, isFocusedContent]);

    const onClearInput:React.MouseEventHandler<SVGElement> = (event) => {
        event.stopPropagation();
        setSearchValue("");
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
    
    return (
        <Fragment>
            <IconTextField
                ref={inputRef}
                onFocus={handleFocusInput}
                onBlur={handleBlurInput}
                className="w-full !rounded-xl dark:!bg-[#293445] !bg-[#f1f5f9] h-10 !z-20"
                placeholder="Search Friends, Groups, Videos..."
                value={searchValue}
                onChange={(value) => {
                    setSearchValue(value);
                }}
                prefix={<IoSearch/>}
                suffix={searchValue && <IoCloseCircle className="cursor-pointer" onClick={onClearInput} />}
            />
            <div
                ref={contentRef}
                className={classNames("absolute top-[2px] !w-full !rounded-xl !shadow-2xl !opacity-0 !h-80 bg-white dark:!bg-[#334155] group-focus-within:!opacity-100 !p-4 !pt-14 transition-opacity duration-400 !z-10", {
                    "!opacity-100": isFocusedInput || isFocusedContent,
                })}
            >
                <div className="w-full h-full scroll-on-hover">
                    
                </div>
            </div>
        </Fragment>
    );
};

export { SearchForm };
