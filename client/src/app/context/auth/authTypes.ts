import { AddUsuario } from "~/interfaces/usuario";

export interface AuthState {
    status: "authenticated" | "not-authenticated";
    user: null;
}

/* Context */
export type AuthContextProps = {
    auth: AuthState;
    // actions: {
    //     onAddUsuario: (usuario: AddUsuario) => void;
    // };
};
export type AuthProviderProps = {
    children: JSX.Element[] | JSX.Element;
};

/* Reducer */
export type AuthReducerAction = {
    type: "login";
};
