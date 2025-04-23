/** @format */

import styled from "styled-components";
import React from "react";

const Login = () => {
    const [theme, setTheme] = React.useState<"light" | "dark">(() => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

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


    return (
        <StyledWrapper>
            <div className="auth-form-container">
                <img src="/src/assets/gradientlogo.png" alt="logo" className="w-[140px] h-[100px] object-cover mx-auto" />
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            autoComplete="off" 
                            name="email" 
                            id="email" 
                            type="text" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">How Can We Help You?</label>
                        <textarea required cols={50} rows={10} id="textarea" name="textarea" defaultValue={""} />
                    </div>
                    <button type="submit" className="form-submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .auth-form-container {
        max-width: 400px;
        margin: 0 20px;
        background: linear-gradient(#212121, #212121) padding-box, linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
        border: 2px solid transparent;
        padding: 32px 24px;
        font-size: 14px;
        font-family: inherit;
        color: white;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        box-sizing: border-box;
        border-radius: 16px;
        background-size: 200% 100%;
        animation: gradient 5s ease infinite;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }

        50% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0% 50%;
        }
    }

    .auth-form-container button:active {
        scale: 0.95;
    }

    .auth-form-container .form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .auth-form-container .form-group {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .auth-form-container .form-group label {
        display: block;
        margin-bottom: 5px;
        color: #717171;
        font-weight: 600;
        font-size: 13px;
    }

    .auth-form-container .form-group input {
        width: 100%;
        padding: 12px 16px;
        border-radius: 8px;
        color: #ccc;
        font-family: inherit;
        background-color: transparent;
        border: 1px solid #414141;
    }

    .auth-form-container .form-group textarea {
        width: 100%;
        padding: 12px 16px;
        border-radius: 8px;
        resize: none;
        color: #fff;
        height: 96px;
        border: 1px solid #414141;
        background-color: transparent;
        font-family: inherit;
    }

    .auth-form-container .form-group input::placeholder {
        opacity: 0.5;
    }

    .auth-form-container .form-group input:focus {
        outline: none;
        border-color: #e81cff;
    }

    .auth-form-container .form-group textarea:focus {
        outline: none;
        border-color: #e81cff;
    }

    .auth-form-container .form-submit-btn {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        align-self: flex-start;
        font-family: inherit;
        color: #717171;
        font-weight: 600;
        width: 40%;
        background: #313131;
        border: 1px solid #414141;
        padding: 12px 16px;
        font-size: inherit;
        gap: 8px;
        margin-top: 8px;
        cursor: pointer;
        border-radius: 6px;
    }

    .auth-form-container .form-submit-btn:hover {
        background-color: #fff;
        border-color: #fff;
    }
`;

export { Login };
