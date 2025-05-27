import {
  Header,
  ScanningDetails,
  AppointmentDetails,
  Activity,
} from "./components/molecules";
import { Dashboard, Appointment, SideNavbar } from "./components/organisms";
import { ScanningDetailsData, activity, days } from "./Data";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <SideNavbar />
      <div className={classes.mobileVisible}>
        <Header />
        <ScanningDetails ScanningDetailsData={ScanningDetailsData} />
        <Activity activity={activity} days={days} />
        <AppointmentDetails />
      </div>
      <div className={classes.desktopVisible}>
        <Dashboard />
        <Appointment />
      </div>
    </div>
  );
}

export default App;
