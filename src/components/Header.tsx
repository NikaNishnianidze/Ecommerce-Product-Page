import menuIcon from "../../public/assets/icon-menu.svg";
import logo from "../../public/assets/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="left">
        <img src={menuIcon} alt="menu icon" />
        <img src={logo} alt="sneakers logo  " />
      </div>
      <div className="right"></div>
    </header>
  );
}
