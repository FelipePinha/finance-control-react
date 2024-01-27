import { Form } from '../components/Form';
import { Header } from '../components/Header';
import { TotalValue } from '../components/TotalValue';

export const Finances = () => {
    return (
        <div className="w-screen h-screen bg-zinc-100">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-52 mt-14">
                <section className="grid gap-4">
                    <Form />
                    <TotalValue />
                </section>
                <section>
                    <h1>Lista de finanças</h1>
                </section>
            </div>
        </div>
    );
};
