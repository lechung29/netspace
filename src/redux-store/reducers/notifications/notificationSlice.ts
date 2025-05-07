/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux-store/store";
import { INotification } from "@/types";

export interface INotificationDialogState extends INotification {
    isOpen: boolean;
}

const initialState: INotificationDialogState = {
    isOpen: false,
    type: undefined,
    message: "",
};

const notificationDialogSlice = createSlice({
    name: "notificationDialog",
    initialState,
    reducers: {
        setNotification: (state, action) => {
            state.isOpen = true;
            state.type = action.payload.type;
            state.message = action.payload.message;
        },
        clearNotification: () => initialState,
    },
});

export const notificationDialogState = (state: RootState) => state.notificationDialog;

export const { setNotification, clearNotification } = notificationDialogSlice.actions;
export default notificationDialogSlice.reducer;
