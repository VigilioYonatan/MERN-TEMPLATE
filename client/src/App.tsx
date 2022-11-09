import { Suspense } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient } from "@tanstack/react-query";
import Web from "~/app/Web";
import "./App.css";

const client = new QueryClient();

const App = () => {
    return (
        <Suspense fallback={<h1>Cargandoo...</h1>}>
            <QueryClientProvider client={client}>
                {/* Providers */}
                <Web />
                <ReactQueryDevtools position="bottom-right" initialIsOpen />
            </QueryClientProvider>
        </Suspense>
    );
};

export default App;
