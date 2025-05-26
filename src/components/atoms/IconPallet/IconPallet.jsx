import classes from "./IconPallet.module.css";

const IconPallet = ({ children, bg }) => {
  return (
    <div
      className={`${classes.iconPallet} ${bg ? classes.cyan : classes.purple}`}
    >
      {children}
    </div>
  );
};

export default IconPallet;
