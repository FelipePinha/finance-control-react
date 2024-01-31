import fetchFinancesApi from './axios';
import { Finance } from '../types/finances-types';

export async function addFinance(newFinance: Finance) {
    await fetchFinancesApi
        .post('/finances', newFinance)
        .then(() => {
            return;
        })
        .catch(err => {
            throw new Error(err);
        });
}

export async function fetchFinance() {
    const { data } = await fetchFinancesApi.get('/finances');

    return data;
}

export async function deleteFinance(id: string) {
    await fetchFinancesApi
        .delete(`/finances/${id}`)
        .then(() => {
            return;
        })
        .catch(err => {
            throw new Error(err);
        });
}

export async function editFinance(newFinance: Finance) {
    await fetchFinancesApi
        .put(`/finances/${newFinance.id}`, newFinance)
        .then(() => {
            return;
        })
        .catch(err => {
            throw new Error(err);
        });
}
