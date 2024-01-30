import fetchFinancesApi from './axios';
import { Finance } from '../types/finances-types';

export async function addFinance(newFinance: Finance) {
    await fetchFinancesApi
        .post('/finances', newFinance)
        .then(() => console.log('criado com sucesso'))
        .catch(err => console.log(err.message));
}

export async function fetchFinance() {
    const { data } = await fetchFinancesApi.get('/finances');

    return data;
}

export async function deleteFinance(id: string) {
    await fetchFinancesApi
        .delete(`/finances/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

export async function editFinance(newFinance: Finance) {
    console.log(newFinance);

    await fetchFinancesApi
        .put(`/finances/${newFinance.id}`, newFinance)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}
