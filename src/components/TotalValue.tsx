import { Finance } from '../types/finances-types';

interface TotalValueProps {
    finances: Finance[];
}

export const TotalValue = ({ finances }: TotalValueProps) => {
    const sumAllValues = () => {
        let sum = 0;

        if (finances.length === 0) {
            return 0;
        } else {
            for (let i = 0; i < finances.length; i++) {
                if (finances[i].valueType === 'expense') {
                    sum = sum - Number(finances[i].value);
                } else {
                    sum = sum + Number(finances[i].value);
                }
            }
        }

        return sum.toFixed(2);
    };

    return (
        <article className="bg-white shadow-md p-3 rounded-sm">
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-bold">Valor total:</h2>
                <p className="text-pink-800 font-bold">$ {sumAllValues()}</p>
            </div>
            <p>O valor se refere ao saldo.</p>
        </article>
    );
};
