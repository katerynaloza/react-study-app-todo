import React from 'react';
import type { ProgressBarProps } from '../types';

const ProgressBar: React.FC<ProgressBarProps> = ({ total, done }) => {
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;

    return (
        <div className="flex flex-col gap-2" aria-label="Прогрес">
        <div className="text-sm text-slate-300">{done}/{total} завершено</div>
        <div className="h-2.5 w-full rounded-full bg-slate-700/60 ring-1 ring-white/10" aria-hidden>
            <div
            className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-[width] duration-300"
            style={{ width: `${percent}%` }}
            />
        </div>
        </div>
    );
};

export default ProgressBar;
