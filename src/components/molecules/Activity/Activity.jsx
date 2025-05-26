import { DailyProgress } from "../../molecules";
import { days } from "../../../Data";
import classes from "./Activity.module.css";

const Activity = () => {
  return (
    <div className={classes.activity}>
      <div className={classes.header}>
        <div className={classes.heading}>Activity</div>
        <div className={classes.subHeading}>3 appointments on this week</div>
      </div>
      <DailyProgress />
      <div className={classes.days}>
        {days.map((day) => (
          <div className={classes.day}>{day}</div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
