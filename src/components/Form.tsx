import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addFinance } from '../lib/api';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFinanceFormSchema, createFinanceFormData } from '../lib/utils/form-schema';
import { clsx } from 'clsx';

export const Form = () => {
    const queryClient = useQueryClient();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<createFinanceFormData>({
        resolver: zodResolver(createFinanceFormSchema),
    });

    const mutation = useMutation({
        mutationFn: (newFinance: createFinanceFormData) => {
            return addFinance(newFinance);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['finances'] });
        },
    });

    const createFinance = (newFinance: createFinanceFormData) => {
        mutation.mutate(newFinance);

        reset();
    };

    return (
        <div className="p-4 shadow-md bg-white">
            <form onSubmit={handleSubmit(createFinance)} className="flex flex-col rounded-sm">
                <label htmlFor="title">Título</label>
                <input
                    className={clsx(
                        'p-4 bg-slate-100 outline-blue-300 mt-1 rounded-md',
                        errors.title ? 'border border-red-500' : ''
                    )}
                    type="text"
                    id="title"
                    placeholder="Digite aqui sua descrição"
                    {...register('title')}
                />

                <div className="grid grid-cols-2 gap-5 items-center w-full my-6">
                    <div className="flex flex-col">
                        <label htmlFor="value">Valor</label>
                        <input
                            className={clsx(
                                'p-2 bg-slate-100 outline-blue-300 mt-1 rounded-md',
                                errors.value ? 'border border-red-500' : ''
                            )}
                            type="number"
                            id="value"
                            step=".01"
                            placeholder="Digite o valor"
                            {...register('value')}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="type">Tipo de valor</label>
                        <select
                            className={clsx(
                                'p-2 bg-slate-100 outline-blue-300 mt-1 rounded-md',
                                errors.valueType ? 'border border-red-500' : ''
                            )}
                            id="type"
                            {...register('valueType')}
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
