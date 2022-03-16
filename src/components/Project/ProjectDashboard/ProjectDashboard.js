// import { NavLink } from "react-router-dom";
import style from "./ProjectDashboard.module.css";

const ProjectDashboard = () => {
  return (
    <>
      <span>
        <NavLink to="/projects/list">Projects</NavLink>
      </span>
      {/* <span>
            <NavLink to="/projects/add">Add new Projects</NavLink>
          </span> */}
    </>
  );
};

export default ProjectDashboard;
