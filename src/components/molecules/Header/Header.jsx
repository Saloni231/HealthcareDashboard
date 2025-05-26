import { SearchBar, UserAction } from "../../molecules";
import Classes from "./Header.module.css";

function Header() {
  return (
    <div className={Classes.header}>
      <SearchBar />
      <UserAction />
    </div>
  );
}

export default Header;
