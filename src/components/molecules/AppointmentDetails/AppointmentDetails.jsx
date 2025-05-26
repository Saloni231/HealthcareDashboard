import { DynamicIcon } from "lucide-react/dynamic";
import {
  appointmentsSaturday,
  appointmentsThursday,
  appointmentsToday,
  calendarArrows,
  daysData,
} from "../../../Data";
import { AppointmentBlock, Calendar } from "../../molecules";
import classes from "./AppointmentDetails.module.css";

function AppointmentDetails() {
  return (
    <div className={classes.appointmentDetails}>
      <div className={classes?.calendarHeader}>
        <div className={classes?.calendarTitle}>October 2021</div>
        <div>
          {calendarArrows.map((item) => {
            return (
              <DynamicIcon
                key={item?.icon}
                name={item?.icon}
                // color={item?.selected ? "#0c0568" : "#98999b"}
                size={20}
                fill="#0c0568"
              />
            );
          })}
        </div>
      </div>
      <div className={classes.days}>
        {daysData.map((item) => {
          return <Calendar item={item} />;
        })}
      </div>
      <div className={classes.boxdetails}>
        {appointmentsToday.map((item) => {
          return <AppointmentBlock item={item} />;
        })}
      </div>
      <div className={classes.schedule}>The Upcoming Schedule</div>
      <div>
        <div className={classes.headers}>On Thursday</div>
      </div>
      <div className={classes.boxdetails}>
        {appointmentsThursday.map((item) => {
          return <AppointmentBlock item={item} />;
        })}
      </div>
      <div>
        <div className={classes.headers}>On Saturday</div>
      </div>
      <div className={classes.boxdetails}>
        {appointmentsSaturday.map((item) => {
          return <AppointmentBlock item={item} />;
        })}
      </div>
    </div>
  );
}

export default AppointmentDetails;
