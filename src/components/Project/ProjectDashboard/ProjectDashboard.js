import { NavLink } from "react-router-dom";

const ProjectDashboard = () => {
  return (
    <>
      <span>
        <NavLink to="/projects/list">Projects</NavLink>
      </span>
      <span>
        <NavLink to="/projects/add">Add new Projects</NavLink>
      </span>
      <span>
        <NavLink to="/about">About</NavLink>
      </span>
    </>
  );
};

export default ProjectDashboard;
