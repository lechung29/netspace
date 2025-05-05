/** @format */

interface ILoginValidationResult {
    errorField: "email" | "password" | null;
    errorMessage: string;
}

export const validateSignIn = (email: string, password: string): ILoginValidationResult => {
    if (!email) {
        return {
            errorField: "email",
            errorMessage: "Email address is required",
        };
    }

    if (!password) {
        return {
            errorField: "password",
            errorMessage: "Password is required",
        };
    }

    if (!!email) {
        const emailRegex =
            /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}|(?:\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)$/;
        if (!email.match(emailRegex)) {
            return {
                errorField: "email",
                errorMessage: "Email address is invalid",
            }
        }
    }

    if (!!password && password.length < 8) {
        return {
            errorField: "password",
            errorMessage: "Password must be at least 8 characters",
        };
    }

    return {
        errorField: null,
        errorMessage: "",
    };
};
