import "./Header.scss";
import Logo from "../../assets/logo/logo.png";
// import {link}
export default function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="quickmeal logo" className="header__logo" />
    </header>
  );
}
