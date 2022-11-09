interface Usuario {
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    password: string;
    foto: string;
}
type AddUsuario = Pick<Usuario, "nombre" | "correo" | "password">;

export { type Usuario, type AddUsuario };
