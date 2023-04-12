import { Box, Paper, Stack, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import NavBar from './NavBar';
import ResponsiveNavBar from './ResponsiveNavBar';
import SecondRowNav from './SecondRowNav';

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
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Typography
            variant="body2"
            style={{
              backgroundColor: 'black',
              color: 'white',
              textAlign: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            Free Shipping on all orders over ₱500.00! For a limited time only.
          </Typography>
          <Item>
            <SecondRowNav />
          </Item>
          <Item>
            {(isMediumScreen || isLargeScreen) && <NavBar />}
            {isSmallScreen && <ResponsiveNavBar />}
          </Item>
        </Stack>
      </Box>
    </>
  );
};

export default NavigationPage;
