import React from "react";
import { useAppContext } from "../context/AppContext";
import { Task } from "../interfaces";
import Link from "next/link";
import { convertDate } from "../utils";

export interface TaskListItemProps {
    task: Task;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {



    return (
        <div key={task.id} className=" bg-gray-100  border-b-2 hover:border-blue-400 transition-all px-3 py-3 my-6 items-start grid gap-2 h-28">
            <Link href={`/task/${task.id}`}>
                <a>
                    <h3 className="text-xl font-semibold">{task.title}</h3>
                </a>
            </Link>
            <div className="self-end">

                {task && task.startedAt ?
                    <>
                        {task && task.finishedAt ?
                            <div className="flex justify-between">
                                <p className="text-sm text-gray-700 font-semibold flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {convertDate(task.startedAt)}
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                                <p className="text-sm text-gray-700 font-semibold flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {convertDate(task.finishedAt)}
                                </p>
                            </div>
                            :
                            <p className="text-sm text-gray-700 font-semibold flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {convertDate(task.startedAt)}
                            </p>
                        }
                    </>
                    :
                    <p className=" font-medium text-gray-600 text-xs">Not Started Yet</p>}
            </div>
        </div>
    );
};

export default TaskListItem;