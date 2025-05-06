/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux-store/store";
import { INotification } from "@/types";

export interface INotificationState extends INotification {
    isOpen: boolean;
    onConfirm?: () => Promise<void>
}

const initialState: INotificationState = {
    isOpen: false,
    type: undefined,
    message: "",
    onConfirm: undefined
};

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setNotification: (state, action) => {
            state.isOpen = true;
            state.type = action.payload.type;
            state.message = action.payload.message;
            state.onConfirm = action.payload.onConfirm
        },
        clearNotification: () => initialState,
    },
});

export const notificationState = (state: RootState) => state.notification;

export const { setNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
