import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="py-6 px-10 md:px-52 flex justify-between items-center shadow-md">
            <h1 className="font-bold flex gap-1 text-xl">
                <span className="text-pink-800">Nu</span>
                Kenzie
            </h1>
            <Link
                className="bg-zinc-300 p-1 px-3 text-center rounded-md hover:bg-zinc-200 duration-200"
                to={'/'}
            >
                Home
            </Link>
        </header>
    );
};
