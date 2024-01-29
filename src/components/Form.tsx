import { FormEvent, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addFinance } from '../lib/api';
import { Finance } from '../types/finances-types';

export const Form = () => {
    const queryClient = useQueryClient();
    const [title, setTitle] = useState('');
    const [value, setValue] = useState<number>(0);
    const [valueType, setValueType] = useState('');

    const mutation = useMutation({
        mutationFn: (newFinance: Finance) => {
            return addFinance(newFinance);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['finances'] });
        },
    });

    const submitForm = (e: FormEvent) => {
        e.preventDefault();

        const newFinance = {
            title,
            value,
            valueType,
        };

        mutation.mutate(newFinance);

        setTitle('');
        setValue(0);
        setValueType('');
    };

    return (
        <div className="p-4 shadow-md bg-white">
            <form onSubmit={submitForm} className="flex flex-col rounded-sm">
                <label htmlFor="title">Título</label>
                <input
                    className="p-4 bg-slate-100 outline-blue-300 mt-1"
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Digite aqui sua descrição"
                />

                <div className="grid grid-cols-2 gap-5 items-center w-full my-6">
                    <div className="flex flex-col">
                        <label htmlFor="value">Valor</label>
                        <input
                            className="p-2 bg-slate-100 outline-blue-300 mt-1"
                            type="number"
                            name="value"
                            id="value"
                            step=".01"
                            value={value}
                            onChange={e => setValue(Number(e.target.value))}
                            placeholder="Digite o valor"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="type">Tipo de valor</label>
                        <select
                            value={valueType}
                            onChange={e => setValueType(e.target.value)}
                            className="p-2 bg-slate-100 outline-blue-300 mt-1"
                            name="type"
                            id="type"
                        >
                            <option value="">Selecione uma opção</option>
                            <option value="profit">Lucro</option>
                            <option value="expense">Despesa</option>
                        </select>
                    </div>
                </div>

                <button
                    className="text-white font-bold bg-pink-800 rounded-md w-full text-center p-3 hover:bg-pink-600 duration-200 shadow-sm"
                    type="submit"
                >
                    Inserir Valor
                </button>
            </form>
        </div>
    );
};
