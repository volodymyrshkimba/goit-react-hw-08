import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { selectisLoggedIn } from "../../redux/auth/selectors";

import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return (
    <div>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
