import axios from 'axios';

const fetchFinancesApi = axios.create({
    baseURL: 'https://finance-control-db.onrender.com/',
    headers: {
        'Content-type': 'application/json',
    },
});

export default fetchFinancesApi;
