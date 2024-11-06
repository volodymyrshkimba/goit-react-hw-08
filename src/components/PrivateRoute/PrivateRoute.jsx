import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectisLoggedIn } from "../../redux/auth/selectors";

const PrivateRoute = ({ component: Component, restrictedTo = "/" }) => {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return isLoggedIn ? Component : <Navigate to={restrictedTo} />;
};

export default PrivateRoute;
