import fetchFinancesApi from './axios';
import { Finance } from '../types/finances-types';

export async function addFinance(newFinance: Finance) {
    await fetchFinancesApi
        .post('/finances', newFinance)
        .then(() => console.log('criado com sucesso'))
        .catch(err => console.log(err.message));
}

export async function fetchFinance() {
    const { data } = await fetchFinancesApi('/finances');

    return data;
}
