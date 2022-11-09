import { Routers } from "../Router";
import HomePage from "~/pages/web/HomePage";
import { webPaths } from "./webPaths";

const webRouters: Routers[] = [
    {
        index: true,
        Component: <HomePage />,
        url: webPaths.homePage,
    },
];

export default webRouters;
