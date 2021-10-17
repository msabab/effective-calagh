import router from 'next/router';
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { convertDate } from '../utils';

const Create = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [project, setProject] = useState('');
    const { state, dispatch } = useAppContext();
    return (
        <>
            {/* <button onClick={() => router.push('/')}>Back</button> */}
            {/* <div>
                <h1>Create</h1>
                <form
                    className="grid grid-cols-1"
                    onSubmit={(e) => { e.preventDefault(); dispatch({ type: "create_task", value: { title: title, description: description, project: project } }); router.push('/') }}>
                    <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    <input type="text" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    <input type="text" name="project" value={project} onChange={(e) => { setProject(e.target.value) }} />
                    <button type="submit">Submit</button>
                </form>
            </div> */}




            <>
                <div className="flex w-full justify-between">
                    <div className="">
                        <button onClick={() => router.push(`/`)} className="text-gray-800 p-1 rounded hover:bg-gray-200 hover:shadow-inner transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className="">

                    </div>
                </div>
                <div className="grid p-4 gap-8">

                    <form className="grid gap-8" onSubmit={(e) => { e.preventDefault(); dispatch({ type: "create_task", value: { title: title, description: description, project: project } }); router.push(`/`) }}>
                        <div className="relative">
                            <input className="peer text-xl font-semibold text-gray-800 p-2 w-full bg-gray-100 border-b-2 focus:border-blue-800 outline-none focus:outline-none   transition-all placeholder-transparent" placeholder="Title" type="text" id="title" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-medium" htmlFor="title">Title</label>
                        </div>
                        <div className="relative">
                            <input className="peer text-xl font-semibold text-gray-800 p-2 w-full bg-gray-100 border-b-2 focus:border-blue-800 outline-none focus:outline-none   transition-all placeholder-transparent" placeholder="Description" type="text" id="description" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-medium" htmlFor="description">Description</label>
                        </div>
                        <div className="relative">
                            <input className="peer text-xl font-semibold text-gray-800 p-2 w-full bg-gray-100 border-b-2 focus:border-blue-800 outline-none focus:outline-none   transition-all placeholder-transparent" placeholder="Project" type="text" name="project" value={project} onChange={(e) => { setProject(e.target.value) }} />
                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-medium" htmlFor="project">Project</label>
                        </div>

                        <button className="p-2 bg-green-800 text-gray-200 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg hover:bg-green-700 transition-all" type="submit">Save</button>
                    </form>


                </div>
            </>
        </>
    );
}

export default Create;







// import { useRouter } from 'next/router';
// import React, { useState } from 'react';
// import { useAppContext } from '../../../context/AppContext';
// import { Task } from '../../../interfaces';
// import { convertDate } from '../../../utils';

// const Edit = () => {
//     const router = useRouter();
//     const { id } = router.query;

//     const { state, dispatch } = useAppContext();
//     const [task, setTask] = useState<Task>();
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [project, setProject] = useState('');

//     React.useEffect(() => {
//         setTask(state.tasks.find(t => t.id == id))
//         setTitle(task?.title || '');
//         setDescription(task?.description || '');
//         setProject(task?.project || '');
//     }, [task]);

//     return (
//         <>
//             <div className="flex w-full justify-between">
//                 <div className="">
//                     <button onClick={() => router.push(`/task/${id}`)} className="text-gray-800 p-1 rounded hover:bg-gray-200 hover:shadow-inner transition-all">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                         </svg>
//                     </button>
//                 </div>
//                 <div className="">
//                     <button onClick={() => { router.push(`edit/${task.id}`) }} className="text-gray-800 p-1 mx-1 rounded hover:bg-gray-200 hover:shadow-inner transition-all">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//                         </svg>
//                     </button>
//                     <button onClick={() => { dispatch({ type: "delete_task", value: task.id }); router.push('/') }} className="text-gray-800 p-1 mx-1 rounded hover:bg-gray-200 hover:shadow-inner transition-all">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//             <div className="grid p-4 gap-8">

//                 <form className="grid gap-8" onSubmit={(e) => { e.preventDefault(); dispatch({ type: "edit_task", value: { id: id, title: title, description: description, project: project } }); router.push(`/task/${id}`) }}>
//                     {task?.title &&
//                         <input className="text-2xl font-bold text-gray-800 p-2 w-full rounded-lg bg-gray-50 border outline-none focus:outline-none focus:border-gray-400 focus:bg-white focus:shadow hover:shadow-sm  hover:bg-white transition-all" type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
//                     }
//                     {task?.description &&
//                         <input className="text-base font-medium text-gray-700 p-2 w-full rounded-lg bg-gray-50 border outline-none focus:outline-none focus:border-gray-400 focus:bg-white focus:shadow hover:shadow-sm  hover:bg-white transition-all" type="text" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
//                     }
//                     {task?.project &&
//                         <input className="text-base font-semibold text-gray-700 p-2 w-full rounded-lg bg-gray-50 border outline-none focus:outline-none focus:border-gray-400 focus:bg-white focus:shadow hover:shadow-sm  hover:bg-white transition-all" type="text" name="project" value={project} onChange={(e) => { setProject(e.target.value) }} />

//                     }
//                     <button className="p-2 bg-green-800 text-gray-200 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg hover:bg-green-700 transition-all" type="submit">Save</button>
//                 </form>
//                 {task && task.startedAt ?
//                     <>
//                         {task && task.finishedAt ?
//                             <div className="flex justify-between">
//                                 <p className="text-lg text-gray-700 font-semibold flex">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                     </svg>
//                                     {convertDate(task.startedAt)}
//                                 </p>
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                                 </svg>
//                                 <p className="text-lg text-gray-700 font-semibold flex">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                     </svg>
//                                     {convertDate(task.finishedAt)}
//                                 </p>
//                             </div>
//                             :
//                             <button onClick={() => { dispatch({ type: "finish_task", value: id }) }} className="p-2 bg-blue-800 text-gray-200 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg hover:bg-blue-700 transition-all">Finish</button>
//                         }
//                     </>
//                     :
//                     <button onClick={() => { dispatch({ type: "start_task", value: id }) }} className="p-2 bg-green-800 text-gray-200 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg hover:bg-green-700 transition-all">Start Task</button>}

//             </div>
//         </>
//     );
// }

// export default Edit;