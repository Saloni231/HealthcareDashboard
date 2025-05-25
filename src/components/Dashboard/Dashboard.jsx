import { SearchBar } from "../Header";
import classes from "./Dashboard.module.css";
import ScanningDetails from "./ScanningDetails/ScanningDetails";

const Dashboard = () => {
  return (
    <div className={classes.Dashboard}>
      <SearchBar />
      <ScanningDetails />
    </div>
  );
};

export default Dashboard;
