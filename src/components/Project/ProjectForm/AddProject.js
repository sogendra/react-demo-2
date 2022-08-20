import { useNavigate } from "react-router-dom";
import http from "../../Axios/Axios";
import ProjectForm from "./ProjectForm";

const initialFormValue = {
    projectName: "",
    client: "",
    totalHours: "",
    engineers: "",
    teamLeads: "",
    pm: "",
    budget: "",
}

const AddProject = () => {

    const navigateTo = useNavigate();

    const addProject = (values) => {
        console.log("Add values", values);
        http.post("/projects",values).then(() => {
            console.log("New Project Added successfully...");
            navigateTo("/projects/list");
        });
    };

    return (
        <>
            <h1>Add new Project </h1>
            <ProjectForm project={initialFormValue} handleSubmit={addProject} btnText="Save" />
        </>
    )
}

export default AddProject;