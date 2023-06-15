import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";

import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';


export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { email, password, onInputChange, formState } = useForm({
        email: '',
        password: ''
    });

    //If the status changes then the new value will be retrieved.
    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(startLoginWithEmailPassword({ email, password }));
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    }

    return (

        <AuthLayout title="Sign in to TimeSee">
            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Work email</Typography>
                        <TextField
                            sx={{ mt: 1 }}
                            label="Email"
                            type="email"
                            placeholder="Enter your work email"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            required
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Password</Typography>
                        <TextField
                            sx={{ mt: 1 }}
                            label="Password"
                            type="password"
                            placeholder="Enter 8 or more characters"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            required
                        >
                        </TextField>
                    </Grid>

                    <Grid
                        container
                        display={!!errorMessage ? '' : 'none'}
                        sx={{ mt: 1 }}
                    >
                        <Grid
                            item xs={12}
                            sm={6}
                        >
                            <Alert severity="error">
                                {errorMessage}
                            </Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                type="submit"
                                variant="contained"
                                fullWidth>
                                Log in
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                variant="contained"
                                fullWidth
                                onClick={onGoogleSignIn}>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={RouterLink} color="inherit" to="/auth/register">
                            Don’t have an account?
                        </Link>

                    </Grid>

                </Grid>
            </form>
        </AuthLayout>

    )
}
