import { Dispatch, SetStateAction } from 'react';
import { clsx } from 'clsx';

interface SummaryProps {
    filter: 'all' | 'profit' | 'expense';
    setFilter: Dispatch<SetStateAction<'all' | 'profit' | 'expense'>>;
}

export const Summary = ({ filter, setFilter }: SummaryProps) => {
    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-0">
            <h2 className="font-bold text-xl">Resumo financeiro</h2>

            <div className="flex gap-5 items-center">
                <button
                    onClick={() => setFilter('all')}
                    className={clsx(
                        'p-2 px-3 rounded-md hover:bg-pink-600 hover:text-white duration-200',
                        filter === 'all' ? 'bg-pink-800 text-white' : 'bg-zinc-200 text-black'
                    )}
                >
                    Todos
                </button>
                <button
                    onClick={() => setFilter('profit')}
                    className={clsx(
                        'p-2 px-3 rounded-md hover:bg-pink-600 hover:text-white duration-200',
                        filter === 'profit' ? 'bg-pink-800 text-white' : 'bg-zinc-200 text-black'
                    )}
                >
                    Lucros
                </button>
                <button
                    onClick={() => setFilter('expense')}
                    className={clsx(
                        'p-2 px-3 rounded-md hover:bg-pink-600 hover:text-white duration-200',
                        filter === 'expense' ? 'bg-pink-800 text-white' : 'bg-zinc-200 text-black'
                    )}
                >
                    Dívidas
                </button>
            </div>
        </div>
    );
};
