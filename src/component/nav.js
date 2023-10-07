import { NavLink } from "react-router-dom";
import "../component/nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import tree from "../images/logo-tree.jpg";
import { useState } from "react";
function Nav(params) {
  const [icon, setIcon] = useState(false);

  const menuClick = () => {
    setIcon(!icon);
  };
  const closeSideDrawer = () => {
    setIcon(false);
  };

  return (
    <div>
      <nav className="nav">
        <div className="nav--logo" onClick={closeSideDrawer} >
          <NavLink to="/" className="nav--logo__img" style={{textDecoration:"none",color:'black'}}>
            <h2 className="developer-name">David</h2>
          </NavLink>
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
            <FaTimes className="fa-times"></FaTimes>
          ) : (
            <FaBars className="fa-bars"></FaBars>
          )}
        </div>
      </nav>
    </div>
  );
}
export default Nav;
