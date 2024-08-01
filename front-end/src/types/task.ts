export interface Task {
    id: number;
    title: string;
    description: string;
    totalTime: number;
    pomodoroCount: number;
    completed: boolean;
    createdAt: Date;
}