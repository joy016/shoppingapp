import { useMediaQuery } from '@mui/material';
import NavBar from './NavBar';
import ResponsiveNavBar from './ResponsiveNavBar';

const NavigationPage: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery(
    '(min-width: 601px) and (max-width: 960px)'
  );
  const isLargeScreen = useMediaQuery('(min-width:961px)');

  return (
    <>
      {(isMediumScreen || isLargeScreen) && <NavBar />}
      {isSmallScreen && <ResponsiveNavBar />}
    </>
  );
};

export default NavigationPage;
