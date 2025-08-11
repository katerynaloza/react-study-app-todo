import React from 'react';
import type { FilterTabsProps } from '../types';

const FilterTabs: React.FC<FilterTabsProps> = ({ active }) => {
    const mkBtn = (label: string, val: 'all' | 'done' | 'todo') => {
        const isActive = active === val;
        return (
        <button
            type="button"
            role="button"
            aria-pressed={isActive}
            className={
            'px-3 py-1.5 rounded-full text-sm transition ' +
            (isActive
                ? 'bg-white text-slate-900 shadow'
                : 'text-slate-200 hover:bg-slate-700/60')
            }
        >
            {label}
        </button>
        );
    };

    return (
        <div
        className="inline-flex items-center gap-1 rounded-full bg-slate-700/50 p-1 ring-1 ring-white/10"
        role="tablist"
        aria-label="Фільтри"
        >
        {mkBtn('Усі', 'all')}
        {mkBtn('Вивчені', 'done')}
        {mkBtn('Невивчені', 'todo')}
        </div>
    );
};

export default FilterTabs;
