/* eslint-disable react/prop-types */

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/material';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" >
                MishraTech
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login({ loginfun }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />

                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{

                        backgroundImage:
                            'url("/img/login.jpg")',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'left',
                        filter: '  drop-shadow(2px 1px  2px black)', // Apply blur and drop-shadow
                    }}
                />
                <Grid item xs={12} sm={8} md={5}
                    style={{
                        backgroundColor: '#D9AFD9', // Fallback color
                        backgroundImage: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
                    }}
                >
                    <Box
                        sx={{
                            my: 12,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ p: 6, bgcolor: '#38C3EC' }}>
                            {/* <LockOutlinedIcon sx={{ fontSize: 30 }} /> */}
                            <img src="img/login.svg" alt="" width={100} />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>


                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => loginfun()}
                            >
                                Sign In
                            </Button>
                            <Grid container>

                                <Stack direction={'row'} spacing={3}>
                                    <Grid item xs>

                                        <Box
                                            onClick={() => loginfun()}
                                            sx={{
                                                fontWeight: 500,
                                                fontSize:"10px",



                                                color: 'white',
                                                cursor: 'pointer',
                                                textDecoration: 'underline',
                                                margin: '5px',
                                                '&:hover': {
                                                    color: 'blue', // Color changes to blue on hover
                                                },
                                            }}
                                        >

                                            Forgot password?





                                        </Box>

                                    </Grid>
                                    <Grid item>

                                        <Box
                                            onClick={() => loginfun()}
                                            sx={{

                                                fontSize: "10px",
                                                color: 'white',
                                                cursor: 'pointer',
                                                textDecoration: 'underline',
                                                margin: '5px',
                                                '&:hover': {
                                                    color: 'blue', // Color changes to blue on hover
                                                },
                                            }}
                                        >
                                            Don't have an account? Sign Up


                                        </Box>

                                    </Grid>
                                </Stack>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}