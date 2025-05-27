import PropTypes from "prop-types";
import { DynamicIcon } from "lucide-react/dynamic";
import classes from "./NavItem.module.css";

const NavItem = ({ item }) => {
  return (
    <div className={classes.navItem}>
      <DynamicIcon
        name={item.icon}
        color={item.selected ? "#0c0568" : "#98999b"}
        size={20}
      />
      <p
        className={`${classes.title} ${item.selected ? classes.selected : ""}`}
      >
        {item.title}
      </p>
    </div>
  );
};

export default NavItem;

NavItem.propTypes = {
  item: PropTypes.object,
};

NavItem.defaultProps = {
  item: {},
};
