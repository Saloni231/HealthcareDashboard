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
