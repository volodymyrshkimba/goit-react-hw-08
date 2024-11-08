import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { selectisLoggedIn } from "../../redux/auth/selectors";

import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  const buildClasses = ({ isActive }) => {
    return clsx(css.link, isActive === true && css.active);
  };

  return (
    <div>
      <NavLink className={buildClasses} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildClasses} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
