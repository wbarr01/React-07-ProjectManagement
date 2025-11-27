import noProjectImg from '../assets/no-projects.png';

export default function ProjectForm({ handleClick }) {

    return (
        <><img className="h-24 w-24" src={noProjectImg} alt="No Projects image" />
            <h1>No Project Selected</h1>
            <p>Select a project ot get started withy a new one</p>
            <button id="NewProject" onClick={handleClick} className="bg-gray-900 text-white"> Create new Project</button></>
    );
}