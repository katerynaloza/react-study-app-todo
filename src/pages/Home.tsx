import React from 'react';
import type { Filter } from '../types';
import CheckListList from '../components/CheckListList';
import FilterTabs from '../components/FilterTabs';
import ProgressBar from '../components/ProgressBar';
import AddItemModal from '../modals/AddItemModal';

const dummyItems = [
    { id: '1', title: 'JSX', done: true },
    { id: '2', title: 'Props', done: true },
    { id: '3', title: 'State', done: false },
    { id: '4', title: 'useEffect', done: false },
];

const Home: React.FC = () => {
    const active: Filter = 'all';

    return (
        <main className="min-h-screen bg-slate-900 text-slate-100">
        <div className="mx-auto max-w-md p-5">
            <div className="rounded-2xl bg-slate-800/60 backdrop-blur shadow-xl ring-1 ring-white/10 p-5 flex flex-col gap-6">
            <header className="flex flex-col items-center justify-between">
                <h1 className="text-2xl font-semibold tracking-tight mb-4">Мій прогрес у React</h1>
                <button
                type="button"
                aria-haspopup="dialog"
                aria-controls="add-item-modal"
                className="rounded-xl px-4 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition
                            text-white shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                Додати новий пункт
                </button>
            </header>

            <section aria-label="Фільтри">
                <FilterTabs active={active} />
            </section>

            <section aria-label="Список пунктів">
                <CheckListList items={dummyItems} />
            </section>

            <footer>
                <ProgressBar total={14} done={2} />
            </footer>
            </div>
        </div>

        {/* на зараз модалку сховано */}
        <AddItemModal open={false} />
        </main>
    );
};

export default Home;
