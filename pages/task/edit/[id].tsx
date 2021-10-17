import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { Task } from '../../../interfaces';
import { convertDate } from '../../../utils';

const Edit = () => {
    const router = useRouter();
    const { id } = router.query;

    const { state, dispatch } = useAppContext();
    const [task, setTask] = useState<Task>();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [project, setProject] = useState('');

    React.useEffect(() => {
        setTask(state.tasks.find(t => t.id == id))
        setTitle(task?.title || '');
        setDescription(task?.description || '');
        setProject(task?.project || '');
    }, [task]);

    return (
        <>
            <div className="flex w-full justify-between">
                <div className="">
                    <button onClick={() => router.push(`/task/${id}`)} className="text-gray-800 p-1 rounded hover:bg-gray-200 hover:shadow-inner transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>
                <div className="">

                </div>
            </div>
            <div className="grid p-4 gap-8">

                <form className="grid gap-8" onSubmit={(e) => { e.preventDefault(); dispatch({ type: "edit_task", value: { id: id, title: title, description: description, project: project } }); router.push(`/task/${id}`) }}>
                    {task?.title &&
                        <input className="text-2xl font-bold text-gray-800 p-2 w-full rounded-lg bg-gray-50 border outline-none focus:outline-none focus:border-gray-400 focus:bg-white focus:shadow hover:shadow-sm  hover:bg-white transition-all" type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    }
                    {task?.description &&
                        <input className="text-base font-medium text-gray-700 p-2 w-full rounded-lg bg-gray-50 border outline-none focus:outline-none focus:border-gray-400 focus:bg-white focus:shadow hover:shadow-sm  hover:bg-white transition-all" type="text" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    }
                    {task?.project &&
                        <input className="text-base font-semibold text-gray-700 p-2 w-full rounded-lg bg-gray-50 border outline-none focus:outline-none focus:border-gray-400 focus:bg-white focus:shadow hover:shadow-sm  hover:bg-white transition-all" type="text" name="project" value={project} onChange={(e) => { setProject(e.target.value) }} />

                    }
                    <button className="p-2 bg-green-800 text-gray-200 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg hover:bg-green-700 transition-all" type="submit">Save</button>
                </form>
               
            </div>
        </>
    );
}

export default Edit;