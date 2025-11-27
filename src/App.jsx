import { useState } from 'react';
import ProjectForm from "./components/ProjectForm";

function App() {
  const [isCreating, setIsCreating] = useState(false);

  function handleClick() {
    setIsCreating(prevIsCreating => !prevIsCreating);
  }
  let myForm = <ProjectForm handleClick={handleClick} />;
  if (isCreating) myForm = <p>my love Vanessa</p>


  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <aside id="projectSideBar" className="bg-black min-w-24 max-w-40 text-white">
        <h2>Your Projects</h2>
        <button id="AddProject" onClick={handleClick} className="bg-gray-600"> +Add Project</button>
      </aside>
      {myForm}
    </>
  );
}

export default App;
