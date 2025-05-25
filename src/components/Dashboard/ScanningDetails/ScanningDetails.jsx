import classes from "./ScanningDetails.module.css";
import { ScanningDetailsData } from "../../../Data/ScanningDetails";
import ProgressBar from "../ProgressBar/ProgressBar";
import human from "../../../assets/Human.png";
import { ChevronDown } from "lucide-react";

const ScanningDetails = () => {
  return (
    <div className={classes.ScanningDetails}>
      <div className={classes.Header}>
        <div className={classes.Heading}>Dashboard</div>
        <div className={classes.dropdown}>
          This Week
          <ChevronDown size={20} />
        </div>
      </div>
      <div className={classes.Container}>
        <img src={human} alt="human" className={classes.ScanningImage} />
        <div className={classes.DetailsContainer}>
          {ScanningDetailsData.map((data) => (
            <div className={classes.Details}>
              <div className={classes.DetailName}>
                <img
                  src={data.image}
                  alt={data.name}
                  className={classes.DetailImage}
                />
                <div className={classes.ProcessName}>{data.name}</div>
              </div>
              <div className={classes.DetailDate}>Date: {data.date}</div>
              <ProgressBar progress={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScanningDetails;
