import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { Header } from '../components/Header';
import { Summary } from '../components/Summary';
import { TotalValue } from '../components/TotalValue';

export const Finances = () => {
    return (
        <div className="w-screen h-screen bg-zinc-100 overflow-x-hidden">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-52 mt-14 max-h-0">
                <section className="grid gap-4 h-fit">
                    <Form />
                    <TotalValue />
                </section>
                <section>
                    <Summary />
                    <div className="">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </section>
            </div>
        </div>
    );
};
