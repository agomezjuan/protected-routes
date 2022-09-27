import { PublicRoutes } from "@/models"
import { resetUser, userKey } from "@/redux/slices/user.slice"
import { clearLocalStorage } from "@/utilities"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const logOut = () => {
    clearLocalStorage(userKey);
    dispatch(resetUser());
    navigate(`/${ PublicRoutes.LOGIN }`, { replace: true });
  }
  return (
    <button onClick={logOut}>Logout</button>
  )
}
export default Logout;