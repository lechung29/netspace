/** @format */

import React from "react";
import { PasswordStrongValue } from "@/pages/auth/signup/utils/validation";
import { classNames } from "@/utils";

interface IPasswordStrongProps {
    animationClassName?: string
    value: PasswordStrongValue;
}

const PasswordStrong: React.FunctionComponent<IPasswordStrongProps> = ({value, animationClassName}) => {
    return <div className={classNames("w-full !mt-2 !mb-4 flex flex-row justify-between items-center gap-3", animationClassName)}>
        {Array.from({ length: 4}).map((_, index) => (
            <div key={index} className={classNames("flex-1 h-1 rounded-sm dark:bg-gray-600 bg-gray-200",
                { "first:bg-red-400 dark:first:bg-red-600": value === PasswordStrongValue.Weak },
                { "first:bg-amber-400 dark:first:bg-amber-600 nth-2:bg-amber-400 dark:nth-2:bg-amber-600": value === PasswordStrongValue.Medium},
                { "not-last:bg-green-300 dark:not-last:bg-green-600": value === PasswordStrongValue.Strong},
                { "bg-green-500 dark:bg-green-900": value === PasswordStrongValue.VeryStrong}
            )} />
        ))}
    </div>;
};

export { PasswordStrong };
