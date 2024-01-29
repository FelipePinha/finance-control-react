import { Dispatch, SetStateAction } from 'react';
import { clsx } from 'clsx';

interface ModalProps {
    modalIsOpen: boolean;
    setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ setModalIsOpen, modalIsOpen }: ModalProps) => {
    return (
        <div
            onClick={() => setModalIsOpen(false)}
            className={clsx(
                'h-screen w-screen fixed top-0 left-0 flex items-end md:items-center justify-center  bg-zinc-300 bg-opacity-50',
                !modalIsOpen ? 'hidden' : 'block'
            )}
        >
            <div
                onClick={e => e.stopPropagation()}
                className="bg-white p-5 flex flex-col rounded-md w-full md:w-auto"
            >
                <h2 className="font-bold text-xl mb-5">Editar finança</h2>

                <div className="flex flex-col">
                    <label htmlFor="modal-title">Título</label>
                    <input
                        name="modal-title"
                        className="p-4 bg-slate-100 outline-blue-300 mt-1 rounded-md"
                        type="text"
                    />
                </div>
                <div className="flex flex-col my-5">
                    <label htmlFor="modal-value">Valor</label>
                    <input
                        name="modal-value"
                        className="p-4 bg-slate-100 outline-blue-300 mt-1 rounded-md"
                        type="number"
                    />
                </div>
                <div>
                    <label htmlFor="modal-valueType">Tipo de valor</label>
                    <select
                        name="modal-valueType"
                        className="p-4 bg-slate-100 outline-blue-300 mt-1 rounded-md w-full"
                    >
                        <option value="">Selecione uma opção</option>
                        <option value="profit">Lucro</option>
                        <option value="expense">Dívida</option>
                    </select>
                </div>
                <div className="flex justify-end items-center gap-4 mt-5">
                    <button
                        onClick={() => setModalIsOpen(false)}
                        className="p-3 bg-zinc-200 text-black rounded-md hover:bg-zinc-300 duration-200"
                    >
                        Cancelar
                    </button>
                    <button className="p-3 bg-pink-800 text-white rounded-md hover:bg-pink-600 duration-200">
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
};
