import { useState } from "react";
import { useGetAllPokemonsQuery } from "~/app/api/pokemonApi";
import useAuth from "~/app/store/auth/useAuth";

const HomePage = () => {
    const [count, setCount] = useState(0);
    const { user, methods } = useAuth();
    const { data, isLoading } = useGetAllPokemonsQuery();
    return (
        <>
            <button onClick={methods.onLogin}>Authenticar</button>
            <span className="block mt-5 ">{user.status}</span>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            {isLoading ? "cargando..." : <p>{JSON.stringify(data)}</p>}
        </>
    );
};

export default HomePage;
