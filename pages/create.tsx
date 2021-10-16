import router from 'next/router';
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Create = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [project, setProject] = useState('');
    const { state, dispatch } = useAppContext();
    return (
        <>
            <button onClick={() => router.push('/')}>Back</button>
            <div>
                <h1>Create</h1>
                <form
                    className="grid grid-cols-1"
                    onSubmit={(e) => { e.preventDefault(); dispatch({ type: "create_task", value: { title: title, description: description, project: project } }); router.push('/') }}>
                    <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    <input type="text" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    <input type="text" name="project" value={project} onChange={(e) => { setProject(e.target.value) }} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Create;