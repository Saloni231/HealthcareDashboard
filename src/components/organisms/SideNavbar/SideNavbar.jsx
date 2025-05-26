import { AppLogo } from "../../atoms";
import { NavItem } from "../../molecules";
import { menus, tools, setting } from "../../../Data";
import classes from "./SideNavbar.module.css";

const SideNavbar = () => {
  return (
    <div className={classes.sideNavbar}>
      <AppLogo logoClass={classes.logo} />
      <div className={classes.category}>
        <p className={classes.subHeading}>General</p>
        {menus.map((menu) => (
          <NavItem key={menu.id} item={menu} />
        ))}
      </div>
      <div className={classes.category}>
        <p className={classes.subHeading}>Tools</p>
        {tools.map((tool) => (
          <NavItem key={tool.id} item={tool} />
        ))}
      </div>
      <div className={classes.settings}>
        <NavItem key={setting.id} item={setting} />
      </div>
    </div>
  );
};

export default SideNavbar;
