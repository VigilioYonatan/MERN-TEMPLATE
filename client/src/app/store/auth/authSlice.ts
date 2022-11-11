import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthState {
    status: "no-authenticated" | "authenticated";
    usuario: null;
}

const initialState: AuthState = {
    status: "no-authenticated",
    usuario: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction) => {
            state.status = "authenticated";
        },
    },
});
export const getAuthContext = (state: RootState) => state.auth;

export const { login } = authSlice.actions;
export default authSlice;
