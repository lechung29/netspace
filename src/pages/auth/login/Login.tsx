/** @format */
import React, { useCallback } from "react";
import { AuthMethods, AuthMethodsMobile, Button, Label, Link, TextField } from "@/components";
import { Checkbox, CheckboxChangeEvent } from 'antd';
import { delayTime, mapUserInfoFromDataToState, useMaxWidth } from "@/utils";
import { motion, stagger, useAnimate } from "framer-motion";
import { useImmerState } from "@/hooks";
import { validateSignIn } from "./utils/validation";
import { AuthService } from "@/services";
import { IResponseStatus } from "@/types";
import { login, useAppDispatch } from "@/redux-store";
import { setNotification } from "@/redux-store/reducers/notifications";
import { useNavigate } from "react-router-dom";

export interface LoginState {
    email: string;
    password: string;
    emailError: string;
    passwordError: string;
    showPassword: boolean;
    isDisabled: boolean;
}

const initialState: LoginState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    showPassword: false,
    isDisabled: false,
}

const Login: React.FunctionComponent = () => {
    const [loginState, setLoginState] =  useImmerState<LoginState>(initialState)
    const { 
        email, 
        password, 
        emailError, 
        passwordError, 
        showPassword,
        isDisabled 
    } = loginState;
    const isMobile = useMaxWidth(450)
    const [scope, animate] = useAnimate<HTMLDivElement>();
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

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

    const getImageSrc = useCallback(() => {
        return `/src/assets/${true ? "white" : "gradient"}logo.png`
    }, [])

    const onChangeInput = (value: string, event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState((draft) => {
            draft[event.target.name] = value;
            draft[event.target.name + "Error"] = "";
        });
    };

    const onChange = (e: CheckboxChangeEvent): void => {
        setLoginState({ showPassword: e.target.checked });
    };

    const handleSubmit = async (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.preventDefault();
        setLoginState({ isDisabled: true, emailError: "", passwordError: "" });
        const { errorField, errorMessage } = validateSignIn(email, password);
        if (errorField) {
            await delayTime(1500).then(() => {
                setLoginState((draft) => {
                    draft[errorField + "Error"] = errorMessage;
                    draft.isDisabled = false;
                });
                dispatch(setNotification({
                    type: "error",
                    message: errorMessage,
                }))
            });
        } else {
            const [data] = await Promise.all([AuthService.loginUser({ email, password }), delayTime(1500)]);
            if (data) {
                if (data.status === IResponseStatus.Error) {
                    setLoginState({ [`${data?.fieldError?.fieldName}Error`]: data?.fieldError?.errorMessage, isDisabled: false });
                    dispatch(setNotification({
                        type: "error",
                        message: data?.fieldError?.errorMessage,
                    }))
                } else {
                    dispatch(login(mapUserInfoFromDataToState(data.data)));
                    setLoginState({ isDisabled: false });
                    await delayTime(2000).then(() => {
                        navigate("/");
                    });
                }
            }
        }
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
                        name="email"
                        placeholder="example@domain.com"
                        size="large"
                        value={email}
                        errorMessage={emailError}
                        hideErrorMessage
                        disabled={isDisabled}
                        onChange={onChangeInput}
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
                        name="password"
                        placeholder="Must be at least 8 characters"
                        size="large"
                        value={password}
                        errorMessage={passwordError}
                        type={showPassword ? "text" : "password"}
                        hideErrorMessage
                        disabled={isDisabled}
                        onChange={onChangeInput}
                    />
                </div>
                <div className="w-full flex flex-row items-center justify-between">
                    <Checkbox 
                        className="input-stagger-item !text-sm font-normal dark:!text-white !text-gray-700"
                        checked={showPassword}
                        defaultChecked={false}
                        onChange={onChange}
                    >
                        Show password
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
                        className="w-full" 
                        displayText="Sign In"
                        size="large"
                        onClick={handleSubmit}
                    />
                </motion.div>
                {isMobile 
                    ? <AuthMethodsMobile animationClassName="input-stagger-item" /> 
                    : <AuthMethods animationClassName="input-stagger-item"/>
                }
            </div>
        </div>
    );
};

export { Login };
