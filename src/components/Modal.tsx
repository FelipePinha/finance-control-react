import { Dispatch, SetStateAction } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { clsx } from 'clsx';
import { useForm } from 'react-hook-form';
import { updateFinanceFormData, updateFinanceFormSchema } from '../lib/utils/modal-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Finance } from '../types/finances-types';
import { editFinance } from '../lib/api';

interface ModalProps {
    modalIsOpen: boolean;
    setModalIsOpen: Dispatch<SetStateAction<boolean>>;
    clickedFinance: Finance;
}

export const Modal = ({ setModalIsOpen, modalIsOpen, clickedFinance }: ModalProps) => {
    const queryClient = useQueryClient();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<updateFinanceFormData>({
        resolver: zodResolver(updateFinanceFormSchema),
    });

    const mutation = useMutation({
        mutationFn: editFinance,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['finances'] });
        },
    });

    const handleEdit = (newFinance: updateFinanceFormData) => {
        console.log(newFinance);
        mutation.mutate({
            id: clickedFinance.id,
            title: newFinance.modalTitle,
            value: newFinance.modalValue,
            valueType: newFinance.modalValueType,
        });

        setModalIsOpen(false);
    };

    return (
        <div
            onClick={() => setModalIsOpen(false)}
            className={clsx(
                'h-screen w-screen fixed top-0 left-0 flex items-end md:items-center justify-center  bg-zinc-300 bg-opacity-50',
                !modalIsOpen ? 'hidden' : 'block'
            )}
        >
            <form
                onSubmit={handleSubmit(handleEdit)}
                onClick={e => e.stopPropagation()}
                className="bg-white p-5 flex flex-col rounded-md w-full md:w-auto"
            >
                <h2 className="font-bold text-xl mb-5">Editar finança</h2>

                <div className="flex flex-col">
                    <label htmlFor="modal-title">Título</label>
                    <input
                        {...register('modalTitle')}
                        className={clsx(
                            'p-4 bg-slate-100 outline-blue-300 mt-1 rounded-md',
                            errors.modalTitle ? 'border border-red-500' : ''
                        )}
                        type="text"
                        defaultValue={clickedFinance?.title}
                    />
                </div>
                <div className="flex flex-col my-5">
                    <label htmlFor="modal-value">Valor</label>
                    <input
                        {...register('modalValue')}
                        className={clsx(
                            'p-4 bg-slate-100 outline-blue-300 mt-1 rounded-md',
                            errors.modalValue ? 'border border-red-500' : ''
                        )}
                        type="number"
                        step=".01"
                        defaultValue={clickedFinance?.value}
                    />
                </div>
                <div>
                    <label htmlFor="modal-valueType">Tipo de valor</label>
                    <select
                        {...register('modalValueType')}
                        className={clsx(
                            'p-4 bg-slate-100 outline-blue-300 mt-1 rounded-md w-full',
                            errors.modalValueType ? 'border border-red-500' : ''
                        )}
                        defaultValue={clickedFinance.valueType}
                    >
                        <option value="">Selecione uma opção</option>
                        <option value="profit">Lucro</option>
                        <option value="expense">Dívida</option>
                    </select>
                </div>
                <div className="flex justify-end items-center gap-4 mt-5">
                    <button
                        type="button"
                        onClick={() => setModalIsOpen(false)}
                        className="p-3 bg-zinc-200 text-black rounded-md hover:bg-zinc-300 duration-200"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="p-3 bg-pink-800 text-white rounded-md hover:bg-pink-600 duration-200"
                    >
                        Salvar
                    </button>
                </div>
            </form>
        </div>
    );
};
