export interface ITask {
    id: number;
    title: string;
    description: string;
    categories: string[];
    date?: string;
    time?: string;
}