import { Box, Paper, Stack, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import NavBar from './NavBar';
import ResponsiveNavBar from './ResponsiveNavBar';
import SecondRowNav from './SecondRowNav';
import { background } from '@chakra-ui/react';

const NavigationPage: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery(
    '(min-width: 601px) and (max-width: 960px)'
  );
  const isLargeScreen = useMediaQuery('(min-width:961px)');

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Paper elevation={1}>
          <Box
            sx={{
              height: '50px',
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <Typography
              variant="subtitle1"
              style={{
                color: 'white',
              }}
            >
              Free Shipping on all orders over ₱500.00! For a limited time only.
            </Typography>
          </Box>

          <Box sx={{ padding: '15px 2%' }}>
            <SecondRowNav />
          </Box>
          <Box>
            <NavBar />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default NavigationPage;
