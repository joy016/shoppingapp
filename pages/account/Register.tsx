import { User } from '@/ts/accounts';
import React, { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { insertNewUser } from '../../redux/slice/accounts/AccountSlice';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, makeStyles } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { Alert, AlertTitle, Fade } from '@mui/material';

const theme = createTheme();

const Register: React.FC = (props: any) => {
  const dispatch = useAppDispatch();
  const error = useSelector((state: RootState) => state.account.error);
  const [alertVisibility, setAlertVisibility] = useState(false);

  useEffect(() => {
    if (error) {
      setAlertVisibility(true);
      const timeoutId = setTimeout(() => {
        setAlertVisibility(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values: User, { setSubmitting }: FormikHelpers<User>) => {
          setTimeout(() => {
            dispatch(insertNewUser(values));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ errors, touched, handleBlur, handleChange, handleSubmit }) => (
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
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
                <Typography component="h1" variant="h5" mb={2}>
                  Sign up
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        error={touched.firstName && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        type="email"
                        name="email"
                        autoComplete="email"
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        type="password"
                        name="password"
                        label="Password"
                        id="password"
                        autoComplete="new-password"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/account/Login" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Container>
          </ThemeProvider>
        )}
      </Formik>
      {alertVisibility && (
        <Fade in={alertVisibility} timeout={1000}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert —{' '}
            <strong>Email already exist in our database!</strong>
          </Alert>
        </Fade>
      )}
    </>
  );
};

export default Register;
