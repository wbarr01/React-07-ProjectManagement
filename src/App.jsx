import { useState } from 'react';
import noProjectImg from './assets/no-projects.png';
import ProjectForm from "./components/ProjectForm";

const INIT_PROJECT_LIST = [];
function App() {
  const [isCreating, setIsCreating] = useState(false);
  const [projectList, setProjectList] = useState(INIT_PROJECT_LIST);

  function handleClick() {
    setIsCreating(prevIsCreating => !prevIsCreating);
  }

  function addNewProject(newProject) {
    setProjectList(prev => ([...prev, newProject]));
  }

  let myForm = (
    <div className="gap-3">
      <img className="h-24 w-24" src={noProjectImg} alt="No Projects image" />
      <h1>No Project Selected</h1>
      <p>Select a project ot get started withy a new one</p>
      <button id="NewProject" onClick={handleClick} className="bg-gray-900 text-white"> Create new Project</button>
    </div>);
  if (isCreating) myForm = <ProjectForm addNewProject={addNewProject} />


  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <aside id="projectSideBar" className="bg-black min-w-24 max-w-40 min-h-64 text-white float-left">
        <h2>Your Projects</h2>
        <button id="AddProject" onClick={handleClick} className="bg-gray-600 "> +Add Project</button>
        <ul>
          {projectList.map((p, index) => (<li key={index}>{p.title}</li>))}
        </ul>
      </aside>
      {myForm}
    </>
  );
}

export default App;
