import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectForm from "./ProjectForm";
import http from "../../Axios/Axios";

const UpdateProject = () => {

    const [project, setProject] = useState({});
    const {projectId} = useParams("projectId");
    const navigateTo = useNavigate();

    useEffect(() => {
        projectId && http.get(`/projects/${projectId}`).then(({data}) => {
            setProject(data);
        })
    },[projectId])

    const updateProject = values => {
        console.log("update", values);
        http.put(`/projects/${projectId}`,values).then(() => {
            console.log("updated");
            navigateTo("/projects/list");
        });
    }

    return (
        <>
            Update project
           <ProjectForm project={project} handleSubmit={updateProject} btnText="Update" />
        </>
    )
}

export default UpdateProject;