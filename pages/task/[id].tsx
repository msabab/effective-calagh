import { useAppContext } from "../../context/AppContext";
import { useRouter } from "next/router";

const Task = () => {
    //get props and read info from state, props: id, state = 
    const router = useRouter();
    const { id } = router.query;
    const { state, dispatch } = useAppContext();

    const task = state.tasks.find((task) => task.id == id);
    return (
        <>
        <button onClick={()=>router.push('/')}>Back</button>
        <div>
            {task?.title && <p>{task.title}</p>}
            {task?.description && <p>{task.description}</p>}
            {task?.project && <p>{task.project}</p>}
            {task?.startedAt && <p>{task.startedAt}</p>}
            {task?.finishedAt && <p>{task.finishedAt}</p>}
            <button onClick={() => { dispatch({ type: "delete_task", value: task.id }); router.push('/') }}>Delete</button>
            <button onClick={() => { dispatch({ type: "edit_task", value: task.id }); router.push('/edit') }}>Edit</button>
            <button>start!</button>
            <button>finish!</button>
            {task?.startedAt && <button onClick={() => { dispatch({ type: "start_task", value: {} }) }}>start{task.startedAt.toString()}</button>}

            {task?.finishedAt && <button onClick={() => { dispatch({ type: "finish_task", value: task.id }) }}>finish{task.finishedAt?.toString()}</button>}
        </div>
        </>
    );
}

export default Task;