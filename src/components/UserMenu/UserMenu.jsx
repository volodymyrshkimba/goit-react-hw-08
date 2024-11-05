import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <p>username: {user.name}</p>
      <button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
