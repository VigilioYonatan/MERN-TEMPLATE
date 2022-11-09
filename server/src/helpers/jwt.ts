import jwt from "jsonwebtoken";
import Enviroments from "~/config/env.config";

const generarJWT = (value: Object, options: jwt.SignOptions): string =>
    jwt.sign(value, Enviroments.jwt_key as string, options);

const verifyJWT = <T>(
    value: string,
    options?: jwt.VerifyOptions & jwt.VerifyCallback<T>
) => jwt.verify(value, Enviroments.jwt_key as string, options);

export { generarJWT, verifyJWT };
