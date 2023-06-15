import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid item sx={{width: { md: 500, sm: 500}}}>
                <Typography variant='h3' sx={{ color: 'white', padding: 2 }}>TimeSee</Typography>
            </Grid>

            <Grid
                item
                className="box-shadow"
                xs={3}
                sx={{
                        width: { md: 500, sm: 500 }, 
                        backgroundColor: 'white',
                        padding: 3,
                        borderRadius: 2
                    }}
            >
                <Typography variant='h5' xs={12} sx={{ mb: 1 }}>{ title }</Typography>

                    { children }
            </Grid>
        </Grid>
    )
}
