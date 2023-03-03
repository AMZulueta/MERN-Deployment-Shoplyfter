import { Stack, TextField, Typography, Button, Box, Grid } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export const LoginPage = () => {
    // const { authorized, setAuthorized } = props;
    const [ state, setState ] = useState({
        registration: {
            firstName: "", 
            lastName: "", 
            email: "", 
            password: "", 
            confirmPassword: ""
        },
        login: {
            email: "", 
            password: ""
        }
    });

    const [regError, setRegError] = useState([]);
    // const [loginError, setLoginError] = useState("")

    // const {registration, login} = state;

    // const handleRegInputs = (e) => {
    //     setAuthorized("");
    //     setLoginError("");
    //     setState({...state, registration: {...state.registration, [e.target.name]: e.target.value}})
    // }

    // const handleRegistration = (e) => {
    //     e.preventDefault();
    //     setAuthorized("");
    //     setRegError([]);
    //     setLoginError("");
    //     axios.post(`http://localhost:8000/api/register`, registration, {withCredentials: true})
    //         .then((res) => console.log(res))
    //         .catch((err) => {
    //             console.log(err.response.data.err.errors);
    //             setRegError(err.response.data.err.errors);
    //         })
    // }

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     setAuthorized("");
    //     setLoginError("");
    //     axios.post(`http://localhost:8000/api/login`, login, {withCredentials: true})
    //         .then((res) => {
    //             console.log(res);
    //             navigate("/");
    //         })
    //         .catch((err) => {
    //             console.log(err.response.data.message);
    //             setLoginError(err.response.data.message);
    //         })
    // }

    return (
        <>
            <Grid container my={4} rowSpacing={2} columnSpacing={1}>
                <Grid item xs={12} sm={6} md={6}>
                    <Box bgcolor='primary.light' p={2}>
                    <Typography variant='h5' m={6}>Registration</Typography>
                        <Stack spacing={2} m={6}>
                            <Stack direction='row' spacing={2}>
                                <TextField label='First Name' 
                                size='small' 
                                error={!regError}
                                helperText='First Name is required'
                            />
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <TextField label='Last Name' 
                                size='small' 
                                required
                                error={!regError}
                                helperText='Last Name is required'
                            />
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <TextField label='Email' 
                                size='small' 
                                required
                                error={!regError}
                                helperText='Email is required'
                            />
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <TextField label='Password'
                                type='password'
                                size='small'
                                required 
                                value={regError} 
                                onChange={(e) => setRegError(e.target.value)}
                                error={!regError}
                                helperText={!regError ? 'Required': 'Password must be 8 characters or longer'}
                            />
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <TextField label='Confirm Password' 
                                type='password'
                                size='small'
                                required
                                value={regError}
                                onChange={(e) => setRegError(e.target.value)}
                                error={!regError}
                                helperText={!regError ? 'Confirm Password':'Password must match'}
                            />
                            </Stack>
                            <Stack spacing={2}>
                                <Stack direction='row'>
                                    <Button size='small' variant='contained'>
                                        Join
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box bgcolor='secondary.light' p={2}>
                    <Typography variant='h5' m={6}>Log In</Typography>
                        <Stack spacing={2} m={6}>
                            <Stack direction='row' spacing={2}>
                                <TextField label='Email' 
                                size='small' 
                                required
                                // error={!regError}
                                helperText='Email is required'
                                />
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <TextField label='Password'
                                type='password'
                                size='small'
                                required
                                />
                            </Stack>
                            <Stack spacing={2}>
                                <Stack direction='row'>
                                    <Button size='small' variant='contained'>
                                        Login
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>  
                </Grid>  
            </Grid>
        </>         
    );
};