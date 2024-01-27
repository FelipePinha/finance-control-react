export const Summary = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-0">
            <h2 className="font-bold text-xl">Resumo financeiro</h2>

            <div className="flex gap-5 items-center">
                <button className="bg-pink-800 text-white p-2 px-3 rounded-md hover:bg-pink-600 hover:text-white duration-200">
                    Todos
                </button>
                <button className="bg-zinc-200 p-2 px-3 rounded-md hover:bg-pink-600 hover:text-white duration-200">
                    Lucros
                </button>
                <button className="bg-zinc-200 p-2 px-3 rounded-md hover:bg-pink-600 hover:text-white duration-200">
                    Dívidas
                </button>
            </div>
        </div>
    );
};
