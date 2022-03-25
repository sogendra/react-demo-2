import { NavLink } from "react-router-dom";

const Project = ({project, deleteProject}) => {
    return (
        <tr>
            <td>
                <NavLink to={`/projects/${project.id}/detail`}>{project.projectName}</NavLink>
                </td>
            <td>{project.client}</td>
            <td>{project.totalHours}</td>
            <td>{project.engineers}</td>
            <td>{project.teamLeads}</td>
            <td>{project.pm}</td>
            <td>{project.budget}</td>
            <td>
                <NavLink to={`/projects/${project.id}/edit`} >Edit</NavLink>
                <button onClick={() => deleteProject(project.id)}>Delete</button>
            </td>

        </tr>
    )
}

export default Project;
