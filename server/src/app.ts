import { addAlias } from "module-alias";
addAlias("~", __dirname + "/");
import express, { Application, Router } from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { errorHandler, logEvents, logger } from "~/middlewares/logs";
/* Routers */

/* Config */
import connectDb from "~/config/db";
import { corsOptions, pathDir } from "~/config/config";
import Enviroments from "~/config/env.config";

/* Starting Application */
const app: Application = express();
const router: Router = Router();

/* Middlewares */
connectDb();
app.use(logger);
app.use(cors(corsOptions));
app.use(express.static(pathDir("/../public")));
app.use(express.json({}));
app.use(cookieParser());
/* ROUTERS */
app.use("/", () => {
    console.log("hi");
});

/* Router Api */
app.use("/api", router);

app.use(errorHandler);
/* Running PORT */
const puerto = Enviroments.port;
mongoose.connection.once("open", () => {
    console.log("Conectado en la base de datos");
    app.listen(puerto, () => {
        console.log("Corriendo en el puerto: " + puerto);
    });
});

mongoose.connection.on("error", (error) => {
    console.log(error);
    logEvents(
        `${error.no}: ${error.code}\t${error.syscall}\t${error.hostname}`,
        "mongoErrLog.log"
    );
});
