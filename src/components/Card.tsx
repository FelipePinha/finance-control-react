import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { clsx } from 'clsx';
import { Finance } from '../types/finances-types';

interface CardProps {
    finance: Finance;
}

export const Card = ({ finance }: CardProps) => {
    const value = finance.valueType === 'expense' ? Number(finance.value) * -1 : finance.value;

    return (
        <article
            className={clsx(
                'bg-white  border-4 border-r-0 border-t-0 border-b-0 p-2 py-6 shadow-md my-5 rounded-md grid grid-cols-3 items-center justify-items-center ',
                { 'border-l-red-500': finance.valueType === 'expense' },
                { 'border-l-green-500': finance.valueType === 'profit' }
            )}
        >
            <h3>{finance.title}</h3>

            <p>R$ {Number(value).toFixed(2)}</p>

            <div className="flex items-center gap-5">
                <FaPencilAlt className="cursor-pointer" />
                <FaTrash className="cursor-pointer" />
            </div>
        </article>
    );
};
