import { Link as RouterLink } from 'react-router-dom';
import { AccessTime, Dashboard, MonetizationOnOutlined } from "@mui/icons-material"
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import { Box, Button, Divider, Drawer, Grid, Toolbar, Typography, Link } from "@mui/material"
import { useSelector } from 'react-redux';

export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector(state => state.auth);
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent" //temporary
                open={true}
                sx={{
                    display: { xs: 'block' },
                    //Custom css classes
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant="h6" component="div">
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />

                <Grid sx={{ m: 2 }}>
                    <Grid
                        item
                    >
                        <Button
                            sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 2 }}
                        >
                            <Dashboard sx={{ mr: 1 }} />
                            <Typography sx={{ textTransform: 'capitalize' }}>Dashboard</Typography>
                        </Button>
                    </Grid>

                    <Grid item direction="row" justifyContent="space-between" alignItems="center">
                        <Button
                            sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 2 }}
                        >
                            <AccessTime sx={{ mr: 1 }} />
                            <Typography sx={{ textTransform: 'capitalize' }}>Timesheets</Typography>
                        </Button>
                    </Grid>

                    <Grid item direction="row" justifyContent="space-between" alignItems="center">
                        <Button
                            sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 2 }}
                        >
                            <StackedBarChartIcon sx={{ mr: 1 }} />
                            <Typography sx={{ textTransform: 'capitalize' }}>Reports</Typography>
                        </Button>
                    </Grid>

                    <Grid item direction="row" justifyContent="space-between" alignItems="center">

                        <Link component={RouterLink} color="inherit" to="/dollar-statistics" sx={{textDecoration: 'none'}}>
                            <Button
                                sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
                            >
                                <MonetizationOnOutlined sx={{ mr: 1 }} />
                                <Typography sx={{ textTransform: 'capitalize' }}>Dollar statistics</Typography>
                            </Button>
                        </Link>


                    </Grid>
                </Grid>





                {/* <List>
                    {
                        ['enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>

                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>

                                    <Grid container>
                                        <ListItemText primary={ text }/>
                                        <ListItemText secondary={ 'Tetxadkawpdjawdpjawpdjdwpajdpwajpdjwpdajwpdjwa' }/>
                                    </Grid>

                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List> */}

            </Drawer>

        </Box>
    )
}
