import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { UserLogIn } from '../../ts/accounts';
import { RootState, useAppDispatch } from '@/redux/store';
import { LoginUser } from '../../redux/slice/accounts/SignInSlice';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const isLogIn = useSelector(
    (state: RootState) => state.loginAccount.isLoggedIn
  );

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const SigninSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid Email')
      .required('Email Address Required!!'),
    password: Yup.string()
      .min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol'),
  });

  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Formik
            initialValues={{
              isLoggedIn: false,
              email: '',
              password: '',
            }}
            validationSchema={SigninSchema}
            onSubmit={(
              values: UserLogIn,
              { setSubmitting }: FormikHelpers<UserLogIn>
            ) => {
              setTimeout(() => {
                dispatch(LoginUser(values));
                setSubmitting(false);
                console.log(values);
                console.log('Status', isLogIn);
              }, 500);
            }}
          >
            {({ errors, touched, handleBlur, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/account/ResetPassword">
                      <Typography
                        variant="body2"
                        sx={{
                          textDecoration: 'underline',
                          color: 'blue',
                        }}
                      >
                        Forgot password?
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/account/Register">
                      <Typography
                        variant="body2"
                        sx={{
                          textDecoration: 'underline',
                          color: 'blue',
                        }}
                      >
                        Don't have an account? Sign Up
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
