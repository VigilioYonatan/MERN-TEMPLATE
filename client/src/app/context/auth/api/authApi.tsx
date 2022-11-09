import { useMutation } from "@tanstack/react-query";
import { AddUsuario } from "~/interfaces/usuario";
import { apiAddUsuario, ReturnApiAddUsuario } from "./authFetch";

const queryAddUsuario = () => {
    const result = useMutation<
        ReturnApiAddUsuario,
        { message: string },
        AddUsuario,
        unknown
    >(apiAddUsuario);
    return result;
};

export { queryAddUsuario };
