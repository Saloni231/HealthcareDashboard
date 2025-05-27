import PropTypes from "prop-types";
import classes from "./ProgressBar.module.css";

const ProgressBar = ({ progress }) => {
  const dynamicProgess = {
    width: `${progress.success}%`,
    backgroundColor: progress.color,
  };

  return (
    <div className={classes.progressBar}>
      <div className={classes.filler} style={dynamicProgess}></div>
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  progress: PropTypes.object,
};

ProgressBar.defaultProps = {
  progress: {},
};
