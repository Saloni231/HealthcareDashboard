import { ScanLine, ZoomIn } from "lucide-react";
import classes from "./Scanner.module.css";

const Scanner = () => {
  return (
    <>
      <div className={classes.heart}>❤️ Healthy Heart</div>
      <div className={classes.leg}>🦵🏻 Healthy Leg</div>
      <ZoomIn size={20} color="#8b8f93" className={classes.zoomIn} />
      <ScanLine size={60} color="#3534ad" className={classes.scannerHeart} />
      <ScanLine size={60} color="#3534ad" className={classes.scannerLeg} />
    </>
  );
};

export default Scanner;
