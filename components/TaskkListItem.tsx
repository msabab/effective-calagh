import React from "react";
import { useAppContext } from "../context/AppContext";

export interface TaskListItemProps {
    task: Task;
}

export const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {
    const { state, dispatch } = useAppContext()
    return (
        <div key={task.id}>
            <p>{task.title}</p>
            <button onClick={() => { dispatch({ type: "start_task", value: {} }) }}>start{task.startedAt.toString()}</button>
            <button onClick={() => { dispatch({ type: "finish_task", value: task.id }) }}>finish{task.finishedAt?.toString()}</button>
        </div>
    );
};