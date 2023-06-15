import { Navigate, Route, Routes } from "react-router-dom"
import { AccountPage } from "../pages/AccountPage"
import { DollarStatistics } from "../views/DollarStatistics"

export const AccountRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<AccountPage/>}/>

        <Route path="/dollar-statistics" element={<AccountPage/>}/>

        <Route path="/*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}
