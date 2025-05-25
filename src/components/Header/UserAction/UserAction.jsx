import classes from "./UserAction.module.css";
import IconPallet from "../IconPallet/IconPallet";
import { Plus } from "lucide-react";
import { user } from "../../../assets";

function UserAction({ userClass }) {
  return (
    <div className={`${classes.UserAction} ${userClass}`}>
      <IconPallet bg={true}>
        <img src={user} alt="user" className={classes.userimg} />
      </IconPallet>
      <IconPallet>
        <Plus color="#ebeef1" size={40} />
      </IconPallet>
    </div>
  );
}

export default UserAction;
