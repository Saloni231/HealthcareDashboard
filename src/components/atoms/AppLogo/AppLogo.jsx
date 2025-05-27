import PropTypes from "prop-types";
import classes from "./AppLogo.module.css";

const AppLogo = ({ logoClass }) => {
  return (
    <div className={logoClass}>
      <h2 className={classes.health}>Health</h2>
      <h2 className={classes.care}>care.</h2>
    </div>
  );
};

export default AppLogo;

AppLogo.propTypes = {
  logoClass: PropTypes.object,
};

AppLogo.defaultProps = {
  logoClass: {},
};
