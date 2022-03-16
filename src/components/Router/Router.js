import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import ProjectList from "../Project/ProjectList/ProjectList";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/projects/list" element={<ProjectList />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}

export default AppRouter;