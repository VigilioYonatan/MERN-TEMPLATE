import { Usuario } from "~/interfaces/usuario";
import { Express } from "express";

export declare global {
    namespace Express {
        interface Request {
            usuario: Usuario;
            t: TranslateCustom;
            files: Express.Multer.File[];
        }
    }
}
