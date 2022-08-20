import { useEffect, useState } from "react";
import http from "../../Axios/Axios";
import Project from "./Project";
import "./ProjectList.css";

const ProjectList = () => {

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        getProjects();
    },[])

    const getProjects = () => {
        http.get("/projects").then(({data}) => {
            console.log("Res: ",data);
            setProjectList(data);
        })
    }

    const deleteProject = projectId => {
        http.delete(`/projects/${projectId}`).then(() => {
            console.log("Deleted");
            getProjects();
        })
    }

    return (
        <div className="project-list">
            <table>
                {/* <caption>Projects</caption> */}
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Client</th>
                        <th>Total Hours</th>
                        <th>Engineers</th>
                        <th>Team Lead</th>
                        <th>Project Manager</th>
                        <th>Budget</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <>
                        {
                            projectList.map(project => {
                                return <Project key={project.id} project={project} deleteProject={deleteProject} />
                            })
                        }
                    </>
                </tbody>
            </table>
        </div>
    )
}

export default ProjectList;