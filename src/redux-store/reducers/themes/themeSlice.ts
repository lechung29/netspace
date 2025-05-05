/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux-store/store";

export interface IThemeState {
    theme: "light" | "dark";
}

const initialState: IThemeState = {
    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
            document.documentElement.classList.toggle("dark", action.payload === "dark");
        },
    },
});

export const themeState = (state: RootState) => state.theme;

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
