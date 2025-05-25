import classes from "./IconPallet.module.css";

const IconPallet = ({ children, bg }) => {
  return (
    <div
      className={`${classes.IconPallet} ${bg ? classes.cyan : classes.purple}`}
    >
      {children}
    </div>
  );
};

export default IconPallet;
