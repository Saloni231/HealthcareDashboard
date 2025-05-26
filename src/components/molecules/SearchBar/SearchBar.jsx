import classes from "./SearchBar.module.css";
import { Bell, Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className={classes.searchBar}>
      <Search size={20} color="#0c0568" />
      <input className={classes.searchInput} placeholder="Search" />
      <Bell size={20} color="#0c0568" fill="#0c0568" className={classes.bell} />
    </div>
  );
};

export default SearchBar;
