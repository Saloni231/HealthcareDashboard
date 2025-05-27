import { Circle } from "lucide-react";
import PropTypes from "prop-types";
import classes from "./Calender.module.css";

function Calendar({ item }) {
  const handleHighlight = (index) => {
    const baseStyle = {
      borderRadius: "10px",
      color: "white",
    };

    if (index === 1) {
      if (item.day === "Tue") {
        return {
          ...baseStyle,
          backgroundColor: "#0c0568",
        };
      } else if (item.day === "Thurs") {
        return {
          ...baseStyle,
          backgroundColor: "#acafd5",
        };
      }
    }

    if (index === 0 && item.day === "Sat") {
      return {
        backgroundColor: "#acafd5",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        color: "white",
        paddingRight: "0px",
        marginRight: "0px",
      };
    }

    if (index === 0 && item.day === "Sun") {
      return {
        backgroundColor: "#acafd5",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        color: "white",
        paddingLeft: "0px",
        marginLeft: "0px",
      };
    }

    return undefined;
  };

  const handleSpacing = () => {
    if (item.day === "Sat" || item.day === "Sun") {
      return {
        margin: "0px",
        padding: "0px",
      };
    }
  };
  return (
    <div className={classes.dayBox} style={handleSpacing()}>
      <div className={classes.day}>{item?.day}</div>
      <div className={classes.date}>{item?.date}</div>
      <div className={classes.times}>
        {item?.times.map((time, index) => {
          return (
            <div
              key={index}
              className={classes.time}
              style={handleHighlight(index)}
            >
              &nbsp; {time}
              {item?.upcoming &&
                ((index === 0 && (item.day === "Sun" || item.day === "Sat")) ||
                  (index === 1 && item?.day === "Thurs")) && 
                  <div>
                    <Circle size={4} color="white" fill="white" className={classes.circle}/>
                  </div>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;

Calendar.propTypes = {
  item: PropTypes.array,
};

Calendar.defaultProps = {
  item: [],
};