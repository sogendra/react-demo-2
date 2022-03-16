import "./App.css";
import AppRouter from "./components/Router/Router";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="app">
      <Topbar />
      <AppRouter />
    </div>
  );
}

export default App;
