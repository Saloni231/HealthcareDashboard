import Classes from "./Header.module.css";
import SearchBar from "./SearchBar/SearchBar";
import UserAction from "./UserAction/UserAction";

function Header() {
  return (
    <div className={Classes.Header}>
      <SearchBar />
      <UserAction />
    </div>
  );
}

export default Header;
