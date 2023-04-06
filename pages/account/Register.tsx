import { User } from '@/ts/accounts';
import React, { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { insertNewUser } from '../../redux/slice/accounts/AccountSlice';
import { Field, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { Alert, AlertTitle, Snackbar } from '@mui/material';

const theme = createTheme();

interface MyAlertProps {
  statusMessage: string;
  severity: 'success' | 'error';
  alertTitle: string;
}

const Register: React.FC<MyAlertProps> = (props) => {
  const dispatch = useAppDispatch();
  const status = useSelector((state: RootState) => state.account.status);
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [statusMessage, setStatusMessage] = useState(props.statusMessage);
  const [severity, setSeverity] = useState(props.severity);
  const [alertTitle, setAlertTitle] = useState(props.alertTitle);

  useEffect(() => {
    if (status === 'success') {
      setStatusMessage('Account registration Successfully');
      setSeverity('success');
      setAlertTitle('Success');
    } else if (status === 'failure') {
      setStatusMessage('Email already exist in our database!');
      setSeverity('error');
      setAlertTitle('error');
    } else {
      return;
    }

    if (status) {
      setAlertVisibility(true);
      const timeoutId = setTimeout(() => {
        setAlertVisibility(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [status, props.statusMessage]);

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    password: Yup.string()
      .min(5, 'Too Short!')
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
        onSubmit={(
          values: User,
          { setSubmitting, resetForm }: FormikHelpers<User>
        ) => {
          setTimeout(() => {
            dispatch(insertNewUser(values));
            setSubmitting(false);
            resetForm();
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
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
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
                      <Link href="/account/Login">
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
        <Snackbar open={alertVisibility} autoHideDuration={2000}>
          <Alert severity={severity}>
            <AlertTitle>{alertTitle}</AlertTitle>
            <strong>{statusMessage}</strong>
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Register;
