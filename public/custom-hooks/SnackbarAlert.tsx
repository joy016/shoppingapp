import { Alert, AlertColor, AlertTitle, Snackbar } from '@mui/material';
import { useState } from 'react';

export enum AlertColors {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  SUCCESS = 'success',
}

interface MyAlertProps {
  statusMessage: string;
  severity: AlertColor | undefined;
  alertTitle: string;
  alertVisibility: boolean;
}

const SnackbarAlert: React.FC<MyAlertProps> = ({
  statusMessage,
  severity,
  alertTitle,
  alertVisibility,
}) => {
  return (
    <>
      <Snackbar open={alertVisibility} autoHideDuration={2000}>
        <Alert severity={severity}>
          <AlertTitle>{alertTitle}</AlertTitle>
          <strong>{statusMessage}</strong>
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackbarAlert;
