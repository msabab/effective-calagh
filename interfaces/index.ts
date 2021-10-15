export interface Task {
    id: number;
    title: string;
    project: string;
    description: string;
    createdAt: Date;
    startedAt: Date;
    finishedAt: Date;
}