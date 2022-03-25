import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../Axios/Axios";

const ProjectDetails = () => {

    const [projectDetail, setProjectdetail] = useState({});
    const {projectId} = useParams("projectId");
    
    useEffect(() => {
        http.get(`/projects/${projectId}`).then(({data}) => {
            setProjectdetail(data);
        })
    }, [projectId]);

    return (
        <div>
           <h1>{projectDetail.projectName}</h1> 
            <p>Client Name : {projectDetail.client}</p>
            <p>Total Hours : {projectDetail.totalHours}</p>
            <p>No. of Engineers : {projectDetail.engineers}</p>
            <p>No. of Team leads : {projectDetail.teamLeads}</p>
            <p>Project Manager : {projectDetail.pm}</p>
            <p>Budget : {projectDetail.budget}</p>
        </div>
    )
}

export default ProjectDetails;