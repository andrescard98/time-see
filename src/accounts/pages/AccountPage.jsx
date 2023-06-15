/* import { Typography } from "@mui/material"; */
import { AccountsLayout } from "../layout/AccountsLayout";
import { NothingSelectedView } from "../views";
import { DollarStatistics } from "../views/DollarStatistics";


export const AccountPage = () => {
  return (
    <AccountsLayout>
      {/* <Typography variant="h1">AccountPage</Typography> */}
      <NothingSelectedView/>
      {/* <DollarStatistics/>  */}
    </AccountsLayout>

  )
}
