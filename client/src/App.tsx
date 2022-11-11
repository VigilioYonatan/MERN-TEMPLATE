import { Suspense } from "react";
import { Provider } from "react-redux";
import Web from "~/app/Web";
import "./App.css";
import { store } from "~/app/store/store";

const App = () => {
    return (
        <Suspense fallback={<h1>Cargandoo...</h1>}>
            <Provider store={store}>
                {/* Providers */}
                <Web />
            </Provider>
        </Suspense>
    );
};

export default App;
