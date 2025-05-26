import { Plus } from "lucide-react";
import { IconPallet } from "../../atoms";
import { user } from "../../../assets";
import classes from "./UserAction.module.css";

function UserAction() {
  return (
    <div className={classes.userAction}>
      <IconPallet bg={true}>
        <img src={user} alt="user" className={classes.userimg} />
      </IconPallet>
      <IconPallet>
        <Plus color="#ebeef1" size={50} />
      </IconPallet>
    </div>
  );
}

export default UserAction;
