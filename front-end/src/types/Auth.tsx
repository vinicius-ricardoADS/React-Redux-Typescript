export type AuthState = {
    isAuthenticated: boolean;
}

export default interface IAuth {
    auth: AuthState;
}