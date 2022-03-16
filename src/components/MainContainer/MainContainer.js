import style from "./MainContainer.module.css";

const MainContainer = ({ children }) => {
  return (
    <main className={style.main_container}>
      <header className={style.head_container}>
        <h4>Projects - dashboard</h4>
        <div className={style.profile_div}>
          <p>Hi, Sunny</p>
          <img alt="profilePic" src="#" />
        </div>
      </header>
      <section className={style.main_section}>{children}</section>
    </main>
  );
};

export default MainContainer;
