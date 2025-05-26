import { AppointmentDetails, UserAction } from "../../molecules";
import classes from "./Appointment.module.css";

function Appointment() {
  return (
    <div className={classes.appointments}>
      <div className={classes.userAction}>
        <UserAction />
      </div>
      <AppointmentDetails />
    </div>
  );
}

export default Appointment;
