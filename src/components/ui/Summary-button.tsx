import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';

interface SummaryButtonProps {
    filter: 'all' | 'profit' | 'expense';
    setFilter: Dispatch<SetStateAction<'all' | 'profit' | 'expense'>>;
    theme: 'all' | 'profit' | 'expense';
}

export const SummaryButton = ({ filter, setFilter, theme }: SummaryButtonProps) => {
    const title = theme === 'all' ? 'Todos' : theme === 'profit' ? 'Lucro' : 'Dívidas';

    return (
        <button
            onClick={() => setFilter(theme)}
            className={clsx(
                'p-2 px-3 rounded-md hover:bg-pink-600 hover:text-white duration-200',
                filter === theme ? 'bg-pink-800 text-white' : 'bg-zinc-200 text-black'
            )}
        >
            {title}
        </button>
    );
};
