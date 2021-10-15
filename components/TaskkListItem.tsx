import React from "react";
import { useAppContext } from "../context/AppContext";
import { Task } from "../interfaces";

export interface TaskListItemProps {
    task: Task;
}

export const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {
    const { state, dispatch } = useAppContext()
    return (
        <div key={task.id} className="border rounded bg-gray-50 border-gray-200 p-4 m-1">
            <p>{task.title}</p>
            <button onClick={() => { dispatch({ type: "start_task", value: {} }) }}>start{task.startedAt.toString()}</button>
            <button onClick={() => { dispatch({ type: "finish_task", value: task.id }) }}>finish{task.finishedAt?.toString()}</button>
        </div>
    );
};