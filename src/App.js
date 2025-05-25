import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import classes from "./App.module.css";
import ScanningDetails from "./components/Dashboard/ScanningDetails/ScanningDetails";

function App() {
  return (
    <div className={classes.App}>
      <SideNavbar />
      <div className={classes.mobileVisible}>
        <Header />
        <ScanningDetails />
      </div>
      <div className={classes.desktopVisible}>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
