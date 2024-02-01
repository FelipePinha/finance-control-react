import axios from 'axios';

const fetchFinancesApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-type': 'application/json',
    },
});

export default fetchFinancesApi;
