/** @format */
import React from "react";
import { AuthMethods, AuthMethodsMobile, Button, Checkbox, Label, Link, TextField } from "@/components";
import { delayTime, getLogoImageSrc, mapUserInfoFromDataToState, useMaxWidth } from "@/utils";
import { motion, stagger, useAnimate } from "framer-motion";
import { useImmerState } from "@/hooks";
import { validateSignIn } from "./utils/validation";
import { AuthService } from "@/services";
import { IResponseStatus } from "@/types";
import { login, themeState, useAppDispatch, useAppSelector } from "@/redux-store";
import { useNavigate } from "react-router-dom";
import { useNotificationContext } from "@/context";

export interface LoginState {
    email: string;
    password: string;
    emailError: string;
    passwordError: string;
    showPassword: boolean;
    isDisabled: boolean;
    isLoading: boolean;
}

const initialState: LoginState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    showPassword: false,
    isDisabled: false,
    isLoading: false,
}

const Login: React.FunctionComponent = () => {
    const { theme } = useAppSelector(themeState)
    const [loginState, setLoginState] =  useImmerState<LoginState>(initialState)
    const { 
        email, 
        password, 
        emailError, 
        passwordError, 
        showPassword,
        isDisabled,
        isLoading 
    } = loginState;
    const [scope, animate] = useAnimate<HTMLFormElement>();
    const isMobile = useMaxWidth(450)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { notify } = useNotificationContext();

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

    const onChangeInput = (value: string, event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState((draft) => {
            draft[event.target.name] = value;
            draft[event.target.name + "Error"] = "";
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        setLoginState({ isDisabled: true, isLoading: true, emailError: "", passwordError: "" });
        const { errorField, errorMessage } = validateSignIn(email, password);
        if (errorField) {
            setLoginState((draft) => {
                draft[errorField + "Error"] = errorMessage;
                draft.isDisabled = false;
                draft.isLoading = false;
            });
            notify({
                message: errorMessage,
                type: "error"
            })
        } else {
            const [data] = await Promise.all([AuthService.loginUser({ email, password }), delayTime(1500)]);
            if (data) {
                if (data.status === IResponseStatus.Error) {
                    setLoginState({ [`${data?.fieldError}Error`]: data?.message, isDisabled: false, isLoading: false});
                    notify({ type: "error", message: data.message!})
                } else {
                    dispatch(login(mapUserInfoFromDataToState(data.data)));
                    setLoginState({ isDisabled: false, isLoading: false });
                    notify({ message: data.message! })
                    await delayTime(2000).then(() => {
                        navigate("/");
                    });
                }
            }
        }
    };

    return (
        <form 
            ref={scope} 
            className="auth-form flex flex-col items-start justify-center !p-10 !mx-5 min-h-full max-w-[450px] w-full"
            onSubmit={handleSubmit}
        >
            <img src={getLogoImageSrc(theme)} alt="net_space_logo" className="logo-stagger-item w-40 !h-20 self-start object-cover"/>
            <div className="input-stagger-item text-2xl font-semibold w-full !mb-1.5 !mt-3 dark:text-white">Sign in to your account</div>
            <p className="input-stagger-item w-full text-sm font-normal text-gray-700 dark:text-gray-400">
                If you haven’t signed up yet.{" "}
                <Link to="/sign-up" displayText="Register here!" withUnderline/>
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
                        placeholder="********"
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
                        id="showPassword"
                        className="input-stagger-item"
                        displayText="Show password"
                        checked={showPassword}
                        defaultChecked={false}
                        onChangeValue={(value) => setLoginState({ showPassword: value})}
                    />
                    <Link 
                        to="/sign-up" 
                        displayText="Forgot password?" 
                        className="input-stagger-item" 
                        withUnderline={true}
                    />
                </div>
                <motion.div 
                    className="input-stagger-item"
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
                        htmlType="submit"
                        isLoading={isLoading}
                    />
                </motion.div>
                {isMobile 
                    ? <AuthMethodsMobile animationClassName="input-stagger-item" /> 
                    : <AuthMethods animationClassName="input-stagger-item"/>
                }
            </div>
        </form>
    );
};

export { Login };
