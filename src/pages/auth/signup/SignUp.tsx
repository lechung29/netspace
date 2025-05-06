/** @format */
import React, { JSX } from "react";
import { AuthMethods, AuthMethodsMobile, Button, Checkbox, Dialog, Label, Link, PasswordStrong, TextField } from "@/components";
import { delayTime, getLogoImageSrc, useMaxWidth } from "@/utils";
import { motion, stagger, useAnimate } from "framer-motion";
import { useImmerState } from "@/hooks";
import { AuthService } from "@/services";
import { IResponseStatus } from "@/types";
import { themeState, useAppDispatch, useAppSelector } from "@/redux-store";
import { setNotification } from "@/redux-store/reducers/notifications";
import { useNavigate } from "react-router-dom";
import { checkPasswordStrength, mediumMessage, PasswordStrongValue, validateSignUp, weakMessage } from "./utils/validation";
import { MdWarningAmber } from "react-icons/md";

export interface SignUpState {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    firstNameError: string;
    lastNameError: string;
    emailError: string;
    passwordError: string;
    confirmPasswordError: string;
    showPassword: boolean;
    isDisabled: boolean;
    isLoading: boolean;
    agreeTerm: boolean;
    passwordStrength: PasswordStrongValue;
    isOpenWarningDialog: boolean;
    isConfirmLoading: boolean;
    warningMessage: string | JSX.Element;
}

const initialState: SignUpState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    showPassword: false,
    isDisabled: false,
    isLoading: false,
    agreeTerm: false,
    passwordStrength: PasswordStrongValue.None,
    isOpenWarningDialog: false,
    isConfirmLoading: false,
    warningMessage: ""
};

const SignUp: React.FunctionComponent = () => {
    const { theme } = useAppSelector(themeState);
    const [signUpState, setSignUpState] = useImmerState<SignUpState>(initialState);
    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        firstNameError,
        lastNameError,
        emailError,
        passwordError,
        confirmPasswordError,
        showPassword,
        isDisabled,
        isLoading,
        agreeTerm,
        passwordStrength,
        isOpenWarningDialog,
        isConfirmLoading,
        warningMessage
    } = signUpState;
    const [scope, animate] = useAnimate<HTMLFormElement>();
    const isMobile = useMaxWidth(450);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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
        const { name } = event.target;
        setSignUpState((draft) => {
            draft[name] = value;
            draft[name + "Error"] = "";
        });
    };

    React.useEffect(() => {
        const passwordStrongValue = checkPasswordStrength(password);
        setSignUpState({ passwordStrength: passwordStrongValue });
    }, [password]);

    const registerUser = async (): Promise<void> => {
        if (isOpenWarningDialog) {
            setSignUpState({
                isConfirmLoading: true
            })
        }
        const [data] = await Promise.all([AuthService.registerUser({ firstName, lastName, email, password }), delayTime(1500)]);
            if (data) {
                if (data.status === IResponseStatus.Error) {
                    setSignUpState({ [`${data?.fieldError?.fieldName}Error`]: data?.fieldError?.errorMessage, isDisabled: false, isLoading: false });
                    dispatch(
                        setNotification({
                            type: "error",
                            message: data?.fieldError?.errorMessage,
                        })
                    );
                } else {
                    setSignUpState({ isDisabled: false, isLoading: false, isConfirmLoading: false, isOpenWarningDialog: false });
                    await delayTime(2000).then(() => {
                        navigate("/login");
                    });
                }
            }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        setSignUpState({ isDisabled: true, isLoading: true, firstNameError: "", lastNameError: "",  emailError: "", passwordError: "", confirmPasswordError: "" });
        const { errorField, errorMessage } = validateSignUp(firstName, lastName, email, password, confirmPassword);
        if (errorField) {
            setSignUpState((draft) => {
                draft[errorField + "Error"] = errorMessage;
                draft.isDisabled = false;
                draft.isLoading = false;
            });
            dispatch(
                setNotification({
                    type: "error",
                    message: errorMessage,
                })
            );
        } else {
            if ([PasswordStrongValue.Weak, PasswordStrongValue.Medium].includes(passwordStrength)) {
                const warningMessage = passwordStrength === PasswordStrongValue.Weak ? weakMessage : mediumMessage
                setSignUpState({ 
                    isLoading: false,
                    isDisabled: false,
                    isOpenWarningDialog: true,
                    warningMessage
                })
            } else {
                await registerUser()
            }
        }
    };

    const disabledSignUp = React.useMemo(() => {
        return !agreeTerm || isDisabled;
    }, [isDisabled, agreeTerm]);

    const handleClickTermOfUse = (e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
    }

    const onRenderTermLabel = React.useCallback(() => {
        return (
            <p>Agree our <span onClick={handleClickTermOfUse} className="!text-blue-600 dark:!text-blue-400 select-none hover:underline">Term of use</span></p>
        );
    }, []);

    const onRenderWarningDialogLabel = React.useMemo(() => {
        return <div className="flex items-center gap-2">
            <MdWarningAmber className={"text-xl dark:text-yellow-400 text-yellow-600"} />
            <span className={"font-semibold dark:text-yellow-400 text-yellow-600"}>Warning</span>
        </div>
    }, [])


    return (
        <form ref={scope} className="auth-form flex flex-col items-start justify-center !p-10 !mx-5 min-h-full max-w-[450px] w-full" onSubmit={handleSubmit}>
            <img src={getLogoImageSrc(theme)} alt="net_space_logo" className="logo-stagger-item w-40 !h-20 self-start object-cover" />
            <div className="input-stagger-item text-2xl font-semibold w-full !mb-1.5 !mt-3 dark:text-white">Sign up to get started</div>
            <p className="input-stagger-item w-full text-sm font-normal text-gray-700 dark:text-gray-400">
                If you already have an account. <Link to="/login" displayText="Login here!" withUnderline />
            </p>
            <div className="!my-10 w-full flex flex-col gap-4">
                <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
                    <div className="input-stagger-item w-full flex flex-col gap-2">
                        <Label 
                            aria-label="First name" 
                            htmlFor="firstName" 
                            className="font-medium" 
                            displayText="First name" 
                        />
                        <TextField
                            id="firstName"
                            name="firstName"
                            placeholder="e.g. Diego"
                            size="large"
                            value={firstName}
                            errorMessage={firstNameError}
                            hideErrorMessage
                            disabled={isDisabled}
                            onChange={onChangeInput}
                        />
                    </div>
                    <div className="input-stagger-item w-full flex flex-col gap-2">
                        <Label 
                            aria-label="Last name" 
                            htmlFor="lastName" 
                            className="font-medium" 
                            displayText="Last name" 
                        />
                        <TextField
                            id="lastName"
                            name="lastName"
                            placeholder="e.g. Gonzalez"
                            size="large"
                            value={lastName}
                            errorMessage={lastNameError}
                            hideErrorMessage
                            disabled={isDisabled}
                            onChange={onChangeInput}
                        />
                    </div>
                </div>
                <div className="input-stagger-item w-full flex flex-col gap-2">
                    <Label 
                        aria-label="Email address" 
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
                <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
                    <div className="input-stagger-item w-full flex flex-col gap-2">
                        <Label 
                            aria-label="Password" 
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
                    <div className="input-stagger-item w-full flex flex-col gap-2">
                        <Label 
                            aria-label="Confirm Password" 
                            htmlFor="confirmPassword" 
                            className="font-medium" 
                            displayText="Confirm password" 
                        />
                        <TextField
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="********"
                            size="large"
                            value={confirmPassword}
                            errorMessage={confirmPasswordError}
                            type={showPassword ? "text" : "password"}
                            hideErrorMessage
                            disabled={isDisabled}
                            onChange={onChangeInput}
                        />
                    </div>
                </div>
                <PasswordStrong animationClassName="input-stagger-item" value={passwordStrength} />
                <div className="w-full flex gap-3 flex-col-reverse items-start sm:flex-row sm:items-center sm:justify-between">
                    <Checkbox
                        id="agreeTerm"
                        className="input-stagger-item"
                        checked={agreeTerm}
                        defaultChecked={false}
                        onRenderLabel={onRenderTermLabel}
                        onChangeValue={(value) => setSignUpState({ agreeTerm: value })}
                    />
                    <Checkbox
                        id="showPassword"
                        className="input-stagger-item"
                        displayText="Show password"
                        checked={showPassword}
                        defaultChecked={false}
                        onChangeValue={(value) => setSignUpState({ showPassword: value })}
                    />
                </div>
                <motion.div
                    className="input-stagger-item w-full"
                    whileHover={{
                        scale: 1.025,
                        transition: {
                            type: "spring",
                            stiffness: 500,
                        },
                    }}
                >
                    <Button 
                        className="w-full" 
                        displayText="Sign Up" 
                        size="large" 
                        htmlType="submit" 
                        isLoading={isLoading} 
                        disabled={disabledSignUp} 
                    />
                </motion.div>
                {isMobile 
                    ? <AuthMethodsMobile animationClassName="input-stagger-item" /> 
                    : <AuthMethods animationClassName="input-stagger-item" 
                />}
            </div>
            <Dialog
                title={onRenderWarningDialogLabel}
                open={isOpenWarningDialog}
                onConfirm={registerUser}
                confirmLoading={isConfirmLoading}
                onCancel={() => setSignUpState({ isOpenWarningDialog: false })}
                onRenderContent={<p>{warningMessage}</p>}
            />
        </form>
    );
};

export { SignUp };
