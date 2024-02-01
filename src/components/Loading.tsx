import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const Loading = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
            <AiOutlineLoading3Quarters className="w-32 h-32 animate-spin" />
            <p>Carregando suas finanças...</p>
        </div>
    );
};
