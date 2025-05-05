/** @format */
import React, { useCallback } from "react";
import { AuthMethods, AuthMethodsMobile, Button, Label, Link, TextField } from "@/components";
import { Checkbox, CheckboxProps, Divider } from 'antd';
import { useMaxWidth } from "@/utils";

const Login: React.FunctionComponent = () => {
    const [theme, setTheme] = React.useState<"light" | "dark">(() => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    const isMobile = useMaxWidth(400)

    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    React.useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const getImageSrc = useCallback(() => {
        return `/src/assets/${theme === "dark" ? "white" : "gradient"}logo.png`
    }, [theme])

    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <div className="auth-form flex flex-col items-start justify-center !p-10 !mx-5 h-auto max-w-[450px] w-full">
            <img src={getImageSrc()} alt="net_space_logo" className="w-40 !h-20 self-start object-cover"/>
            <div className="text-2xl font-semibold w-full !mb-1.5 !mt-3 dark:text-white">Sign in to your account</div>
            <p className="w-full text-sm font-normal text-gray-700 dark:text-gray-400">
                If you haven’t signed up yet.{" "}
                <Link to="/sign-up" displayText="Register here!" className="!text-blue-600 dark:!text-blue-400" />
            </p>
            <div className="!my-10 w-full flex flex-col gap-4">
                <div className="w-full flex flex-col gap-2">
                    <Label
                        aria-label="email address" 
                        htmlFor="email" 
                        className="font-medium"
                        displayText="Email address"
                    />
                    <TextField 
                        id="email" 
                        placeholder="@Your email"
                        size="large"
                        errorMessage="Email is required"
                        hideErrorMessage
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <Label
                        aria-label="password" 
                        htmlFor="password" 
                        className="font-medium"
                        displayText="Password"
                    />
                    <TextField 
                        id="password" 
                        placeholder="Password"
                        size="large"
                        errorMessage="Password is required"
                        hideErrorMessage
                    />
                </div>
                <div className="w-full flex flex-row items-center justify-between">
                    <Checkbox 
                        className="!text-sm font-normal dark:!text-white !text-gray-700"
                        onChange={onChange}
                    >
                        Remember me
                    </Checkbox>
                    <Link 
                        to="/sign-up" 
                        displayText="Forget password?" 
                        className="!text-blue-600 dark:!text-blue-400 text-sm font-normal" 
                    />
                </div>
                <div className="w-full flex flex-row items-center justify-center">
                    <Button 
                        className="w-full " 
                        displayText="Sign In"
                    />
                </div>
                <Divider className="!text-sm font-normal !my-2 dark:!border-gray-200 !border-gray-500 dark:!text-white !text-black">Or continue with</Divider>
                {isMobile ? <AuthMethodsMobile /> : <AuthMethods />}
            </div>
        </div>
    );
};

export { Login };
