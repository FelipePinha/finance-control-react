import { FaTrash, FaPencilAlt } from 'react-icons/fa';

export const Card = () => {
    return (
        <article className="bg-white border-l-red-500 border-4 border-r-0 border-t-0 border-b-0 p-2 py-6 shadow-md mt-5 rounded-md grid grid-cols-3 items-center justify-items-center">
            <h3>Compra</h3>

            <p>R$ -250,00</p>

            <div className="flex items-center gap-5">
                <FaPencilAlt className="cursor-pointer" />
                <FaTrash className="cursor-pointer" />
            </div>
        </article>
    );
};
