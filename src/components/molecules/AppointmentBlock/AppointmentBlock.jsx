import PropTypes from "prop-types";
import classes from "./AppointmentBlock.module.css";

function AppointmentBlock({ item }) {
  return (
    <div
      className={`${classes.details} ${
        item?.title !== "Dentist" ? classes.highlight : ""
      }`}
    >
      <div className={classes.header}>
        <div className={classes.title}>{item.title}</div>
        <div className={classes.icon}>
          <div>{item.icon}</div>
        </div>
      </div>
      <div className={classes.time}>{item.time}</div>
      {item?.doctor && <div className={classes.doctor}>{item.doctor}</div>}
    </div>
  );
}

export default AppointmentBlock;

AppointmentBlock.propTypes = {
  item: PropTypes.object,
};

AppointmentBlock.defaultProps = {
  item: {},
};
