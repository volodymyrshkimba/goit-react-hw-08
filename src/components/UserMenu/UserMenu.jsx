import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { resetContacts } from "../../redux/contacts/slice";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleClick = () => {
    dispatch(logout());
    dispatch(resetContacts());
  };
  return (
    <div>
      <p>username: {user.name !== null && user.name}</p>
      <button onClick={handleClick} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
