import { Dispatch, SetStateAction } from 'react';
import { SummaryButton } from './ui/Summary-button';

interface SummaryProps {
    filter: 'all' | 'profit' | 'expense';
    setFilter: Dispatch<SetStateAction<'all' | 'profit' | 'expense'>>;
}

export const Summary = ({ filter, setFilter }: SummaryProps) => {
    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-0">
            <h2 className="font-bold text-xl">Resumo financeiro</h2>

            <div className="flex gap-5 items-center">
                <SummaryButton filter={filter} setFilter={setFilter} theme="all" />
                <SummaryButton filter={filter} setFilter={setFilter} theme="profit" />
                <SummaryButton filter={filter} setFilter={setFilter} theme="expense" />
            </div>
        </div>
    );
};
