import { Form, Link as RLink, useActionData, useNavigate, useNavigation, redirect } from "react-router-dom";
import styles from "./Login.module.css";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert } from "@mui/material";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        fsd9@jain.university.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#007bff", 
    },
    secondary: {
      main: "#ff6f61", 
    },
  },
});

function Login() {
  const { state } = useNavigation();
  const navigate = useNavigate();
  const actionData = useActionData();

  useEffect(() => {
    if (actionData?.status === "success") {
      localStorage.setItem("userToken", actionData.data.token);
    }
  }, [actionData?.status, actionData?.data, navigate]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          height: '100vh',
          background: 'linear-gradient(to bottom, #007bff, #50a5e1)',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Form method="POST">
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h4" style={{ color: 'primary.main' }}>
                Welcome Back!
              </Typography>
              {actionData?.status === "error" && (
                <Alert severity="error" sx={{ width: '100%' }}>
                  {actionData?.data}
                </Alert>
              )}
              <Box component="form" sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="username"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: 'primary.main', color: 'white' }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/forgot-password" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Form>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const res = await axios.post("http://localhost:8080/api/v1/auth/login", data);
    return { status: "success", data: res.data };
  } catch (err) {
    return { status: "error", data: err?.response?.data?.message };
  }
}

export default Login;
