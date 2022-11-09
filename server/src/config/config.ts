import { CorsOptions } from "cors";
import { Request } from "express";
import path from "path";

const allowedOrigins = [
    "http://localhost:3000",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:4173",
];

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin!) !== -1 || !origin) {
            callback(null, true);
            return;
        }
        callback(new Error("No allowed by Cors"));
    },
    credentials: true,
    optionsSuccessStatus: 200,
};

const webProtocol = (req: Request) => {
    return `${req.protocol}://${req.get("host")}`;
};

const pathDir = (ruta: string) => {
    console.log(path.join(__dirname, ruta));

    return path.join(__dirname, ruta);
};

export { corsOptions, webProtocol, pathDir };
