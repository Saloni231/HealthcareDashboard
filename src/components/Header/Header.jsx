import Classes from "./Header.module.css";
import SearchBar from "./SearchBar/SearchBar";
import UserAction from "./UserAction/UserAction";

function Header({ Headerclass }) {
  return (
    <div className={`${Classes.Header} ${Headerclass}`}>
      <SearchBar searchClass={Classes.searchClass} />
      <UserAction userClass={Classes.userClass} />
    </div>
  );
}

export default Header;
