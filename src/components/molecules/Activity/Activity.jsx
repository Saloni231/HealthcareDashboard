import PropTypes from "prop-types";
import { DailyProgress } from "../../molecules";
import classes from "./Activity.module.css";

const Activity = ({ activity, days }) => {
  return (
    <div className={classes.activity}>
      <div className={classes.header}>
        <div className={classes.heading}>Activity</div>
        <div className={classes.subHeading}>3 appointments on this week</div>
      </div>
      <DailyProgress activity={activity} />
      <div className={classes.days}>
        {days.map((day) => (
          <div className={classes.day}>{day}</div>
        ))}
      </div>
    </div>
  );
};

export default Activity;

Activity.propTypes = {
  activity: PropTypes.array,
  days: PropTypes.array,
};

Activity.defaultProps = {
  activity: [],
  days: [],
};
