import React from 'react';
import type { AddItemModalProps } from '../types';

const AddItemModal: React.FC<AddItemModalProps> = ({ open }) => {
    if (!open) return null;

    return (
        <div
        id="add-item-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-item-title"
        className="fixed inset-0 grid place-items-center bg-black/60 p-4"
        >
        <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
            <h2 id="add-item-title" className="text-lg font-semibold">Add New Item</h2>
            <button type="button" aria-label="Close" className="p-1 rounded hover:bg-slate-100">✕</button>
            </div>
            <div className="flex flex-col gap-3">
            <label className="text-sm">
                Title
                <input
                type="text"
                placeholder="Напр., useContext"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </label>
            <button
                type="button"
                className="rounded-xl px-4 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white transition"
            >
                Add
            </button>
            </div>
        </div>
        </div>
    );
};

export default AddItemModal;
