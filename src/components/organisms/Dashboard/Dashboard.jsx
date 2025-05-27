import { SearchBar, ScanningDetails, Activity } from "../../molecules";
import { ScanningDetailsData, activity, days } from "../../../Data";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <SearchBar />
      <ScanningDetails ScanningDetailsData={ScanningDetailsData} />
      <Activity activity={activity} days={days} />
    </div>
  );
};

export default Dashboard;
