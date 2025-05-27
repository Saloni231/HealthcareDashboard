import PropTypes from "prop-types";
import { VerticalProgressBar } from "../../atoms";
import classes from "./DailyProgress.module.css";

const DailyProgress = ({ activity }) => {
  return (
    <div className={classes.dailyProgress}>
      {activity.map((item) => {
        const { firstBar, secondBar, thirdBar, fourthBar } = item;
        const firstBarComponent = Array.isArray(firstBar) ? (
          <div className={classes.firstDividedBar}>
            <VerticalProgressBar height={50} filler={firstBar[0]} />
            <VerticalProgressBar height={50} filler={firstBar[1]} />
          </div>
        ) : (
          <VerticalProgressBar height={100} filler={firstBar} />
        );
        return (
          <div className={classes.progress}>
            {firstBarComponent}
            <VerticalProgressBar height={50} filler={secondBar} />
            <div className={classes.dividedBar}>
              <VerticalProgressBar height={20} filler={thirdBar[0]} />
              <VerticalProgressBar height={20} filler={thirdBar[1]} />
            </div>
            <VerticalProgressBar
              height={30}
              marginTop={60}
              filler={fourthBar}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DailyProgress;

DailyProgress.propTypes = {
  activity: PropTypes.array,
};

DailyProgress.defaultProps = {
  activity: [],
};
