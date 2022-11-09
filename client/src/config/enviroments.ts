const Vite = import.meta.env;
const Enviremonts = {
    API: Vite.VITE_API || "http://localhost:5000",
};
export default Enviremonts;
