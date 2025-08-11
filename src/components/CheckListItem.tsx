import React from 'react';
import type { CheckListItemProps } from '../types';

const ChecklistItem: React.FC<CheckListItemProps> = ({ item }) => {
    const checked = item.done;

    return (
        <div
        role="listitem"
        aria-checked={checked}
        className="flex items-center justify-between rounded-xl bg-slate-800 hover:bg-slate-750/50
                    ring-1 ring-white/10 p-3 transition shadow-sm"
        >
        <div className="flex items-center gap-3">
            {/* декоративний чекбокс */}
            <span
            aria-hidden
            className={
                'grid place-items-center h-5 w-5 rounded-md ring-1 ring-white/15 transition ' +
                (checked ? 'bg-blue-500 text-white' : 'bg-slate-700/60 text-transparent')
            }
            title={checked ? 'Вивчено' : 'Не вивчено'}
            >
            ✓
            </span>

            <span className={'text-sm ' + (checked ? 'line-through opacity-70' : 'opacity-95')}>
            {item.title}
            </span>
        </div>

        {/* декоративна галочка справа */}
        <span aria-hidden className={'text-lg transition ' + (checked ? 'opacity-90' : 'opacity-20')}>
            ✓
        </span>
        </div>
    );
};

export default ChecklistItem;
