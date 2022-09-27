import { PrivateRoutes } from "@/models"
import RoutesWithNotFound from "@/utilities/routesWithNotFound.utility"
import { Suspense, lazy } from "react"
import { Navigate, Route } from "react-router-dom"


const Dashboard = lazy(() => import("./dashboard/Dashboard"))
const Home = lazy(() => import("./home/Home"))

function Private() {
    return (
        <Suspense fallback={<>...loading</>}>
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                <Route path={PrivateRoutes.HOME} element={<Home />} />
            </RoutesWithNotFound>
        </Suspense>
    )
}
export default Private