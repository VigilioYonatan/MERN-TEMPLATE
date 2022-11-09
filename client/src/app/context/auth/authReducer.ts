import { AuthReducerAction, AuthState } from "./authTypes";

const authReducer = (
    state: AuthState,
    action: AuthReducerAction
): AuthState => {
    switch (action.type) {
        case "login":
            return state;

        default:
            return state;
    }
};
export default authReducer;
