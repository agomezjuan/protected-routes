import { PrivateRoutes, PublicRoutes } from "@/models";
import { AppStore } from "@/redux/store"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

interface Props {
    privateValidation: boolean
}

const PrivateValidationFragment = <Outlet/>
const PubilicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE}/> 

// * el authGuard se ejecutara cada vez que se acceda a una ruta privada, comprobara si el store alamacena un user valido
export const AuthGuard = ({ privateValidation }: Props) => {
    const useState = useSelector((store: AppStore) => store.user);
    return useState.id ? 
    ( 
        privateValidation ? 
        PrivateValidationFragment
        : 
        PubilicValidationFragment
    ) 
    : 
    ( <Navigate replace to={PublicRoutes.LOGIN}/> )
}

export default AuthGuard;