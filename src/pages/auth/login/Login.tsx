/** @format */
import React, { useCallback } from "react";
import { AuthMethods, AuthMethodsMobile, Button, Label, Link, TextField } from "@/components";
import { Checkbox, CheckboxProps } from 'antd';
import { useMaxWidth } from "@/utils";
import { motion, stagger, useAnimate } from "framer-motion";

const Login: React.FunctionComponent = () => {
    const [theme, setTheme] = React.useState<"light" | "dark">(() => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    const isMobile = useMaxWidth(400)
    const [scope, animate] = useAnimate<HTMLDivElement>();

    React.useEffect(() => {
        if (scope.current) {
            animate(
                scope.current.querySelectorAll(".logo-stagger-item"),
                {
                    opacity: [0, 1],
                },
                {
                    delay: 0.25,
                    duration: 0.25,
                    type: "spring",
                    ease: "easeIn",
                    stiffness: 80,
                }
            );

            animate(
                scope.current.querySelectorAll(".input-stagger-item"),
                {
                    opacity: [0, 1],
                    y: [-5, 0],
                },
                {
                    delay: stagger(0.2, { startDelay: 0.25 }),
                    duration: 1,
                    type: "spring",
                    stiffness: 80,
                }
            );
        }
    }, [scope]);

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
        <div ref={scope} className="auth-form flex flex-col items-start justify-center !p-10 !mx-5 h-full max-w-[450px] w-full">
            <img src={getImageSrc()} alt="net_space_logo" className="logo-stagger-item w-40 !h-20 self-start object-cover"/>
            <div className="input-stagger-item text-2xl font-semibold w-full !mb-1.5 !mt-3 dark:text-white">Sign in to your account</div>
            <p className="input-stagger-item w-full text-sm font-normal text-gray-700 dark:text-gray-400">
                If you haven’t signed up yet.{" "}
                <Link to="/sign-up" displayText="Register here!" className="!text-blue-600 dark:!text-blue-400" />
            </p>
            <div className="!my-10 w-full flex flex-col gap-4">
                <div className="input-stagger-item w-full flex flex-col gap-2">
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
                <div className="input-stagger-item w-full flex flex-col gap-2">
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
                        className="input-stagger-item !text-sm font-normal dark:!text-white !text-gray-700"
                        onChange={onChange}
                    >
                        Remember me
                    </Checkbox>
                    <Link 
                        to="/sign-up" 
                        displayText="Forget password?" 
                        className="input-stagger-item !text-blue-600 dark:!text-blue-400 text-sm font-normal" 
                    />
                </div>
                <motion.div 
                    className="input-stagger-item w-full flex flex-row items-center justify-center"
                    whileHover={{
                        scale: 1.025,
                        transition: {
                            type: "spring",
                            stiffness: 500,
                        }
                    }}
                >
                    <Button 
                        className="w-full hover:!opacity-90" 
                        displayText="Sign In"
                    />
                </motion.div>
                {isMobile ? <AuthMethodsMobile animationClassName="input-stagger-item" /> : <AuthMethods animationClassName="input-stagger-item"/>}
            </div>
        </div>
    );
};

export { Login };
