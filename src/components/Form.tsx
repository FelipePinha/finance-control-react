export const Form = () => {
    return (
        <div className="p-4 shadow-md bg-white">
            <form className="flex flex-col gap-5 rounded-sm">
                <label htmlFor="description">Descrição</label>
                <input
                    className="p-4 bg-slate-100 outline-blue-300"
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Digite aqui sua descrição"
                />

                <div className="grid grid-cols-2 gap-5 items-center w-full">
                    <div className="flex flex-col">
                        <label htmlFor="value">Valor</label>
                        <input
                            className="p-2 bg-slate-100 outline-blue-300"
                            type="number"
                            name="value"
                            id="value"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="type">Tipo de valor</label>
                        <select className="p-2 bg-slate-100 outline-blue-300" name="type" id="type">
                            <option value=""></option>
                            <option value="profit">Lucro</option>
                            <option value="expense">Despesa</option>
                        </select>
                    </div>
                </div>

                <button
                    className="text-white font-bold bg-pink-800 rounded-md w-full text-center p-3 hover:bg-pink-600 duration-200 shadow-sm"
                    type="submit"
                >
                    Inserir Valor
                </button>
            </form>
        </div>
    );
};
