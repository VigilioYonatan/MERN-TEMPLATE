import { useAppDispatch, useAppSelector } from "../hook";
import { getAuthContext, login } from "./authSlice";

const useAuth = () => {
    const user = useAppSelector(getAuthContext);
    const dispatch = useAppDispatch();

    const onLogin = () => {
        dispatch(login());
    };
    return {
        user,
        methods: { onLogin },
    };
};

export default useAuth;
