import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { uniqueId } from "~/helpers/helpers";
export type Routers = {
    index?: true;
    path?: string;
    Component?: JSX.Element;
    url?: string;
    children?: Routers[];
};
export type RouterProps = {
    routers: Routers[];
    layout: JSX.Element;
};

const Router = ({ routers, layout }: RouterProps) => {
    const Element = (props: Routers) => {
        const { index, path, Component } = props;
        return (
            <Route
                index={index}
                path={path}
                element={Component ? Component : null}
            />
        );
    };

    const RouterELement = (route: Routers) => {
        return (
            <>
                {route.children ? (
                    <Route key={route.url} path={route.path}>
                        {route.children.map((props) => (
                            <Fragment key={uniqueId()}>
                                {RouterELement({ ...props })}
                            </Fragment>
                        ))}
                    </Route>
                ) : (
                    Element({ ...route })
                )}
            </>
        );
    };
    return (
        <Routes>
            <Route element={layout}>
                {routers.map((route) => (
                    <Fragment key={uniqueId()}>{RouterELement(route)}</Fragment>
                ))}
            </Route>
        </Routes>
    );
};

export default Router;
