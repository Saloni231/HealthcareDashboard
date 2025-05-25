import { DynamicIcon } from "lucide-react/dynamic";
import AppLogo from "./AppLogo/AppLogo";
import classes from "./SideNavbar.module.css";
import { menus, tools, setting } from "../../Data/SideNavMenu";
import NavItem from "./NavItem/NavItem";

const SideNavbar = () => {
  return (
    <div className={classes.SideNavbar}>
      <AppLogo logoClass={classes.logo} />
      <div className={classes.Category}>
        <p className={classes.subHeading}>General</p>
        {menus.map((menu) => (
          <NavItem key={menu.id} item={menu} />
        ))}
      </div>
      <div className={classes.Category}>
        <p className={classes.subHeading}>Tools</p>
        {tools.map((tool) => (
          <NavItem key={tool.id} item={tool} />
        ))}
      </div>
      <div className={classes.Settings}>
        <NavItem key={setting.id} item={setting} />
      </div>
    </div>
  );
};

export default SideNavbar;
