import { useState, useRef } from 'react';
/* const INIT_PROJECT = {
    title: "",
    description: "",
}; */

export default function ProjectForm({ addNewProject }) {
    //  const [project, setProject] = useState(INIT_PROJECT);
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    let project = {
        title: "",
        description: "",
        dueDate: "",
    };

    /* function handleChange(event) {
        const { name, value } = event.target;
        setProject(prevProject => ({
            ...prevProject,
            [name]: value,
        }));
    } */

    function handleCancel() {
        //     setProject(INIT_PROJECT);

        title.current.value = "";
        description.current.value = "";
        dueDate.current.value = "";
    }

    function handleSave() {
        /*         if (project != null && project.title !== "") {
                    addNewProject(project);
                    setProject(INIT_PROJECT);
                } */

        if (title.current.value) {
            project.title = title.current.value;
            project.description = description.current.value;
            project.dueDate = dueDate.current.value;

            addNewProject(project);
            title.current.value = "";
            description.current.value = "";
            dueDate.current.value = "";
        }
    }


    return (
        <div className="">
            {/* <h1>{project.title}  {project.description}</h1> */}
            <button id="cancel" onClick={handleCancel} className="bg-gray-300"> cancel</button>
            <button id="save" onClick={handleSave} className="bg-gray-900 text-white"> Save</button>
            <h2>TITLE</h2>
            {/* <input id="title" name="title" type='text' required value={project.title} onChange={handleChange} className="bg-gray-300"></input> */}
            <input id="title" name="title" type='text' required ref={title} className="bg-gray-300"></input>
            <h2>DESCRIPTION</h2>
            {/* <input id="description" name="description" type='text' value={project.description} onChange={handleChange} className="bg-gray-300"></input> */}
            <input id="description" name="description" type='text' ref={description} className="bg-gray-300"></input>
            <h2>DUE DATE</h2>
            <input id="date" type="date" ref={dueDate} className="bg-gray-300"></input>
        </div>
    );
}