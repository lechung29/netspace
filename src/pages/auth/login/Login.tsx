/** @format */

import { Link } from "@/components";
import React from "react";

const Login = () => {
    return (
        <div className="w-full lg:max-w-sm mx-auto !space-y-9">
            {/* Logo */}
            <div className="logo-stagger-item w-full h-auto">
                <img src="/src/assets/gradientlogo.png" alt="logo" className="w-36 h-12 absolute top-10 left-10 dark:hidden object-cover" />
                <img src="/src/assets/whitelogo.png" alt="logo" className="w-36 h-12 absolute top-10 left-10 hidden dark:!block object-cover" />
            </div>
            {/* Title */}
            <div className="input-stagger-item w-full h-auto">
                <h2 className="text-2xl dark:text-white font-semibold mb-1.5"> Sign in to your account </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
                    If you haven’t signed up yet <Link to="/sign-up" className="text-blue-600 hover:opacity-85" displayText="Register here!"/>
                </p>
            </div>
            <div className="space-y-7 text-sm text-black font-medium dark:text-white">
                {/* <div className="grid grid-cols-2 gap-4 gap-y-7 ">
                    <AnimationTextField
                        className="common-validation-input input-stagger-item"
                        errorMessageClassName="input-stagger-item"
                        placeholder="Email"
                        name="email"
                        disabled={isDisabledInput}
                        value={email}
                        errorMessage={emailError}
                        leftSection={<BiSolidUser style={defaultIconStyle} />}
                        rightSection={
                            <ClearIconButton
                                className="g-clear-input-icon-button"
                                radius="full"
                                variant="ghost"
                                showClear={!!email}
                                onClick={() =>
                                    setState({
                                        email: "",
                                        emailError: "",
                                    })
                                }
                            />
                        }
                        onChange={onChangeInput}
                    />
                    <AnimationTextField
                        className="common-validation-input input-stagger-item"
                        errorMessageClassName="input-stagger-item"
                        placeholder="Password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        disabled={isDisabledInput}
                        value={password}
                        errorMessage={passwordError}
                        leftSection={<IoKeySharp style={defaultIconStyle} />}
                        rightSection={
                            <PasswordIconButton
                                className="g-clear-input-icon-button"
                                radius="full"
                                variant="ghost"
                                showPassword={showPassword}
                                onShowPasswordChange={(showPassword) => {
                                    setState({ showPassword });
                                }}
                            />
                        }
                        onChange={onChangeInput}
                    />
                    <AnimationSubmitButton
                        className="input-stagger-item"
                        displayText="Sign In"
                        disabled={isDisabledSubmit}
                        isLoading={isLoading}
                        onClick={handleSubmit}
                        buttonHeight={40}
                        childrenProps={{
                            withLoadingText: true,
                        }}
                    />
                </div> */}
            </div>
        </div>
    );
};

export { Login };
