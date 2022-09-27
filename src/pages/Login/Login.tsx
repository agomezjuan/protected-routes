import { PrivateRoutes, PublicRoutes, Roles } from "@/models";
import { createUser, resetUser, userKey } from "@/redux/slices/user.slice";
import { getDataUser } from "@/services"
import { clearLocalStorage } from "@/utilities";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    clearLocalStorage(userKey);
    dispatch(resetUser());
    navigate(`/${ PublicRoutes.LOGIN }`, { replace: true });
  }, [])

  const login = async () => {
    try {
      const result = await getDataUser();
      dispatch(createUser({ ...result.data.user, rol: Roles.USER }));
      navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true})
    } catch (error) {
      throw new Error('error al iniciar sesion')
    }
  }
  return (
    <div>
      <h2>Hola Este Es El Login</h2>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login