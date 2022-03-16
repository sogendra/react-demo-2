import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <h1>Logo</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects/list">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
