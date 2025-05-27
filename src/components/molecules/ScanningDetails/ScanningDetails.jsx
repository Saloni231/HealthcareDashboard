import PropTypes from "prop-types";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ProgressBar, Scanner } from "../../atoms";
import { Human } from "../../../assets";
import classes from "./ScanningDetails.module.css";

const ScanningDetails = ({ ScanningDetailsData }) => {
  return (
    <div className={classes.scanningDetails}>
      <div className={classes.header}>
        <div className={classes.heading}>Dashboard</div>
        <div className={classes.dropdown}>
          This Week
          <ChevronDown size={20} />
        </div>
      </div>
      <div className={classes.container}>
        <Scanner />
        <img src={Human} alt="human" className={classes.scanningImage} />
        <div className={classes.detailsContainer}>
          {ScanningDetailsData.map((data) => (
            <div className={classes.details}>
              <div className={classes.detailName}>
                <img
                  src={data.image}
                  alt={data.name}
                  className={classes.detailImage}
                />
                <div className={classes.processName}>{data.name}</div>
              </div>
              <div className={classes.detailDate}>Date: {data.date}</div>
              <ProgressBar progress={data} />
            </div>
          ))}
          <div className={classes.detailsIcon}>
            Details
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanningDetails;

ScanningDetails.propTypes = {
  ScanningDetailsData: PropTypes.array,
};

ScanningDetails.defaultProps = {
  ScanningDetailsData: [],
};
