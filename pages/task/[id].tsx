import { useAppContext } from "../../context/AppContext";
import { useRouter } from "next/router";
import { convertDate } from "../../utils";

const Task = () => {
    const router = useRouter();
    const { id } = router.query;
    const { state, dispatch } = useAppContext();

    const task = state.tasks.find((task) => task.id == id);
    return (
        <>
            <div className="flex w-full justify-between">
                <div className="">
                    <button onClick={() => router.push('/')} className="text-gray-800 p-1 rounded hover:bg-gray-200 hover:shadow-inner transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>
                <div className="">
                    <button onClick={() => { router.push(`edit/${task.id}`) }} className="text-gray-800 p-1 mx-1 rounded hover:bg-gray-200 hover:shadow-inner transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </button>
                    <button onClick={() => { dispatch({ type: "delete_task", value: task.id }); router.push('/') }} className="text-gray-800 p-1 mx-1 rounded hover:bg-gray-200 hover:shadow-inner transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="grid p-4 gap-8">

                {task?.title && <h2 className="text-3xl font-bold text-gray-800">{task.title}</h2>}
                {task?.description && <p className="text-base text-gray-700 px-1">{task.description}</p>}
                <div className="w-max bg-gray-200 py-1 px-4 rounded-lg text-gray-600 text-base font-bold">
                    {task?.project && <p>{task.project}</p>}
                </div>
                {task && task.startedAt ?
                    <>
                        {task && task.finishedAt ?
                            <div className="flex justify-between">
                                <p className="text-lg text-gray-700 font-semibold flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {convertDate(task.startedAt)}
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                                <p className="text-lg text-gray-700 font-semibold flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {convertDate(task.finishedAt)}
                                </p>
                            </div>
                            :
                            <div className="grid gap-8">
                                <p className="text-lg text-gray-700 font-semibold flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {convertDate(task.startedAt)}
                                </p>
                                <button onClick={() => { dispatch({ type: "finish_task", value: task.id }) }} className="p-2 bg-blue-800 text-gray-200 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg hover:bg-blue-700 transition-all">Finish</button>
                            </div>
                        }
                    </>
                    :
                    <button onClick={() => { dispatch({ type: "start_task", value: task.id }) }} className="p-2 bg-green-800 text-gray-200 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg hover:bg-green-700 transition-all">Start Task</button>}

            </div>
        </>
    );
}

export default Task;