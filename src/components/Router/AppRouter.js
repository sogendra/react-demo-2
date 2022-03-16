import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import ProjectDashboard from "../Project/ProjectDashboard/ProjectDashboard";
import ProjectForm from "../Project/ProjectForm/ProjectForm";
import ProjectList from "../Project/ProjectList/ProjectList";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProjectDashboard />} />
                <Route path="/projects/list" element={<ProjectList />} />
                <Route path="/projects/add" element={<ProjectForm />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}

export default AppRouter;