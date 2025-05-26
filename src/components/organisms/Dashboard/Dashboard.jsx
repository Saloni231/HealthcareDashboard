import { SearchBar, ScanningDetails, Activity } from "../../molecules";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <SearchBar />
      <ScanningDetails />
      <Activity />
    </div>
  );
};

export default Dashboard;
