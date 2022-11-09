import axios from "axios";
import Enviremonts from "~/config/enviroments";

const BASE_URL = axios.create({
    baseURL: Enviremonts.API,
});

export default BASE_URL;
