import classes from "./VerticalProgressBar.module.css";

const VerticalProgressBar = ({ height, filler, marginTop }) => {
  const dynamicHeight = {
    height: `${height}px`,
    marginTop: `${marginTop}px`,
  };

  const fillingColor = {
    backgroundColor: filler,
  };
  return (
    <div className={classes.verticalprogressBar} style={dynamicHeight}>
      <div className={classes.filler} style={fillingColor} />
    </div>
  );
};

export default VerticalProgressBar;
