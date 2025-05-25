import { SearchBar } from "../Header";
import classes from "./Dashboard.module.css";

const Dashboard = ({ dashboardClass }) => {
  return (
    <div className={`${classes.Dashboard} ${dashboardClass}`}>
      <SearchBar />
    </div>
  );
};

export default Dashboard;
