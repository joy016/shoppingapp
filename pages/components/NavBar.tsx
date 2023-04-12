import Link from 'next/link';
import { HiShoppingCart } from 'react-icons/hi';
import { Box, Tab, Tabs } from '@mui/material';
import Profile from '../account/Profile';

const NavBar: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs centered>
        <Link href="/account/Register">
          <Tab label="Shop" />
        </Link>
        <Link href="/account/Register">
          <Tab label="Contact Us" />
        </Link>

        <Link href="/account/Register">
          <Tab label="About" />
        </Link>

        <Link href="/account/Register" passHref>
          <Tab icon={<HiShoppingCart />} aria-label="phone" />
        </Link>

        <Link href="/account/Login" passHref>
          <Tab label="Login" component="a" />
        </Link>
        <Link href="/account/Register" passHref>
          <Tab label="Register" component="a" />
        </Link>
        <Profile />
      </Tabs>
    </Box>
  );
};

export default NavBar;
