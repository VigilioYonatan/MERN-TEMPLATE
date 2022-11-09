import { lazy, LazyExoticComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const WebRouterLazy: LazyExoticComponent<() => JSX.Element> = lazy(
    () => import("../routers/web/webRouter")
);

const Web = () => {
    // const { auth } = useContext(AuthContext);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<WebRouterLazy />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Web;
