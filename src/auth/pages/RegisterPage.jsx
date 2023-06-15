import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link as RouterLink } from 'react-router-dom';

import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [(value) => value.includes('@'), 'The email must have an @'],
    password: [(value) => value.length >= 6, 'The password must be 6 characters'],
    displayName: [(value) => value.length >= 6, 'The name must be 6 characters'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector(state => state.auth);

    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

    const {
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm(formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return;

        dispatch(startCreatingUserWithEmailPassword(formState));
    }

    return (
        <AuthLayout title="Create an Account on TimeSee">
            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Full name</Typography>
                        <TextField
                            sx={{ mt: 1 }}
                            label="Full name"
                            type="text"
                            placeholder="Enter your full name"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        >
                        </TextField>
                    </Grid>

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
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
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
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        >
                        </TextField>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid
                            item xs={12}
                            sm={6}
                            display={ !!errorMessage ? '' : 'none' }
                        >
                            <Alert severity="error">
                                { errorMessage }
                            </Alert>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <Button
                                disabled={isCheckingAuthentication}
                                type="submit"
                                variant="contained"
                                fullWidth
                            >
                                Create my account
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={{ mr: 1 }}>¿Already have an account?</Typography>
                        <Link component={RouterLink} color="inherit" to="/auth/login">
                            Log In
                        </Link>

                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    )
}
