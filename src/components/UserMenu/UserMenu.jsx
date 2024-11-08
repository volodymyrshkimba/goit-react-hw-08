import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { resetContacts } from "../../redux/contacts/slice";

import { RiLogoutBoxLine } from "react-icons/ri";

import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleClick = () => {
    dispatch(logout());
    dispatch(resetContacts());
  };
  return (
    <div className={css.wrapper}>
      <p className={css.welcome}>
        Welcome,{" "}
        <span className={css.name}>{user.name !== null && user.name}</span>
      </p>
      <button className={css.logoutBtn} onClick={handleClick} type="button">
        Logout <RiLogoutBoxLine size={18} className={css.logoutBtnIcon} />
      </button>
    </div>
  );
};

export default UserMenu;
