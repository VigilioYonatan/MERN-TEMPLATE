import { createContext, useReducer } from "react";
import { AuthContextProps, AuthProviderProps, AuthState } from "./authTypes";
import authReducer from "./authReducer";
import { AddUsuario } from "~/interfaces/usuario";

const AuthContext = createContext({} as AuthContextProps);

const authState: AuthState = {
    status: "not-authenticated",
    user: null,
};

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [auth, dispatch] = useReducer(authReducer, authState);

    
    return (
        <AuthContext.Provider value={{ auth }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext };
export default AuthProvider;
