import { useQuery } from '@tanstack/react-query';
import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { Header } from '../components/Header';
import { Summary } from '../components/Summary';
import { TotalValue } from '../components/TotalValue';
import { fetchFinance } from '../lib/api';
import { Finance } from '../types/finances-types';
import { useState } from 'react';
import { Modal } from '../components/Modal';

export const Finances = () => {
    const [filter, setFilter] = useState<'all' | 'profit' | 'expense'>('all');
    const [modalIsOpen, setModalIsOpen] = useState(true);

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
                    <Summary filter={filter} setFilter={setFilter} />
                    <div className="">
                        {finances
                            ?.filter((finance: Finance) =>
                                filter === 'all'
                                    ? true
                                    : filter === 'profit'
                                    ? finance.valueType === 'profit'
                                    : finance.valueType === 'expense'
                            )
                            .map((finance: Finance) => (
                                <Card
                                    key={finance.id}
                                    finance={finance}
                                    setModalIsOpen={setModalIsOpen}
                                />
                            ))}
                    </div>
                </section>
            </div>
            <Modal setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} />
        </div>
    );
};
