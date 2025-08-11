export interface Item {
    id: string,
    title: string,
    done: boolean
}

export type Filter = 'all' | 'done' | 'todo';

export interface CheckListItemProps   {
    item: Item
}

export interface ChecklistListProps {
    items: Item[]
}

export interface FilterTabsProps {
    active: Filter
}

export interface ProgressBarProps {
    total: number,
    done: number
}

export interface AddItemModalProps {
    open: boolean
}