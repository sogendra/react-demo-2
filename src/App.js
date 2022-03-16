import style from "./App.module.css";
import MainContainer from "./components/MainContainer/MainContainer";
import AppRouter from "./components/Router/AppRouter";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className={style.app}>
      <section className={style.sec_container}>
        <Sidebar />
        <MainContainer>
          <AppRouter />
        </MainContainer>
      </section>
    </div>
  );
}

export default App;
