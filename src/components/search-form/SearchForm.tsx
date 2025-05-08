/** @format */

import React, { Fragment } from "react";
import { IoSearch } from "react-icons/io5";
import { IconTextField } from "../common";

const SearchForm: React.FunctionComponent = () => {
    return (
        <Fragment>
            <IconTextField
                className="w-full !rounded-xl dark:!bg-[#293445] !bg-[#f1f5f9] h-10"
                placeholder="Search Friends, Groups, Videos..."
                prefix={<IoSearch />}
            />
            <div className="h-40 w-full bg-white absolute top-14">

            </div>
        </Fragment>
    );
};

export { SearchForm };
