import { Form } from '../components/Form';
import { Header } from '../components/Header';

export const Finances = () => {
    return (
        <div className="w-screen h-screen bg-zinc-100">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-52 mt-14">
                <section>
                    <Form />
                </section>
                <section>
                    <h1>Lista de finanças</h1>
                </section>
            </div>
        </div>
    );
};
