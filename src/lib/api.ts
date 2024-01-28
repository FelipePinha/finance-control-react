import fetchFinancesApi from './axios';

export type Finance = {
    id?: string;
    title: string;
    value: number;
    valueType: string;
};

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
