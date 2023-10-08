import { NavLink } from "react-router-dom";
import "../component/nav.css";
import { FaBars, FaTimes, PiSunLight } from "react-icons/fa";
import SunLight from "../images/sunlight.png";
import Moon from "../images/darkThemeIcon.png";
import { useState } from "react";
function Nav(props) {
  const [icon, setIcon] = useState(false);
  const [isdarkTheme, setIsDarkTheme] = useState(false);

  const menuClick = () => {
    setIcon(!icon);
  };
  const closeSideDrawer = () => {
    setIcon(false);
  };
  const changeTheme = () => {
    document.body.classList.toggle("dark-theme");
    setIsDarkTheme(!isdarkTheme);
  };

  return (
    <div>
      <nav className="nav">
        <div className="nav--logo" onClick={closeSideDrawer}>
          <NavLink
            to="/"
            className="nav--logo__img"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span className="developer-name">David</span>
          </NavLink>
          <span onClick={changeTheme}>
            {isdarkTheme ? (
              <img src={SunLight} className="sun-light" />
            ) : (
              <img src={Moon}  className="moon"/>
            )}
          </span>
        </div>
        <div className={icon ? "nav--menus show" : "nav--menus"}>
          <ul className="nav--menus--ul">
            <li className="nav--menus--ul__li">
              <NavLink
                to="/"
                onClick={closeSideDrawer}
                className={(navData) => (navData.isActive ? "green" : "black")}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav--menus--ul__li">
              <NavLink
                to="/about"
                onClick={closeSideDrawer}
                className={(navData) => (navData.isActive ? "green" : "black")}
              >
                ABOUT
              </NavLink>
            </li>

            <li className="nav--menus--ul__li">
              <NavLink
                to="/skills"
                onClick={closeSideDrawer}
                className={(navData) => (navData.isActive ? "green" : "black")}
              >
                SKILLS
              </NavLink>
            </li>
            <li className="nav--menus--ul__li">
              <NavLink
                to="/publishes"
                onClick={closeSideDrawer}
                className={(navData) => (navData.isActive ? "green" : "black")}
              >
                PUBLISHES
              </NavLink>
            </li>
            <li className="nav--menus--ul__li contact">
              <NavLink
                to="/contact"
                onClick={closeSideDrawer}
                className={(navData) => (navData.isActive ? "green" : "black")}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-icons" onClick={menuClick}>
          {icon ? (
            <FaTimes className={`fa-times ${isdarkTheme ? 'white-TimesIcon' : ''}`}></FaTimes>
          ) : (
            <FaBars  className={`fa-bars ${isdarkTheme ? 'white-BarIcon' : ''}`}></FaBars>
          )}
        </div>
      </nav>
    </div>
  );
}
export default Nav;
