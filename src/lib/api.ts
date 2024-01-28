import axios from 'axios';

export type Finance = {
    id?: string;
    title: string;
    value: number;
    valueType: string;
};

export async function addFinance(newFinance: Finance) {
    await axios
        .post('http://localhost:3000/finances', newFinance)
        .then(() => console.log('criado com sucesso'))
        .catch(err => console.log(err.message));
}
