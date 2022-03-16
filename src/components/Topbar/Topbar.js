import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import style from "./Topbar.module.css";

const Topbar = () => {
  return (
    <section className={style.sec_container}>
      <Sidebar />
      <main className={style.main_container}>
        <header className={style.head_container}>
          <h4>Projects - dashboard</h4>
          <div className={style.profile_div}>
            <p>Hi, Sunny</p>
            <img alt="profilePic" src="#" />
          </div>
        </header>
        <section className={style.main_section}>
          
        </section>
      </main>
    </section>
  );
};

export default Topbar;
