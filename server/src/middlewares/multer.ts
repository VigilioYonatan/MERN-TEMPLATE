import multer from "multer";
import { uniqueID } from "~/helpers/helper";
import { pathDir } from "~/config/config";
import path from "path";

const validateFiles = (file: Express.Multer.File) => {
    let error: Error | null = null;
    /* Image Extension Validation */
    const extensionFile = path.extname(file.originalname);

    const extensions = [".jpg", ".webp", ".png", ".jpeg"];
    if (!extensions.includes(extensionFile)) {
        error = new Error(
            `back: Extensión no válido, solo están permitidos [${extensions.join(
                ","
            )}]`
        );
    }
    const maxSize = 100000;
    /* Image Size Validation */
    if (file.size > maxSize) {
        error = new Error(
            `back: Imagen muy pesada max: ${maxSize / 1000000} mb`
        );
    }
    return error;
};

const storage = multer.diskStorage({
    destination: (_req, file, cb) => {
        const error = validateFiles(file);
        cb(error, pathDir("/../public"));
    },
    filename: (_req, file, cb) => {
        cb(null, uniqueID() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage,
    dest: pathDir("/../public"),
});

export default upload;
