import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { AccountRoutes } from "../accounts/routes/AccountRoutes";
import { CheckingAuth } from "../ui/";
import { useCheckAuth } from "../hooks";


export const AppRouter = () => {

    const status = useCheckAuth();
    
    if (status === 'checking') {
        return <CheckingAuth />
    }

    return (
        <Routes>

            {
                status === 'authenticated'
                ? <Route path="/*" element={<AccountRoutes />} />
                : <Route path="/auth/*" element={<AuthRoutes />} />
            }

            <Route path="/*" element={<Navigate to="/auth/login"/>}/>


            {/* login y registro */}
            {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}

            {/* timesee App */}
            {/* <Route path="/*" element={<AccountRoutes />} /> */}
        </Routes>
    )
}
