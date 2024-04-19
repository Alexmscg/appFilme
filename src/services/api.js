import axios from "axios";
import { create } from "react-test-renderer";

// https://sujeitoprogramador.com/
// r-api/?api=filmes

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
});

export default api;