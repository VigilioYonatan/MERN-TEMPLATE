import { AddUsuario } from "~/interfaces/usuario";
import BASE_URL from "~/utils/axios";

export type ReturnApiAddUsuario = { msg: true };
const apiAddUsuario = async (
    body: AddUsuario
): Promise<ReturnApiAddUsuario> => {
    const { data } = await BASE_URL.post<{ msg: true }>("/users", body);
    return data;
};

// const apiLoginUsuario = async(usuario)=>{

// }

export { apiAddUsuario };
