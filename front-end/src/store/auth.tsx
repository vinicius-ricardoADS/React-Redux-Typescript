import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../types/Auth';

const initialState: AuthState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;