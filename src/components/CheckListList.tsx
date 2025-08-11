import React from 'react';
import type { ChecklistListProps } from '../types';
import ChecklistItem from './CheckListItem';

const ChecklistList: React.FC<ChecklistListProps> = ({ items }) => {
    if (!items.length) {
        return (
        <div
            role="status"
            className="rounded-xl bg-slate-800/60 p-6 text-center text-sm text-slate-300 ring-1 ring-white/10"
        >
            <div className="mb-2 text-3xl">🗂️</div>
            Список порожній. Додайте перший пункт.
        </div>
        );
    }

    return (
        <div role="list" className="flex flex-col gap-2">
        {items.map((it) => (
            <ChecklistItem key={it.id} item={it} />
        ))}
        </div>
    );
};

export default ChecklistList;
