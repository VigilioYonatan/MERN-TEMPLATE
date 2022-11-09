import reactLogo from "~/assets/react.svg";
import { Outlet } from "react-router-dom";

const WebLayout = () => {
    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1 className="text-indigo-500 my-custom-style">Vite + React</h1>
            <Outlet />
        </div>
    );
};
export default WebLayout;
