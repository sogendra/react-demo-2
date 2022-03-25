import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import ProjectDashboard from "../Project/ProjectDashboard/ProjectDashboard";
import ProjectDetails from "../Project/ProjectDetail/ProjectDetails";
import AddProject from "../Project/ProjectForm/AddProject";
import UpdateProject from "../Project/ProjectForm/UpdateProject";
import ProjectList from "../Project/ProjectList/ProjectList";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProjectDashboard />} />
                <Route path="/projects/list" element={<ProjectList />} />
                <Route path="/projects/add" element={<AddProject />} />
                <Route path="/projects/:projectId/edit/" element={<UpdateProject />} />
                <Route path="projects/:projectId/detail" element={<ProjectDetails />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}

export default AppRouter;