import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {
  AlertColor,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ErrorMessage, Field, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useSelector } from 'react-redux';
import {
  resetPassword,
  resetStatus,
} from '@/redux/slice/accounts/ResetPasswordSlice';
import { resetLogin } from '@/ts/accounts';
import { useAppDispatch, RootState } from '@/redux/store';
import SnackbarAlert, {
  AlertColors,
} from '@/public/custom-hooks/SnackbarAlert';
import router from 'next/router';

const ResetPassword: React.FC = () => {
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setshowConfirmPassword] =
    useState<boolean>(false);
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [severity, setSeverity] = useState<AlertColors | undefined>();
  const [alertTitle, setAlertTitle] = useState('');
  const status = useSelector((state: RootState) => state.resetPassword.status);

  useEffect(() => {
    if (status === 'success') {
      setStatusMessage('PasswordReset Successfully');
      setSeverity(AlertColors.SUCCESS);
      setAlertTitle('Success');
      setAlertVisibility(true);

      const timeoutId = setTimeout(() => {
        setAlertVisibility(false);
        router.push('/account/Login');
        dispatch(resetStatus());
      }, 2000);

      return () => clearTimeout(timeoutId);
    } else if (status === 'failure') {
      setStatusMessage('Having trouble resetting password, try again!');
      setSeverity(AlertColors.ERROR);
      setAlertTitle('error');
      setAlertVisibility(true);
    } else {
      return;
    }

    const timeoutId = setTimeout(() => {
      setAlertVisibility(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [status, statusMessage]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowConfirmPassword = () =>
    setshowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const PasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid Email')
      .required('Email Address Required!!'),
    password: Yup.string()
      .min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol')
      .required('Password Required!!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Password Required!!'),
  });

  return (
    <Box
      sx={{
        width: 600,
        height: 450,
        margin: 'auto',
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Paper
        sx={{
          height: 450,
          textAlign: 'center',
          paddingBottom: '16px',
        }}
        elevation={3}
      >
        <Stack
          sx={{
            padding: 10,
          }}
          spacing={3}
        >
          <Typography variant="subtitle1">Reset Password</Typography>
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={PasswordSchema}
            onSubmit={(
              values: resetLogin,
              { setSubmitting }: FormikHelpers<resetLogin>
            ) => {
              setTimeout(() => {
                dispatch(resetPassword(values));
                setSubmitting(false);
                console.log(values);
              }, 500);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  as={TextField}
                  margin="normal"
                  name="email"
                  id="email"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  label="Input your email address"
                  fullWidth
                  required
                  onChange={handleChange}
                  type={'text'}
                />
                <Field
                  as={TextField}
                  margin="normal"
                  name="password"
                  id="password"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  label="Input new Password"
                  fullWidth
                  required
                  onChange={handleChange}
                  type={showPassword ? 'text' : 'password'}
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
                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Input Confirm Password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  error={
                    touched.confirmPassword && Boolean(errors.confirmPassword)
                  }
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="flex-end"
                  spacing={2}
                >
                  <Link href="/account/Login">
                    <Button
                      variant="outlined"
                      startIcon={<KeyboardBackspaceIcon />}
                    >
                      Back
                    </Button>
                  </Link>
                  <Button type="submit" variant="contained">
                    Reset Password
                  </Button>
                </Stack>
              </form>
            )}
          </Formik>
          {alertVisibility && (
            <SnackbarAlert
              statusMessage={statusMessage}
              severity={severity}
              alertTitle={alertTitle}
              alertVisibility={alertVisibility}
            />
          )}
        </Stack>
      </Paper>
    </Box>
  );
};

export default ResetPassword;
