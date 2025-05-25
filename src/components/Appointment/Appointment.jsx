import classes from "./Appointment.module.css";
import { UserAction } from "../Header";

const Appointment = () => {
  return (
    <div className={classes.Appointment}>
      <div className={classes.UserAction}>
        <UserAction />
      </div>
    </div>
  );
};

export default Appointment;
