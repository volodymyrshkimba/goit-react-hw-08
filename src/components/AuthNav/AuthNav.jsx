import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./AuthNav.module.css";

const AuthNav = () => {
  const buildClasses = ({ isActive }) => {
    return clsx(css.link, isActive === true && css.active);
  };

  return (
    <div>
      <NavLink className={buildClasses} to="/register">
        Register
      </NavLink>
      <NavLink className={buildClasses} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
