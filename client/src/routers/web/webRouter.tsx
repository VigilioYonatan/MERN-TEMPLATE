import WebLayout from "~/components/Layouts/WebLayout";
import Router from "../Router";
import webRouters from "./webRoutes";

const WebRouter = () => <Router layout={<WebLayout />} routers={webRouters} />;

export default WebRouter;
