import classes from "./SearchBar.module.css";
import { Bell, Search } from "lucide-react";

const SearchBar = ({ searchClass }) => {
  return (
    <div className={`${classes.SearchBar} ${searchClass}`}>
      <Search size={30} color="#0c0568" />
      <input className={classes.searchInput} placeholder="Search" />
      <Bell size={30} color="#0c0568" fill="#0c0568" className={classes.bell} />
    </div>
  );
};

export default SearchBar;
