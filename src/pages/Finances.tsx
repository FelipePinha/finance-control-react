import { useQuery } from '@tanstack/react-query';
import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { Header } from '../components/Header';
import { Summary } from '../components/Summary';
import { TotalValue } from '../components/TotalValue';
import { Finance, fetchFinance } from '../lib/api';

export const Finances = () => {
    const { data: finances, isLoading } = useQuery({
        queryKey: ['finances'],
        queryFn: () => fetchFinance(),
        refetchOnWindowFocus: false,
    });

    if (isLoading) return <div>carregando...</div>;

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
                        {finances?.map((finance: Finance) => (
                            <Card key={finance.id} finance={finance} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};
