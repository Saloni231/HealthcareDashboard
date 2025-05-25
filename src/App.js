import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <SideNavbar />
      <Header Headerclass={classes.mobileVisible} />
      <Dashboard dashboardClass={classes.desktopVisible} />
    </div>
  );
}

export default App;
