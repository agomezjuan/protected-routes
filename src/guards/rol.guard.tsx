import { PrivateRoutes, Roles } from "@/models";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
    rol: Roles;
}

function roleGuard({ rol }: Props) {
    const useState = useSelector((store: AppStore) => store.user);
    return useState.rol === rol ? <Outlet/> : <Navigate replace to={PrivateRoutes.PRIVATE}/>
  return (
    <div>roleGuard</div>
  )
}
export default roleGuard